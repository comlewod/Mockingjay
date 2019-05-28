const router = require('express').Router()

router.use('/project', require('./project'))
router.use('/tree', require('./tree'))

module.exports = router
