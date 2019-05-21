const router = require('express').Router()
const crud = require('../database/crud')

router.post('/program/add', (req, res) => {
	let { name } = req.body
	res.json({haha: 'haha'})
})

module.exports = router
