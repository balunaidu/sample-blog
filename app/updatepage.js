var mysql = require('mysql');
var pool = mysql.createPool({
    connectionLimit: 20,
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'cmsdb'
});
 
 module.exports = function(get, cb){
      console.log(get)
        pool.getConnection(function(err, connection) {
            connection.query(`UPDATE pagetable SET pagename="${get.pagename}",pagecontent="${get.pagecontent}" WHERE ID= "${get.ID}" `, function(err, results) {
                if (err) throw console.log(err);
                console.log(results)
                cb(results)
            })
        })
    
}