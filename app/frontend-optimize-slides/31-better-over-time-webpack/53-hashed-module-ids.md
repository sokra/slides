## deterministic module ids

``` js
plugins: [
	new HashedModuleIdsPlugin()
]
```

* Doesn't leak path
* Doesn't affect chunk ids
* Longer ids → **bigger file**
  * Bigger than `NamedModulesPlugin` after gzip
