## On `[chunkhash]`

* the **mappings from chunk id to placeholder content** (i. e. chunk id to chunk hash) need to be available to the runtime
  * they are **stored in** the webpack runtime (which is in the **first chunk**)
  * this **invalidates** the first chunk **on any change :(**
* Solution: *inline the mappings into the HTML page* to keep the first chunk cachable
  * easiest way: create another empty commons chunk and inline it into the HTML page
