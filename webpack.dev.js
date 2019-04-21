const path = require('path');
const express = require('express');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');

const hotQuery = "webpack-hot-middleware/client?noInfo=true&reload=true";
const config = require('./config');
let webpackConfig = require('./webpack.config.js');

webpackConfig.mode = "development";
webpackConfig.plugins.push(new webpack.HotModuleReplacementPlugin());	//通过express中间件实现热替换时，实现浏览器刷新必写

Object.keys(webpackConfig.entry).forEach(key => {
	if( key != 'vendors' ){
		webpackConfig.entry[key] = [hotQuery, webpackConfig.entry[key]];
	}
});

//使用开发版本
//webpackConfig.resolve.alias['vue'] = 'vue/dist/vue.js'

let compiler = webpack(webpackConfig);
let app = express();

//开发环境使用这两个中间件
app.use(webpackDevMiddleware(compiler, {
	publicPath: webpackConfig.output.publicPath,
	quiet: true,
}));

app.use(webpackHotMiddleware(compiler, {
	log: false,
	heartbeat: 2000
}));

//优先获取webpack的静态资源，所以express.static要写在后面，且静态资源要路径相同
app = require('./middlewares/app')(app);

app.listen(config.SERVER_PORT);

