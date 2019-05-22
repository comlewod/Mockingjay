const router = require('express').Router()
const fs = require('fs')
const path = require('fs')

router.post('/add', (req, res) => {
	let { router_path, json_str, program } = req.body
	let path_arr = router_path.split('/').filter(str => !!str.trim())
	//let _path = path.join(...path_arr)

	if( path_arr.some(val => /^[a-zA-Z]{1,15}$/.test(val)) ){
		let a = [...path_arr]
		res.send(a);return
		//res.send(router_path, json_str);return
	} else {
	}

	
})

module.exports = router
