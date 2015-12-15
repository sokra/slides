## On demand loading
## (loading indicators)

``` js
function onSearch(text) {
	var indicator = LoadingIndicator.show("search");
	System.import("./search-dialog").then(function(SearchDialog) {
		indicator.hide();
		new SearchDialog(text).show();
	});
}
```