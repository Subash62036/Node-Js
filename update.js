var mysql = require("mysql");

var con = mysql.createConnection({
    host : 'localhost',
    user : 'root',
    password : '',
    database : 'node_database'
});
// console.log(con);
con.connect(function(error){
     if(error) throw error;
     
     var sql = "UPDATE Customers SET name='Test', address='Test' WHERE id=1";
     con.query(sql, function(errro, result){
           if(error) throw error;
           console.log(result.affectedRows);
     });
});