var mysql = require('mysql');
var connection = mysql.createConnection({
   host: 'uco123.cubwz8gcpznu.us-west-2.rds.amazonaws.com',
   user: 'admin',
   password: 'admin123',
   database: 'uco123' 
});

connection.connect();

connection.query('Select * From User', function(err,rows,field) {
   if(!err)
    console.log('The solution is: ', rows);
   else
    console.log('Error while performing Query.');  
});

connection.end();