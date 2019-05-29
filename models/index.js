const fs = require('fs')
const path = require('path')
const glob = require('glob')
const config = require('../config')

const routes = require('./routes')

//遍历获取所有子目录和文件
function dirLoop(dir_path){
	let obj = {dirs: {}, files: []}
	let arr = []
	glob.sync(path.join(dir_path, '*')).forEach(_path => {
		let info = _path.split('/').reverse()
		let name = info[0]
		if( /\.js/.test(name) ){
			obj.files.push(name)
			arr.push({
				name,
				path: path.relative(config.PROJECTS_PATH, _path),
				type: 2,
			})
		} else {
			arr.push({
				name,
				path: path.relative(config.PROJECTS_PATH, _path),
				type: 1,
				files: dirLoop(_path)
			})
			obj.dirs[name] = dirLoop(_path)
		}
	})
	return arr
}

module.exports = app => {
	let Models = {
		//获取所有项目
		getPorgrams(){
			let info = dirLoop(config.PROJECTS_PATH)
			return info
		},
		//获取json
		getJson(file_path = ''){
			file_path = path.join(config.PROJECTS_PATH, file_path)
			let json = require(file_path)
			return json || {}
		}
	}
	Models.routes = routes

	global.Models = Models
}
