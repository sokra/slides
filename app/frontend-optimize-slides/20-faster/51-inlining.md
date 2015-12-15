## Don't always inline!

* Not progressive
  * Sometimes it's **better** to see the **text without image**,
  * than to **wait longer for both**.
* Inlining can **increase the size**
  * PNG DataURL base64 + 30%!
  * Don't inline rarly used stuff (i. e. `.ttf`)
* Moving CSS from `<head>` to `<body>` can cause **FOUC**
  * **Flash Of Unstyled Content**
* **Not parallizable**, **not individual cachable**
  * Parallel and cachable requests can be better

→ Inlining should be transparent to the developer.

*Delegate the decision of when to inline to the tooling.*