const express = require('express')
const router = express.Router()

const friend_hander = require('../router_hander/friend')

router.post('/befriend', friend_hander.befriend)


module.exports = router