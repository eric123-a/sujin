const db = require('../db/index')

exports.befriend=(req,res)=>{
    const info=req.body
    const sql='insert into friend set ?'
    db.query(sql,{blogId:info.blogId,uid:info.uid},(err,result)=>{
        if(err) res.send(err)
        if(result.affectedRows!==1) res.send('添加失败')
        res.send({status:0,messaga:'添加成功'})
    })
}