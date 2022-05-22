const db = require('../db/index')
const config = require('../config');
const { send } = require('express/lib/response');

exports.filter = (req, res) => {
    const filter = req.body

    let filtersql = 'select * from blog where 1=1 ';

    if (filter.tag !== undefined) filtersql = filtersql + "and tag = '" + filter.tag + "' ";

    if (filter.uid !== undefined) filtersql = filtersql + "and uid = '" + filter.uid + "' ";

    if (filter.blogId !== undefined) filtersql = filtersql + "and blogId = '" + filter.blogId + "' ";

    db.query(filtersql, function (err, result) {
        if (err) return res.send(err)

        res.send({ status: 0, data: result })
    })
}
exports.issue = (req, res) => {
    const data = req.body
    let sql='insert into blog set ?'
    db.query(sql,{content:data.content,tag:data.tag,title:data.title,uid:data.uid},function(err,result){
        if(err) return res.send(err)
        if (result.affectedRows !== 1) return res.send('發佈失败，请稍后再试！')
        res.send({ status: 0, message: '發佈成功' })
    })
}