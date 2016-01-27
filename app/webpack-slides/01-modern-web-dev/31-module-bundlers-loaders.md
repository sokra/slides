## module loaders and bundlers

### Instead we do...

* Use a **module loader**
  * *runs in the browser* and *loads modules* when they are *requested*
  * easy to use
  * *less optimized for production usage*
* Or use a **module bundler**
  * *runs in preparation* and *bundles modules* into static files
  * needs a preparation/build step
  * *more optimized for production usage*
* Or use both: module loader for development, module bundler for production