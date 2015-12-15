## On demand loading

* webpack features **Code Splitting**
* Developers add *split points* to the app
* webpack splits the app into **chunks**
  * entry points form *entry chunks*
  * split points form *additional chunks*
* *Syntax* for split points:
  * `require.ensure([...], function(require))`
  * AMD `require([...], function(...))`
  * *ES6 `System.import("...") -> Promise`*