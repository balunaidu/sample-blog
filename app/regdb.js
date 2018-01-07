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

		var firstname = db.firstname;
		var lastname = db.lastname;
		var username = db.username;
		var password = db.password;
		var email = db.email;
		var role = db.role;
		var status = 10;

		var regdetails = {firstname, lastname, username, password, email, status, role}

		connection.query('INSERT INTO regtable SET ?', regdetails, function (error, results) {
			if (error) throw error;
			callback(results)
		});
		connection.release();
	});
}
