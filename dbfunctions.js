
var mysql = require ('mysql');
var connection = mysql.createConnection({
	host: 'localhost',
	user: 'root',
	password: 'root',
	database: 'db1'
});

function insert(userData, tableName){
	connection.connect();
	//var newUser = {id:1,name:'Emilio',password:'soccer'};

	connection.query('INSERT INTO ' + tableName +' SET ?', userData, function(err,result){
	if(!err)
		console.log('inserted successfully!');
	else
		console.log("this was the error:", err);
	})
}

module.exports = {
	insert: insert
};
