 

 const mysql=require('mysql2');

 const pool=mysql.createPool({
     host:'local',
     user:'root',
     password:'root',
     database:'shop'
 });


 module.exports =pool.promise();


 