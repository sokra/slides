## Challanges with SSR

* Rendered HTML must be **equal** on client and server
  * Best use the same code on server and client
* **node.js** doesn't like **"fontend modules"**
  * imports from css, images, etc.
* Initial rendering must not require **on-demand** loaded code