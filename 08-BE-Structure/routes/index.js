const path = require('path')

const express = require('express')
const router = require('express').Router()

const config = require('../configs/app')

const staticExport = express.static(path.join(__dirname, '../www'))

router.use(`/api/v${config.apiVersion}`, require('./api'))

router.use('/', staticExport)
router.use('', staticExport)

module.exports = router
