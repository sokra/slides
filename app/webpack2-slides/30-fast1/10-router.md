## Routers [Beginner]

``` js
myRouter({
	"/": () => import("./pages/home"),
	"/login": () => import("./pages/login"),
	"/img/{id}": () => import("./pages/image"),
	"/user/{id}": () => import("./pages/user")
})
```

App only loads the code it really needs.

---

---

## App Shell Architecture

![App Shell](app-shell.svg)