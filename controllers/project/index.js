const router = require('express').Router()
const fs = require('fs')
const path = require('path')
const glob = require('glob')

const config = require('../../config')

router.get('/get', (req, res) => {
	let info = Models.getPorgrams()
	res.app.locals.program = info
	res.json({
		code: 0,
		info: info,
		msg: ''
	})
})

router.post('/add', (req, res) => {
	let { name } = req.body
	let info = Models.projects.add(name)
	res.json(info)
})

module.exports = router
