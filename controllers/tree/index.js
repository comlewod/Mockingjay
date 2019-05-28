const router = require('express').Router()
const fs = require('fs')
const path = require('path')

const config = require('../../config')

router.post('/add', (req, res) => {
	let { url, type, json, project, query, body, response } = req.body

	let path_arr = url.split('/').filter(str => !!str.trim())
	let file_path = ''
	if( path_arr.some(val => /^\w{1,15}$/.test(val)) ){
		path_arr.forEach((val, index) => {
			file_path = path.join(file_path, val)
			let _path = path.join(config.PROJECTS_PATH, project, file_path)
			if( index != path_arr.length - 1 ){ 
				try {
					fs.accessSync(_path)
				} catch(e){
					fs.mkdirSync(_path)
				}
			}
		})
		file_path = path.join(config.PROJECTS_PATH, project, file_path + '.js')

		let file_content = { url, type, json, project, query, body, response }
		fs.writeFileSync(file_path, 'module.exports=' + JSON.stringify(file_content), 'utf8')
		
		res.send(file_path);return
	} else {
	}
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
