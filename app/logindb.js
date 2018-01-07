var mysql = require('mysql');
var pool  = mysql.createPool({
	connectionLimit : 10,
	host            : 'localhost',
	user            : 'root',
	password        : 'root',
	database        : 'cmsdb'
});



module.exports = function(get, cb){ 
	pool.getConnection(function(err, connection) {
		console.log(get)
		 connection.query(`SELECT role,password FROM regtable WHERE username = "${get.username}"`, function(err, results) {
                	console.log(results)
			if (err) throw err;
			   if (results.length>0) {
                if(get.password == results[0].password){
                    cb(results[0])

                }else{
                    cb('invalid')
                }
            }
            else{
                cb('invalid')
            }
		});
		connection.release();
	});
}