var mysql = require('mysql');


var con = mysql.createConnection({host:"localhost", user:"root",password:""});

con.connect(function(error){
    if(error){
        console.log("connection has failed" + error);
    }

    console.log("connection has been successful");
    con.query("CREATE DATABASE node_database", function(error, result){
        if(error){
            console.log("Error while creating database : " + error);
        }
        console.log("Database has successfully created");
    });


})