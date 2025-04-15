var mysql = require("mysql");
var con = mysql.createConnection({
    host:"localhost",
    user: "root",
    password: "",
    database : "node_database",
}) ; 
module.exports = con;