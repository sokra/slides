## Caching

* Enable caching for **every asset**
  * HTTP Headers
* *Don't* use a per compilation hash
  * i. e. `cdn.example.com/1e4fa89/bundle.js`
  * It's easier, but less efficient
  * i. e. images are often unchanged, but get new url
* Use content hash in filename **per file**
  * i. e. `cdn.example.com/bundle.7e8f2ab.js`
* **Prevent** files from **changing**
  * **Tradeoff**: performance for new users or existing users