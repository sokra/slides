## On Demand Loading [Beginner]

webpack uses a hybrid approach:

* 📦 Bundle *related parts* of the app together
  * These parts are called **chunks** 📦📦📦
* 📡📦 Load **chunks** *when used*

🚀 Better *initial load performance*. 🚀

💯 **MUST USE!** 💯

---

---

## On Demand Loading [Beginner]

It's an **opt-in feature**.

Developer 🤓 can use *async `import`* to trigger it.

``` js
// module is in same chunk 
import moduleA from "module-a"; 📦

// module is in separate chunk 
import("module-b").then(moduleB => { 📡📦
  moduleB.default
});
```

---

---

## 🤓 On Demand Loading 🤓 [Expert]

``` js
const getPromise = () => Promise.all([
  import("module-a"), 📡📦
  import("module-b") 📡📦
]); // load multiple modules in parallel

onhover = () => getPromise(); 📡 // preload on hover (faster!)

onclick = () => {
  getPromise()
    .then(([moduleA, { "default": b }]) => { /*...*/ }) // destruct
    .catch(err => { /*...*/ }); 🚧 // handle loading error
};
```

---

---

## 🤓 On Demand Loading 🤓 [Expert]

``` js
// Give the chunk a name
import( /* webpackChunkName: "my-chunk" */"module-a")
```

``` js
// Join chunks with equal name
import(/* webpackChunkName: "my-chunk" */"module-b")
```

``` js
// *Simple*  expressions are supported
import(`./pages/${page}`)
```