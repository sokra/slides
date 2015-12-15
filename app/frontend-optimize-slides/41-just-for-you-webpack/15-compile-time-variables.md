## Compile-time variables

``` js
new DefinePlugin({
	LANGUAGE: JSON.stringify("de"),
	ES3_SUPPORT: true
})
```

```
if(ES3_SUPPORT) require("polyfill");
```