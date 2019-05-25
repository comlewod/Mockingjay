const fs = require('fs')
const glob = require('glob')
const path = require('path')
const config = require('../config')

module.exports = app => {
	//获取所有已有项目
	try {
		fs.readdirSync(config.PROGRAM_PATH)
	} catch(e){
		console.log(111, e)
		fs.mkdirSync(config.PROGRAM_PATH)
	}
	let files = fs.readdirSync(config.PROGRAM_PATH)
	let programs = []
	files.forEach(file_name => {
		programs.push({
			program: file_name
		})

		glob(path.join(config.PROGRAM_PATH, file_name), (err, files) => {
		})
	})

	app.locals.programs = programs
}
