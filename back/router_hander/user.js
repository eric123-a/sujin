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
            return res.send(err)
        }

        if (results.length > 0) {
            //return res.send({ status: 1, message: '用户名被占用' })
            return res.send('用户名被占用')
        }
        const insertUser = 'insert into user set ?'
        userinfo.password = bcrypt.hashSync(userinfo.password, 10)
        db.query(insertUser, { username: userinfo.username, password: userinfo.password, phone: userinfo.phone }, (err, results) => {
            //if (err) return res.send({ status: 1, message: err.message })
            if (err) return res.send({ status: 1, message: err.message })
            //    if (results.affectedRows !== 1) return res.send({ status: 1, message: '注册用户失败，请稍后再试！' })
            if (results.affectedRows !== 1) return res.send('注册用户失败，请稍后再试！')
            // res.send({ status: 0, message: '注册成功' })
            res.send({ status: 0, message: '注册成功' })
        })
    })


}
exports.login = (req, res) => {
    const userinfo = req.body;
    const sqlfinduser = 'select * from user where username=?'

    db.query(sqlfinduser, [userinfo.username], (err, results) => {
        if (err) return res.send('登录失败!')

        if (results.length !== 1) return res.send('登录失败!')

        const compareResult = bcrypt.compareSync(userinfo.password, results[0].password)
        if (!compareResult) return res.send('密码错误')
        const user = { ...results[0], password: '' }
        const tokenStr = jwt.sign(user, config.jwtSecretKey, { expiresIn: config.expiresIn })
        res.send({
            status: 0,
            uid: results[0].uid,
            message: '登录成功',
            token: 'Bearer ' + tokenStr
        })
    })
}
exports.filter = (req, res) => {
    const id = req.body;
    const sqlfinduser = 'select * from user where uid=?'
    db.query(sqlfinduser, [id.uid], (err, results) => {
        if (err) return res.send('獲取失败!')

        if (results.length !== 1) return res.send('無此用戶!')

        res.send({
            status: 0,
            message: '獲取成功',
            data:results[0]
        })
    })
}