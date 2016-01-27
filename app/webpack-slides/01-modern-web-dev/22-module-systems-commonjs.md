## module systems: CommonJs

* **`require("...")`**: Loads module, returns exports
  * **`require("./helpers.js")`**: ... by relative path, returns exports
  * **`require("jquery")`**: ... from dependencies manager folder
* **`exports`** or **`module.exports`** export object

``` js
var $ = require("jquery");

exports.doSomething = function() {
	return 42;
}
```