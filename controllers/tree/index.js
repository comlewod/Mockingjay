const router = require('express').Router()
const fs = require('fs')
const path = require('path')

const config = require('../../config')

router.post('/add', (req, res) => {
	let { url, type, json, project, query, body, response } = req.body
	let info = Models.routes.add(Object.assign({}, req.body))
	res.json(info)
})


router.get('/get', (req, res) => {
	let { file_path } = req.query
	let info = Models.getJson(file_path)
	res.json({
		code: 0,
		info: info,
		msg: ''
	})
})

module.exports = router
