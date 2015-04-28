// main.js
// =======

var mysql       = require('mysql');
var fs          = require('fs');
var paramters   = require('./config/parameters.config');
var queries       = require('./sql/services.sql');

var connection  = mysql.createConnection(paramters.db_connection());

var writeJson = function (queryAction, fileName) {
    connection.query(queryAction, function(err, rows, fields) {
        if (err) {
            throw err;
        }
        fs.writeFile(fileName, JSON.stringify(rows), function (err) {
            if (err) {
                throw err;
            }
            console.log(fileName + ' it is saved!');
        });
    });
};

connection.connect(function(err){
    if(!err) {
        console.log('Database is connected ...');  
    } else {
        console.log('Error connecting database ...');  
    }
});

writeJson(queries.services(), 'services.data.json');
writeJson(queries.instruments(), 'instruments.data.json');
writeJson(queries.laboratories(), 'laboratories.data.json');

connection.end();
