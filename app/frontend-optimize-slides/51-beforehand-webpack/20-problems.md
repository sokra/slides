## Problem with SSR

* **node.js** doesn't like **"fontend modules"**
  * imports from css, images, etc.
* Rendered HTML must be **equal** on client and server
* Initial rendering must not require **on-demand** loaded code