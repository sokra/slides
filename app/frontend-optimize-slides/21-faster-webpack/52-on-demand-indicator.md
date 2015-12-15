## On demand loading
## (error handing)

``` js
function onSearch(text) {
	var indicator = LoadingIndicator.show("search");
	System.import("./search-dialog").catch(function(err) {
		indicator.hide();
		displayError("Network disconnected");
	}).then(function(SearchDialog) {
		indicator.hide();
		new SearchDialog(text).show();
	});
}
```