var mysql = require("mysql");
var con = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'',
    database:'node_database'
});

con.connect(function(error,result){
     if(error) throw error;
     console.log("connection has established");
     sql = "INSERT INTO Customers(name,address) VALUES ('Subash','New Town Kolkata')";
     con.query(sql, function(error, result){
         if(error) throw error;
         console.log(result);
     });
});