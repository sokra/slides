## Configuration

### Simple case

Export an array of configurations, i. e.:

``` js
var languages = ["de", "en"];
module.exports = languages.map(function(lang) {
	return {
		// ...
		plugins: [
			new I18nPlugin(loadTranslations(lang))
		]
...
```
