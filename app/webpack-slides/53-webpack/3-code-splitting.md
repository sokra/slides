## Code Splitting

For big app it's **problematic** to put all stuff into a **single bundle**.

Solution: Split bundle into **multiple chunks** and load some **on demand**.

→ Define async **split points** where webpack is allowed to split the dependency tree.

Goal: Minimial initial download, faster first impression
