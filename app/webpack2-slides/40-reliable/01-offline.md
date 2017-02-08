## Offline [Beginner]

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

* Compiles **Service Worker**
* with **Assets Manifest** from webpack result
* Optionally add custom Service Worker entry point