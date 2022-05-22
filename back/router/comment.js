const express = require('express')
const router = express.Router()

const comment_hander = require('../router_hander/comment')

router.post('/issue', comment_hander.issue)

router.post('/filter',comment_hander.filter)

module.exports = router