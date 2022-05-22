const db = require('../db/index')

exports.issue = (req, res) => {
    const comment = req.body
    const sql = 'insert into comment set ?';
    db.query(sql, { blogId: comment.blogId, uid: comment.uid, content: comment.content }, (err, result) => {
        if (err) res.send(err);
        if (result.affectedRows !== 1) return res.send('发布失败，请稍后再试！')
        res.send({ status: 0, message: '发布成功' })
    })
}
exports.filter = (req, res) => {
    const filter = req.body
    const sql = 'select * from comment where 1=1'
    if (filter.blogId !== undefined) filtersql = sql + "and blogId = '" + filter.blogId + "' ";
    if (filter.uid !== undefined) filtersql = sql + "and uid = '" + filter.uid + "' ";
    db.query(sql, (err, result) => {
        if (err) res.send(err);
        res.send({ status: 0, data: result })
    })
}