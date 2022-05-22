//const { Sequelize } = require('sequelize');

/*var db = new Sequelize('sujin', 'root', '123456',  {
    host: 'localhost',
    dialect: 'mysql',
   
  });*/

const mysql = require('mysql')

const db =  mysql.createPool({
  host: 'localhost',
  user: 'root',
  port: '3308',
  password: '123456',
  database: 'sujin'
})

/*mysql.createPool({
    host: 'localhost',
    user: 'root',
    port: '3308',
    password: '123456',
    database: 'sujin'
})*/

module.exports = db