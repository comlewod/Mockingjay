const router = require('express').Router()

router.use('/program', require('./program'))
router.use('/tree', require('./tree'))

module.exports = router
