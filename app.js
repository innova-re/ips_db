/*
    SIMPLE RESTFUL WEB APP WITH NODE.JS, EXPRESS, AND MYSQL
 */

var app = require('express')(); // Express App include
var http = require('http').Server(app); // http server
var mysql = require('mysql'); // Mysql include
var bodyParser = require("body-parser"); // Body parser for fetch posted data
var paramters = require('./config/parameters.config');
var connection = mysql.createConnection(paramters.db_connection());
var queries = require('./sql/services.sql');
var getResourse = function (item) {
    return function (req, res) {
        connection.query(queries[item](), function(err, rows, fields){
            if (rows.length != 0) {
                res.header("Access-Control-Allow-Origin", "*");
                res.json(rows);
            }
        });
    }
}

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json()); // Body parser use JSON data

app.get('/macroarea', getResourse('macroarea'));
app.get('/laboratories', getResourse('laboratories'));
app.get('/instruments', getResourse('instruments'));
app.get('/services', getResourse('services'));

http.listen(8080, function () {
    console.log("Connected & Listen to port 8080");
});
