
var mysql = require('mysql');
var connection = mysql.createConnection({
  host:'127.0.0.1',
  port:'3306',
  user:'root',
  password:'123456',
  database:'mydb'
});
connection.connect(function(error){
  if(!error){
    console.log('Connected');
  }else{
    console.log('failed connection');
  };
 
  });

module.exports = connection;
