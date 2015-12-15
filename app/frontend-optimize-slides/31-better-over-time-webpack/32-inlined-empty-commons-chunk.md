## inline empty commons chunk

``` js
output: {
	filename: "[chunkhash].js",
	chunkFilename: "[chunkhash].js"
},
plugins: [
	new CommonsChunkPlugin({
		name: "inline",
		filename: "inline.js",
		minChunks: Infinity
	})
]
```