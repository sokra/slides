## 🔋 Offline 🔋 [Beginner]

``` js
const OfflinePlugin = require("offline-plugin");

plugins: [
  new OfflinePlugin()
]
```

``` js
import offlineRuntime from "offline-plugin/runtime";
offlineRuntime.install();
```

* Compiles **Service Worker** ⚙️
* with **Assets Manifest** from webpack result 💻
* Optionally add custom Service Worker entry point 🤓

---

---

## 🔋 Offline 🔋

* Service Worker should be installed **after** the **app** is **ready** (idle 😴)
* Service Worker **downloads** whole **app** on **install**
  * Every Asset is **cached** after download. (*feels like native app* 👍)
* **API requests** doesn't need to be cached. This can be handled in *custom code*. 🤓

---

* Little known: JS in *Service Worker Cache* skips *Parse and Compile* in Chrome. ⌛️ 
* Service Worker is also useful when not having API offline. *Use it.* 🏅 

---

---

## Offline + Long Term Caching [Expert]

* With *default* configuration SW always **downloads whole app** 🤔 
* Use *`updateStrategy: "changed"`* to **request only changed** assets 👍
  * Only works with **hash in filename**! 📧

``` js
new OfflinePlugin({
  caches: {
    main: [ "dashboard.html", "login.html", "admin.html" ],
    additional: [ ":rest:" ]
  },
  safeToUseOptionalCaches: true,
  updateStrategy: "changed" 👍
})
```
