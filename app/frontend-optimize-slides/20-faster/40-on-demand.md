## What's the better way?

* Serve only **needed stuff**
  * What's needed depends on the interaction of the user
  * This means we need to serve additional stuff when it's needed
* **Concat** needed stuff into as few requests as possible
* **Minimize** and **gzip** each request
  * Be careful: This is expensive → prepare it
* Try to **guess** what stuff the user **will need** and download it
  * The guessing algorithm is very application specific
  * But probably easier than you think
