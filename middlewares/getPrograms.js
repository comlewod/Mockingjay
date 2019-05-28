const fs = require('fs')
const glob = require('glob')
const path = require('path')
const config = require('../config')

module.exports = app => {
	//获取所有已有项目
	try {
		fs.readdirSync(config.PROJECTS_PATH)
	} catch(e){
		fs.mkdirSync(config.PROJECTS_PATH)
	}
	let files = fs.readdirSync(config.PROJECTS_PATH)
	let projects = []
	files.forEach(file_name => {
		projects.push({
			project: file_name
		})

		glob(path.join(config.PROJECTS_PATH, file_name), (err, files) => {
		})
	})

	app.locals.projects = projects
}
