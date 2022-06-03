const db = require('../db/index')

exports.friendask = (req, res) => {
    const info = req.body
    const sql = 'insert into friendask set ?'
    db.query(sql, { receiverid: info.receiverid, senderid: info.senderid }, (err, result) => {
        if (err) res.send(err)
        if (result.affectedRows !== 1) res.send('发送失败')
        res.send({ status: 0, messaga: '发送成功' })
    })
}
exports.filter = (req, res) => {
    const info = req.body
    const sql = 'select * from friendask where 1=1'
    if (info.receiverid !== undefined) sql = sql + "and receiverid = '" + info.receiverid + "' ";
    db.query(sql, (err, result => {
        if (err) res.send(err)
        res.send({ status: 0, data: result })
    }))
}