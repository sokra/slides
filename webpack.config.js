var path = require("path");
var HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
	entry: {
		webpack: "./app/webpack",
		"frontend-optimize": "./app/frontend-optimize"
	},
	output: {
		path: path.resolve(__dirname, "build"),
		filename: "[name].js"
	},
	module: {
		loaders: [
			[
				{ test: /\.css$/, loader: "style-loader!css-loader" }
			],
			{ test: /\.md$/, loader: "html-loader!markdown-loader" },
			{ test: /\.js$/, loader: "babel-loader", include: path.resolve(__dirname, "app") },
			{ test: /\.(png|jpg|woff2?)$/, loader: "file-loader" }
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
		})
	]
}