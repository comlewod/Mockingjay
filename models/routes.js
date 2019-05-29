const fs = require('fs')
const path = require('path')
const config = require('../config')

module.exports = {
	add(obj){
		let { url, type, json, project, query, body, response } = obj
		let path_arr = url.split('/').filter(str => !!str.trim())
		let file_path = ''
		if( path_arr.some(val => /^\w{1,15}$/.test(val)) ){
			path_arr.forEach((val, index) => {
				file_path = path.join(file_path, val)
				let _path = path.join(config.PROJECTS_PATH, project, file_path)
				if( index != path_arr.length - 1 ){ 
					try{
						fs.accessSync(_path)
					} catch(e){
						fs.mkdirSync(_path)
					}
				}
			})
			file_path = path.join(config.PROJECTS_PATH, project, file_path + '.js')

			let file_content = { url, type, json, project, query, body, response }
			let info = {}
			try{
				fs.writeFileSync(file_path, 'module.exports=' + JSON.stringify(file_content), 'utf8')
				info = {code: 0, info: file_content}
			} catch(e){
				info = {code: -1, msg: '写入错误'}
			}
			return info
		}
	}
}
