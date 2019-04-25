const express = require('express');
const path = require('path');
const config = require('../config');

module.exports = app => {
	//允许跨域访问	
	app.all('*', (req, res, next) => {
		res.header("Access-Control-Allow-Origin", "*");
		res.header("Access-Control-Allow-Headers", "X-Requested-With");
		res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
		next();
	})

	app.use(express.static(path.join(config.ROOT, 'public')));

	//前端路由
	app.get('/*', (req, res) => {
		//不使用渲染引擎，所以使用sendFile
		res.sendFile(path.resolve(config.ROOT, 'views', 'index.html'));
	});
	return app;
}
