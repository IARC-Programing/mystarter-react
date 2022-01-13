const router = require('express').Router()

router.use('/available-module', require('./availableModule'))

router.use('/comment', require('./comment'))

module.exports = router
