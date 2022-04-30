const mysql = require('mysql')
var express = require('express');
var app = express();

const db = mysql.createPool({
    host: 'localhost',
    user: 'root',
    port: '3308',
    password: '123456',
    database: 'sujin'
})

app.get('/blog/filter', function (req, res) {
    res.send('hello world');
});

db.query('select * from blog where uid=1 and tag=', (err, results) => {
    if (err) return console.log(err.message)
    console.log(results)
})