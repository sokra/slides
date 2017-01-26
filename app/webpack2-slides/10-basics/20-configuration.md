## How to use webpack? [Beginner]

**Install**: `npm install webpack` (`-g`)

**CLI**: `webpack ./entry.js bundle.js`

**CLI with Configuration file**: `webpack`

``` js
module.exports = {
  entry: "./entry.js",
  output: {
    filename: "bundle.js"
  }
}
```

---

---

## How to use webpack?

Configuration **arguments**

``` js
module.exports = env => ({
  // ...
  output: {
    filename: env.cache ? "[chunkhash].js" : "bundle.js",
    chunkFilename: env.cache ? "[chunkhash].js" : "[id].chunk.js"
  }
});
```

`webpack --env.cache`

---

---

## How to use webpack? [Expert]

``` js
const LANGUAGES = ["default", "de", "it"];
module.exports = env => {
  var langs = LANGUAGES.filter(l => !env.lang || env.lang === l);
  return Promise.all(langs.map(lang => loadLangData(lang)))
    .map(lang => ({
      entry: "./app",
      resolve: { extensions: [".js", `.${lang.name}.js`] },
      plugins: [
        new DefinePlugin({ LANGUAGE: JSON.stringify(lang.name) })
      ]
    }))
  )
}
```
