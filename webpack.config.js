const path=require('path')

// This plugin will cause lodash._maxBy() to return undefined in browser
// const LodashModuleReplacementPlugin = require('lodash-webpack-plugin');

module.exports = {
	target: 'web',
	context: __dirname,
	entry: ['babel-polyfill', 'whatwg-fetch', './index.jsx'],
	output: {
		filename: 'bundle.js',
		path: path.resolve(__dirname, 'dist'),
		publicPath: 'dist/',
	},
	resolve: {
		extensions: ['.js', '.jsx', '.json'],
	},
	plugins: [
		// new LodashModuleReplacementPlugin,
	],
	module: {
		rules: [
		{
			test: /\.js[x]?$/,
			exclude: new RegExp('node_modules/'),
			use: ['babel-loader'],
		},
		{
			test: /\.css$/,
			use: ['style-loader', 'css-loader'],
		},
		{
			test: /\.scss$/,
			use: ['style-loader', 'css-loader', 'sass-loader'],
		},
		{
			test: /\.(png|jpg|svg|ttf|eot|woff|woff2)$/,
			use: {
				loader: 'file-loader',
				options: {
					name: '[path][name].[ext]'
				},
			},
		},
		],
	},
}
