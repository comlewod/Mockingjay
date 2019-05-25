const router = require('express').Router()
const fs = require('fs')
const path = require('path')
const glob = require('glob')

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
	let _path = path.join(config.PROGRAM_PATH, name)
	try {
		fs.accessSync(_path)
		res.json({
			code: -1,
			msg: '项目已存在'
		})
	} catch(e) {
		fs.mkdir(_path, err => {
			if( err ){
				throw err
				res.json({
					code: -1,
					msg: '项目已存在'
				})
			} else {
				res.json({
					code: 0,
					msg: ''
				})
			}
		})
	}
})

module.exports = router
