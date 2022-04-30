const express = require('express')
const cors = require('cors')

const app = express()
app.use(cors())
app.use(express.urlencoded({ extended: false }))

const userRouter = require('./router/user')
app.get('/user',(req,res)=>{
    res.send('32323')
})
app.use('/api',userRouter)
app.listen(3307, () => {
      console.log('1212')
})