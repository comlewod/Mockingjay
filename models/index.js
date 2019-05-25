const fs = require('fs')
const path = require('path')
const glob = require('glob')
const config = require('../config')

//遍历获取所有子目录和文件
function dirLoop(dir_path){
	let obj = {dirs: {}, files: []}
	glob.sync(path.join(dir_path, '*')).forEach(_path => {
		let info = _path.split('/').reverse()
		let name = info[0]
		if( /\.js/.test(name) ){
			obj.files.push(name)
		} else {
			obj.dirs[name] = dirLoop(_path)
		}
	})
	return obj 
}

module.exports = app => {
	global.Models = {
		getPorgrams(){
			let info = dirLoop(config.PROGRAM_PATH)
			return info
		}
	}
}
