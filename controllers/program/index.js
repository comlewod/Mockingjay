const router = require('express').Router()
const fs = require('fs')
const path = require('path')
const glob = require('glob')

const crud = require('../../database/crud')
const config = require('../../config')


router.get('/get', (req, res) => {
	let files = fs.readdirSync(config.PROGRAM_PATH)
	let info = []
	files.forEach(file_name => {
		info.push({
			program: file_name
		})
	})
	res.json({
		code: 0,
		info: info,
		msg: ''
	})
	//glob(path.join(config.PROGRAM_PATH, '*'), (err, files) => {
	//	console.log(111, files)
	//	files.forEach(_path => {
	//		let arr = _path.split('/')
	//	})
	//	res.json({
	//		code: 0
	//	})
	//})
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
