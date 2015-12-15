## Inlining

* *`css-loader`* embeds CSS in JS
* *`html-loader`* embeds HTML in JS
* `css-loader` and `html-loader` automatically **`import` resources**
  * `background: url(./file.png)` → `import "./file.png"`
  * `<img src=./file.png>` → `import "./file.png"`
* `file-loader` emits file into output directory
* *`url-loader`* emits DataURL into the JS/CSS file
* *`url-loader?limit=10000`* emits file for > 10kb, else DataURl

→ Usage **transparent** to the developer

→ Inlining decision in **configuration**
