// *********************************************************************************
// CONNECTION.JS - THIS FILE INITIATES THE CONNECTION TO MYSQL
// *********************************************************************************

// Dependencies
var Sequelize = require("sequelize");

// Creates mySQL connection using Sequelize, the empty string in the third argument spot is our password.
var sequelize = new Sequelize("sequelize_chirpy", "root", "password", {
  host: "localhost",
  port: 3306,
  dialect: "mysql",
  pool: {
    max: 5,
    min: 0,
    idle: 10000
  }
});

// When your application needs to retrieve data from the database, it creates a database connection. 
// Creating this connection involves some overhead of time and machine resources for both your application and the database. 
// Many database libraries and ORM's will try to reuse connections when possible, so that they do not incur the overhead of establishing that DB connection over and over again. 
// The pool is the collection of these saved, reusable connections that, in your case, Sequelize pulls from.
// Never have more than five open connections (max: 5)
// At a minimum, have zero open connections/maintain no minimum number of connections (min: 0)
// Remove a connection from the pool after the connection has been idle (not been used) for 10 seconds (idle: 10000)

// Exports the connection for other files to use
module.exports = sequelize;
