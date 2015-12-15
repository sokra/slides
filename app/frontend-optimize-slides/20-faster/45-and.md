## And...

* Don't prepare **too small** on-demand files
  * Merge multiple small ones
  * Less delay for on-demand loading
  * Don't merge into initial downloaded files
    * The initial download is holy
* Always load files in **parallel** when splitted
  * But aware that the order is undefined than
* Display **loading indicators** when loading stuff on demand
  * It can take a while on slow connections
* Handle the case when **on-demand loading fails**
  * The user could have lost the connection
