var express = require('express')
var app = express();
var Busboy = require('busboy');
var path = require('path')
var fs = require('fs')
var upload = require('./app/routes')(app)
var bodyParser = require('body-parser')
var logindb = require('./app/logindb')
var regdb = require('./app/regdb')
var updateUser = require('./app/updateUser')
var updatepage = require('./app/updatepage')
var newpagesdb = require('./app/newpagesdb')
var accordion = require('./app/accordion')
var deletepagesdb = require('./app/deletepagesdb')
var deleteuser = require('./app/deleteuser')
var mysql = require('mysql');
var pool = mysql.createPool({
    connectionLimit: 20,
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'cmsdb'
});


app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.static('www'))

 app.post('/photos/upload', function (req, res, next) {
    console.log(req.body);
   
})


app.post('/login', function(request, response) {

    var username = request.body.username;
    var password = request.body.password;
    var get = { username, password };
    var token = new Buffer(password).toString('base64')
    logindb(get, function(results) {
        console.log(results)
        if (results=='invalid') {
            response.send({
                status: 'failed',
                message: results
            })
        } else {
            
            response.send({
                status: 'success',
                message: results,
                token: token
            })
        }
    })
})


  app.post("/uploadFile", function(req, res) {
        console.log("File save params ", JSON.stringify(req.params));
        var images = [];
        var busboy = new Busboy({ headers: req.headers });
        var files = 0,
        finished = false;
        busboy.on('file', function(fieldname, file, filename, encoding, mimetype) {
            //var saveTo = path.join('c:/wamp/www/cc/uploads', filename);
            //var saveTo = path.join('d:/wamp/www/chelon/uploads', filename);
            var saveTo = path.join('/home/balu/Documents/Content-Management-System/www/uploads/images', filename);
            ++files;
            var fstream = fs.createWriteStream(saveTo);
            images.push({ imageName: filename });
            fstream.on('finish', function() {
                if (--files === 0 && finished) {
                    res.writeHead(200, { 'Connection': 'close' });
                    res.end(JSON.stringify(images));
                    images = [];
                }
            });
            file.pipe(fstream);
        });
        busboy.on('finish', function() {
            finished = true;
            // res.writeHead(200, { 'Connection': 'close' });
            // res.end(JSON.stringify(images));
        });
        return req.pipe(busboy);
    });

app.post('/register', function(request, response) {
    var body = request.body;
    var userDetails = {
        firstname: body.firstname,
        lastname: body.lastname,
        username: body.username,
        password: body.password,
        email: body.email,
        role: 'user'
    }
    regdb(userDetails, function(results) {
        response.send(results)
    })
});

app.post('/editUser', function(request, response) {
    var body = request.body;
    var firstname = body.firstname;
    var lastname = body.lastname;
    var username = body.username;
    var email = body.email;
    var taskID = body.no;
    var get = { firstname, lastname, username, email, taskID };

    updateUser(get, function(results) {
        response.send(results)
    })
})

app.get('/userdetails', function(request, response) {
    if (request.headers.authorization) {
        pool.getConnection(function(err, connection) {
            connection.query(`SELECT ID,firstname,lastname,username,email FROM regtable;`, function(err, results) {
                if (err) throw console.log(err);
                response.send(results)
            })
        })
    } else {
        response.send('invalid access');
    }
})

app.post('/getUserData', function(request, response) {
    if (request.headers.authorization) {
        var taskID = request.body.taskID;
        pool.getConnection(function(err, connection) {

            connection.query(`SELECT * FROM regtable WHERE ID = "${taskID}";`, function(err, results) {
                if (err) throw console.log(err);
                response.send(results)
            })
        })
    } else {
        response.send('invalid access');
    }
})

app.post('/todeleteuser', function(request, response) {
    var body = request.body;
    console.log(body)
    var ID = body.ID;
    var get = { ID }
    deleteuser(get, function(results) {
        response.send(results)
    })
})

app.post('/newpages', function(request, response) {
    var image = request.body.image;
    var pagename = request.body.pagename;
    var pagecontent = request.body.pagecontent;
    var details = { pagename, pagecontent,image};

    newpagesdb(details, function(results) {
        response.send(results)
    })
})

app.post('/accordion', function(request, response) {
    var content = request.body.content;
    console.log(content)
    var details = {content};

    accordion(details, function(results) {
        response.send(results)
    })
})

app.post('/todeletepages', function(request, response) {
    var body = request.body;
    console.log(body)
    var ID = body.ID;
    var get = { ID }
    deletepagesdb(get, function(results) {
        response.send(results)
    })
})

app.get('/contentsofpage', function(request, response) {
    pool.getConnection(function(err, connection) {

        connection.query(`SELECT * FROM pagetable;`, function(err, results) {
            if (err) throw console.log(err);
            response.send(results)
        })
    })

})

app.get('/contentsByID/:ID', function(request, response) {

    var ID = request.params.ID;
    pool.getConnection(function(err, connection) {
        connection.query(`SELECT * FROM pagetable WHERE ID="${ID}";`, function(err, results) {
            if (err) throw console.log(err);
            response.send(results)
        })
    })

})

app.post('/pageDetails', function(request, response) {
    var body = request.body;
    var ID = body.ID;
    var pagename = body.pagename;
    var pagecontent = body.pagecontent;
    var get = { pagename, pagecontent, ID };

    updatepage(get, function(results) {
        response.send(results)
    })
})

app.post('/editpage', function(request, response) {
    // console.log(request.file)
    var body = request.body;
    var pagename = body.pagename;
    var pagecontent = body.pagecontent;
    var ID = body.ID;
    var get = { pagename, pagecontent, ID };
    console.log(get)

    updatepage(get, function(results) {
        response.send(results)
    })
})

app.post('/allpagedetails', function(request, response){
    var ID = request.body.ID;
    pool.getConnection(function(err, connection) {

        connection.query(`SELECT ID,pagename FROM pagetable;`, function(err, results) {
            if (err) throw console.log(err);
            response.send(results)
        })
    })
})

app.post('/getPageData', function(request, response) {
    var ID = request.body.ID;
    pool.getConnection(function(err, connection) {

        connection.query(`SELECT * FROM pagetable WHERE ID = "${ID}";`, function(err, results) {
            if (err) throw console.log(err);
            response.send(results)
        })
    })

})


app.listen(4000, console.log('Server is listening at 4000'))