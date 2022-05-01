const express = require('express')
const cors = require('cors')
var bodyParser = require('body-parser')

const app = express()

const expressJWT = require('express-jwt')
const config = require('./config')

app.use(expressJWT({ secret: config.jwtSecretKey,algorithms:['HS256'] }).unless({ path: [/^\/api/]}))
const userRouter = require('./router/user')
//const { config } = require('./db')

app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())


app.use('/api', userRouter)
app.use((err, req, res, next) => {
    res.cc = function (err, status = 1) {
        res.send({
            status,
            message: err instanceof Error ? err.message : err
        })
    }
    if (err.name === 'UnauthorizedError') return res.cc('身份认证失败')
    res.cc(err)
    next()
})
const server = app.listen(3307, () => {
    console.log('1212')
})
server.setTimeout(10000)