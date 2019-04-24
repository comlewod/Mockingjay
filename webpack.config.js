const path = require('path');
const cleanWebpackPlugin = require('clean-webpack-plugin');
const htmlWebpackPlugin = require('html-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const webpack = require('webpack')

let config = {
	devtool: 'source-map',	 
	entry: {
		app: path.resolve(__dirname, 'src', 'app.js'),
	},
	output: {
		publicPath: '/dist/',
		path: path.resolve(__dirname, 'public', 'dist'),	
		filename: '[name]-bundle.js'
	},
	resolve: {
		alias: {
			//'vue': 'vue/dist/vue.min.js'
		},
		extensions: ['.js', '.vue']	
	},
	module: {
		rules: [
			{ 
				test: /\.js/,
				loader: 'babel-loader',
				//js文件里引入的node模块不进行编译，因为node_modules下的文件已经是采用es5语法，不需要进行编译（但还是会引入文件）
				exclude: /node_modules/
			},
			{ 
				test: /\.vue$/,
				loader: 'vue-loader',
				exclude: /node_modules/
			},
			{
				test: /\.less$/,
				loader: [
					//生产环境使用分离出css文件，开发模式使用内联（方便热替换）
					process.env.NODE_ENV == 'production' ? MiniCssExtractPlugin.loader : 'vue-style-loader',
					'css-loader',
					'less-loader'
				]
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
		new webpack.HashedModuleIdsPlugin(),	//只有改动的文件的hash发生变化，避免每次打包所有文件hash发生变化
		new MiniCssExtractPlugin({
			filename: 'style.css'
		})
	],
	externals: {
		'vue': 'Vue',
		'element-ui': 'ELEMENT'
	},
	mode: "production"
}

module.exports = config
