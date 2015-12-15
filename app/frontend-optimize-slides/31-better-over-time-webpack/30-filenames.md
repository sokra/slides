## Content hash in filenames

* **`file-loader`** outputs files with content hash
  * Default: `[hash].[ext]`
* **`[chunkhash]`** in `output.filename` and `output.chunkFilename` gets replaced with content hash
* **`[contenthash]`** in extract-text-webpack-plugin (see *Make it beforehand* chapter)

``` js
output: {
	filename: "[chunkhash].js",
	chunkFilename: "[chunkhash].js"
}
```