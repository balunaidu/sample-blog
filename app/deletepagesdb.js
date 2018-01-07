var mysql = require('mysql');
var pool  = mysql.createPool({
	connectionLimit : 10,
	host            : 'localhost',
	user            : 'root',
	password        : 'root',
	database        : 'cmsdb'
});



module.exports = function(get, callback){ 
	console.log(get)
	pool.getConnection(function(err, connection) {

		connection.query(`DELETE FROM pagetable WHERE ID = "${get.ID}";`, function (error, results) {
			if (error) throw error;
			callback(results)
			console.log(results)
		});
		connection.release();
	});
}
