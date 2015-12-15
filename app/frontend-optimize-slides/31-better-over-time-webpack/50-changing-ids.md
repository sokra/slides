## on changing ids

webpack gives **modules and chunks id** depending on order

(order depends on how often an id is in the bundle to create a minimal sized bundle)

When modules or chunks are changed, **all ids could be affected**.

---

Choosen ids can be **stored** to and **restored** from a so called **`records`** file, to prevent the chunks from **changing**.

Or ids can be **choosen** in a **deterministic way**, i. e. the filename can be used. (Careful: This leaks path infos)

