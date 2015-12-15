## On demand loading

* Select points in the application where parts can be loaded on demand

``` js
function onSearch(text) {
	System.import("./search-dialog").then(function(SearchDialog) {
		new SearchDialog(text).show();
	});
}
```