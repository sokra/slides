## module systems: ES6 Modules

* **`import ... from "..."`**: Loads module and bind exported variables into scope.
* **`import abc from "..."`**: Bind `abc` to the *default* export.
* **`import { abc } from "..."`**: Bind `abc` to the *named* export `abc`.
* **`import { xyz as abc } from "..."`**: Bind `abc` to the *named* export `xyz`.
* **`import * as abc from "..."`**: Bind `abc` to a object with all exports.
* **`import "..."`**: Loads module only for side-effects. `:-|`
* **`System.import("...")`**: Loads a module async, returns a Promise to all exports
* **`import "./helper.js"`** and **`import "jquery"`**
  * Resolving not specified
  * Everyone assumes the same as CommonJs

