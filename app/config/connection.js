// *********************************************************************************
// CONNECTION.JS - THIS FILE INITIATES THE CONNECTION TO MYSQL
// *********************************************************************************

var mysql = require('mysql');

// we placed the connections in this source object
var source = {
    // localhost
    localhost: {
        port: 3306,
        host: 'localhost',
        user: 'root',
        password: "Njmitx123",
        database: "starwars"
    },

    // jawsDB
    jawsDB: {
        port: 3306,
        host: 'bqmayq5x95g1sgr9.cbetxkdyhwsb.us-east-1.rds.amazonaws.com',
        user: 'grdzj91e2tip9fus',
        password: "b6ilubvoezzjb0ng",
        database: "un66s53fwl4y22lk" 
    }
}

// we use source.[name of connection] to hook into mysql
var connection = mysql.createConnection(source.jawsDB);


connection.connect(function(err) {
    if (err) {
        console.error('error connecting: ' + err.stack);
        return;
    }
    console.log('connected as id ' + connection.threadId);
});

module.exports = connection;