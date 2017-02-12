## 📌 Targeted Builds 📌 [Expert]

Some properties doesn't change often:

* Language 🏳️
* LTR, RTL 🔁
* Supported browser features 💊
* A/B-Test experiment ⚗️

Make them **compile-time values**! ⚙️

<br>

*Build* a version of the app *for every combination*. 📚

---

---

## 📌 Targeted Builds 📌 [Expert]

* **Smaller** builds 🚀
  * Only include code you need
* Common examples
  * *Polyfills* 💉
  * *Translation data* 🏳️
  * *New version of an app feature* ⚗️
* **Expensive** to **build** ⏱
* **Expensive** when **property change** ⌛️ 
  * Reload complete bundle/page
  * Use properties that *doesn't change*
* The better the more possible values per property.

---

---

## 📌 Targeted Builds 📌 [Expert]

``` js
var LANGS = ["de", "en", "zh"]; 🏳️

module.exports = LANGS.map(LANG => ({
  entry: `./app/${LANG}-entry.js`, 📕
  resolve: {
    extensions: [`.${LANG}.js`, ".js"] 🔀
  },
  output: { filename: `${LANG}/[chunkhash].js` }, 📲
  plugins: [
    new DefinePlugin({ LANGUAGE: LANG }) 💉
  ]
}));
```
