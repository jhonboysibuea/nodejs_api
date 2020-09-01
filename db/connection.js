var mysql = require('mysql');

//setup connection
var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root",
  database: "belajar_nodejs"
});

//connecting
con.connect(function (err){
    if(err) throw err;
});
//module export disini adalah untuk membuat package kita sebagai library
module.exports = con;