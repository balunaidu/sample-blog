var mysql = require('mysql');
var pool = mysql.createPool({
    connectionLimit: 20,
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'cmsdb'
});
 
 module.exports = function(get, cb){

        pool.getConnection(function(err, connection) {
            connection.query(`UPDATE regtable SET firstname="${get.firstname}",lastname="${get.lastname}",username="${get.username}",email="${get.email}" WHERE ID="${get.taskID}"`, function(err, results) {
                if (err) throw console.log(err);
                console.log(results)
                cb(results)
            })
        })
    
}