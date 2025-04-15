var mysql = require("mysql");
// const{con} = require("./config.js");
var con = mysql.createConnection({
    host:"localhost",
    user:"root",
    password : "",
    database: "node_database"
});

con.connect(function(err){
    if(err) throw err;
    console.log("Connection has been established!!.");

    var sql = "INSERT INTO Customers(name, address) VALUES ?";
    var values =[
        ["Rahul1","Hazaribag, Jharkhand"],
        ["Ramshek","Itkhori, Chatra, Jharkhand"],
        ["Mithlesh","BadkaGoan, Hazaribag, Jharkhand"]

];
    con.query(sql,[values], function(error, result){
         if(error) throw error;
         console.log(result.affectedRows);
        
    });
});