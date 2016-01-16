## module systems

### We no longer...

* Write code that use <b>global variables</b>.
* <b>Read</b> up the documentation to check which <b>dependencies</b> must be loaded first.
* Ensure the correct <b>load order</b> via order of `<script>` tags
* Wrap our code in a <b>IIFE</b>

``` html
<script src="/vendor/jquery-1.12.0.js"></script>
<script src="/vendor/jquery-plugin-0.2.19.js"></script>
```
