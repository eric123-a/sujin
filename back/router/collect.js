const express = require('express')
const router = express.Router()

const collect_hander = require('../router_hander/collect')

router.post('/collect', collect_hander.collect)


module.exports = router