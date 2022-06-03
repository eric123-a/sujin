const express = require('express')
const cors = require('cors')
var bodyParser = require('body-parser')

const app = express()

const expressJWT = require('express-jwt')
const config = require('./config')

//app.use(expressJWT({ secret: config.jwtSecretKey, algorithms: ['HS256'] }).unless({ path: ['/api/blog/filter','/api/user/login','/api/user/register','/api/user/filter'] }))


const userRouter = require('./router/user')
const blogRouter = require('./router/blog')
const commentRouter = require('./router/comment')
const collectRouter = require('./router/collect')
const friendRouter = require('./router/friend')
//const { config } = require('./db')

app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

//user路由
app.use('/api/user', userRouter)
//blog 路由
app.use('/api/blog', blogRouter)
//comment路由
app.use('/api/comment', commentRouter)
//collect路由
app.use('/api/collect', collectRouter)
//friend路由
app.use('/api/friend', friendRouter)
/*app.use((err, req, res, next) => {
    res.cc = function (err, status = 1) {
        res.send({
            status,
            message: err instanceof Error ? err.message : err
        })
    }
    if (err.name === 'UnauthorizedError') return res.cc('身份认证失败')
    res.cc(err)
    next()
})*/

const server = app.listen(3307, () => {
    console.log('服务器开启')
})
server.setTimeout(10000)