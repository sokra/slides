var path = require("path");
var HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
	entry: {
		webpack: "./app/webpack",
		webpack2: "./app/webpack2",
		"frontend-optimize": "./app/frontend-optimize"
	},
	output: {
		path: path.resolve(__dirname, "build"),
		filename: "[name].js"
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
			filename: "frontend-optimize.html",
			chunks: ["frontend-optimize"]
		}),
		new HtmlWebpackPlugin({
			filename: "webpack.html",
			chunks: ["webpack"]
		}),
		new HtmlWebpackPlugin({
			filename: "webpack2.html",
			chunks: ["webpack2"]
		})
	]
}