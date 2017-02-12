## 🏰 Serverside Rendering 🏰

Display content faster.

* **Render** HTML **on server-side**.
* Progressive enhance it with client-side JS.
* New challanges
  * Framework support
  * Data Fetching
  * **Run same code on Server and Client**
    * JS on Server: node.js, and other

---

---

## 🏰 Serverside Rendering 🏰

* Frontend code often **doesn't run on node.js**
  * *imports CSS, Images, Fonts, etc.*
* webpack has a **`target`** option
  * defaults to `web`
  * **`node`**: Build bundle for node.js
* *separate config* for server build
  * `style-loader` -> **`null-loader`**
  * `file-loader` -> **`file-loader { emitFile: false }`**
  * **`externals: require("webpack-node-externals")()`**
* Compile *only frontend part* or *whole server app*
  * `output.libraryTarget: "commonjs2"`