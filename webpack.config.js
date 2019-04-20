const path = require('path');
const cleanWebpackPlugin = require('clean-webpack-plugin');
const htmlWebpackPlugin = require('html-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin')

let config = {
	devtool: 'source-map',	 
	entry: {
		app: path.resolve(__dirname, 'src', 'app.js'),
	},
	output: {
		path: path.resolve(__dirname, 'public', 'dist'),	
		filename: '[name]-bundle.js'
	},
	resolve: {
		extensions: ['.js', '.vue']	
	},
	module: {
		rules: [
			{ 
				test: /\.vue$/,
				loader: 'vue-loader'
			}
		]
	},
	plugins: [
		new cleanWebpackPlugin(),
		new htmlWebpackPlugin({
			title: 'My app',
			filename: path.resolve(__dirname, 'views', 'index.html'),
			template: 'src/template.html'
		}),
		new VueLoaderPlugin(),
	]
}

module.exports = config
