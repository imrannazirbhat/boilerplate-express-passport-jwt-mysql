const express = require('express')
const mysql = require('mysql');
const app = express()
const port = 3000

app.use(express.json());       // to support JSON-encoded bodies
app.use(express.urlencoded()); // to support URL-encoded bodies


app.get('/', function(req, res){

    var con = mysql.createConnection({
      host: "localhost",
      port: 3306,
      user: "root", //"dbuser", 
      password: "root", //"password",
      database: "db_converter"
    });
    
    con.connect(function(err) {

      if (err) throw err;
        
      console.log("Connected!");
        
      /*var sql = "INSERT INTO tblConversionLog (euroAmount, customer, currency, convertedAmount) VALUES (" + req.body.euroAmount + ", '" + req.body.customer + "', '" + req.body.currency  + "', " + req.body.convertedAmount + ")";

      con.query(sql, function (err, result) {
        if (err) throw err;
        console.log("1 record inserted");
      });*/

    });
    
    res.end();

});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));