const db = require('../db/index')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const config = require('../config')
const sql = 'select * from user where username=?'


exports.register = (req, res) => {
    const userinfo = req.body
    db.query(sql, [userinfo.username], function (err, results) {
        if (err) {
            // return res.send({ status: 1, message: err.message })
            return res.cc(err)
        }

        if (results.length > 0) {
            //return res.send({ status: 1, message: '用户名被占用' })
            return res.cc('用户名被占用')
        }
        const insertUser = 'insert into user set ?'
        userinfo.password = bcrypt.hashSync(userinfo.password, 10)
        db.query(insertUser, { username: userinfo.username, password: userinfo.password, phone: userinfo.phone }, (err, results) => {
            //if (err) return res.send({ status: 1, message: err.message })
            if (err) return res.cc(err)
            //    if (results.affectedRows !== 1) return res.send({ status: 1, message: '注册用户失败，请稍后再试！' })
            if (results.affectedRows !== 1) return res.cc('注册用户失败，请稍后再试！')
            // res.send({ status: 0, message: '注册成功' })
            res.cc('注册成功', 0)
        })
    })

    // console.log(userinfo)

    //  res.send('322')
}
exports.login = (req, res) => {
    const userinfo = req.body;
    const sqlfinduser = 'select * from user where username=?'

    db.query(sqlfinduser, [userinfo.username], (err, results) => {
        if (err) return res.cc(err)

        if (results.length !== 1) return res.cc('登录失败!')

        const compareResult = bcrypt.compareSync(userinfo.password, results[0].password)
        if (!compareResult) return res.cc('密码错误')
        const user = { ...results[0], password: '' }
        const tokenStr = jwt.sign(user, config.jwtSecretKey, { expiresIn: config.expiresIn })
        res.send({
            status: 0,
            message: '登录成功',
            token: 'Bearer ' + tokenStr
        })
    })
    //  res.send('323232')
}