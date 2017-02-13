var path = require("path");
var HtmlWebpackPlugin = require("html-webpack-plugin");
const OfflinePlugin = require("offline-plugin");

var APPS = ["webpack", "frontend-optimize", "webpack2"];

module.exports = env => APPS.filter(APP => !env || !env.app || env.app === APP).map(APP => ({
	name: APP,
	entry: [
		`./app/${APP}`,
		env && env.prod && "./app/offline"
	].filter(Boolean),
	output: {
		path: path.resolve(__dirname, "build", APP),
		filename: `app.js`
	},
	module: {
		rules: [
			{
				test: /\.css$/,
				use: [
					"style-loader",
					"css-loader" 
				]
			},
			{
				test: /\.md$/,
				use: [
					"html-loader",
					"markdown-loader" 
				]
			},
			{
				test: /\.js$/,
				include: path.resolve(__dirname, "app") ,
				use: [
					"babel-loader"
				]
			},
			{
				test: /\.(png|jpg|svg|woff2?)$/,
				use: [
					"file-loader"
				]
			}
		]
	},
	plugins: [
		new HtmlWebpackPlugin({
			filename: "index.html",
			title: APP
		}),
		env && env.prod && new OfflinePlugin()
	].filter(Boolean)
}));