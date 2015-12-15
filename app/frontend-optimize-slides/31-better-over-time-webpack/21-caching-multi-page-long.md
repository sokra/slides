## Caching
### Multi Page Application: split shared and individual

``` js
entry: {
	shared: ["vendor-1", "vendor-2"] // select modules
	// ...
}, plugins: [
	new webpack.CommonsChunkPlugin({
		name: "shared",
		minChunks: Infinity // disable automatic module selection
	})
]
```

→ **better caching**, but propably greater size