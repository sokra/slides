## Code Splitting

``` js
// sync dependency: included in initial bundle
import { abc } from "module1"
console.log(abc);
// alternative syntax: require("..."), define(["..."], f)

function loadModule2() {
	// async dependency: loaded on demand
	System.import("module2").then(function(module2) {
		console.log(module2.def);
	});
	// alternative: require.ensure(["..."], f), require(["..."], f)
}
```