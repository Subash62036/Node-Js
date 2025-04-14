var mysql = require("mysql");
var http = require("http");

var con = mysql.createConnection({
    host:"localhost",
    user: "root",
    password: "",
    database : "node_database",
});


    con.connect(function(error){

        if(error) throw error;
 
        var sql = "CREATE TABLE customers (id INT AUTO_INCREMENT PRIMARY KEY, name VARCHAR(255), address VARCHAR(255))";

        con.query(sql,function(error, result){

            if(error) throw error;

              console.log("Table create successfully");
        })
    });
   




