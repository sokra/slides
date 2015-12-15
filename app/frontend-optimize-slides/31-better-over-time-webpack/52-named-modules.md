## deterministic module ids

``` js
plugins: [
	new NamedModulesPlugin()
]
```

* *Leaks file path*
  * Could be used for reverse engineering
* Doesn't affect chunk ids
* Longer ids → bigger file
  * Very small difference after gzip