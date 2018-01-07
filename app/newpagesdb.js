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

		var pagename = db.pagename;
		var pagecontent = db.pagecontent;
		var image = db.image;
		var pagedescription = "About Page";
		var status = 10;

		var pageDetails = { pagename, pagecontent,pagedescription,image,status};

		connection.query('INSERT INTO pagetable SET ?', pageDetails, function (error, results) {
			if (error) throw error;
			callback(results)
			console.log(results)
		});
		connection.release();
	});
}
