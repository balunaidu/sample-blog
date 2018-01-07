var mysql = require('mysql');
var pool  = mysql.createPool({
	connectionLimit : 10,
	host            : 'localhost',
	user            : 'root',
	password        : 'root',
	database        : 'cmsdb'
});



module.exports = function(db, callback){ 
	pool.getConnection(function(err, connection) {

		var content = db.content;

		var pageDetails = {content};

		connection.query('INSERT INTO accordiontable SET ?', pageDetails, function (error, results) {
			if (error) throw error;
			callback(results)
			console.log(results)
		});
		connection.release();
	});
}
