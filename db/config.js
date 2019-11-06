//var express = require('express');
const mysql = require('mysql');

var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root", //"dbuser", 
    password: "root", //"password",
    database: "sfsuDatabase"
  });


module.exports = connection;