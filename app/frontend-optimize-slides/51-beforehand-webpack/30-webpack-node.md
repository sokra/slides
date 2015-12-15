## webpack for node

webpack can **compile bundles for node.js**. (`target: "node"`)

* Use **different loaders** for *server-side*
  * `style-loader!css-loader` → `null-loader`
  * `style-loader!css-loader?modules` → `css-loader/locals`
* **Move styling** into `<head>` for *client-side*
  * `ExtractTextPlugin.extract("style-loader", "css-loader")`
    * Emits separate `*.css` file for each entry
