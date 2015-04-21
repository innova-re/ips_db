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

    console.log('The solution is: ', rows);

    var obj = {};

    for(row in rows) {
        var line = rows[row];
        console.log('\nrow: ', line['nome']);
        console.log('\n', line['descrizione']);
        console.log('\n', line['id_laboratorio']);
    }
});

connection.end();
