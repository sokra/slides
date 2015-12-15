## Caching in Multi Page Apps

We **prepared a script file** for each starting page.

User **reenters** the webapp on a **different starting page**.

**Redownloads** a lot of code that is also in to already cached script file.

---

* **Split** prepared script file into **common and individual** stuff
  * Common stuff can be **cached** and reused for different starting pages
  * **But**: additional request (**tradeoff**!)

The same is true for **on-demand** loaded script files.
