const mysql = require('mysql')

const db = mysql.createPool({
    host: 'localhost',
    user: 'root',
    port:'3308',
    password: '123456',
    database: 'sujin'
})