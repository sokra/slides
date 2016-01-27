## Code Splitting

### What is it? Why?

* <b>Downloading</b> the whole web app <b>at once</b> can be bad.
  * This causes <b>delay</b> for big apps (instagram.com: 9.5mb min js).
  * User experience suffer, startup time is pretty important.
* Code Splitting **splits** the web app **into parts** (*chunks*).
  * Parts are **loaded on demand** (i. e. on user navigation).
* **Faster initial load** of the web app
