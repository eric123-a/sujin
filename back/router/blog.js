const express = require('express')
const router = express.Router()

const blog_hander = require('../router_hander/blog')

router.post('/filter', blog_hander.filter)

router.post('/issue', blog_hander.issue)

module.exports = router