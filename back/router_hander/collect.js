const db = require('../db/index')

exports.collect=(req,res)=>{
    const collect=req.body
    const sql='insert into collect set ?'
    db.query(sql,{blogId:collect.blogId,uid:collect.uid},(err,result)=>{
        if(err) res.send(err)
        if(result.affectedRows !== 1) res.send('收藏失败，请稍后再试')
        res.send({status:0,message:'收藏成功'})
    })
}