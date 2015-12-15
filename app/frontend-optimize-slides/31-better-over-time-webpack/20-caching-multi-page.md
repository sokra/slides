## Caching
### Multi Page Application: split shared and individual

``` js
module.exports = {
	plugins: [
		new webpack.CommonsChunkPlugin({
			name: "shared",
			minChunks: 2
		})
	]
}
```

automatic: best shared modules for this compilation

→ shared chunk could change (too) easily in the next compilation