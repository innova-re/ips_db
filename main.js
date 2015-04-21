// main.js
// ===================

var mysql       = require('mysql');
var paramters   = require('./config/parameters.config');
var connection  = mysql.createConnection(paramters.db_connection());
var query       = require('./sql/services.sql');

connection.connect(function(err){
    if(!err) {
        console.log("Database is connected ...");  
    } else {
        console.log("Error connecting database ...");  
    }
});

connection.query(query.services(), function(err, rows, fields) {
    if (err) throw err;

    // TODO should write a JSON file
    console.log('The solution is: ', rows);
});

connection.end();
