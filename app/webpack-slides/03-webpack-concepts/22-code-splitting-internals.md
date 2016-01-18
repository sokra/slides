## Code Splitting

* Every module has *dependencies*
* **1. Step**: Build up a **graph of modules** connected via dependencies.
* There are *sync* and *async* dependencies
* **2. Step**: Build up a **graph of chunks**.
  * For each *entry point* create a *entry chunk*.
  * Put every module connected with *sync* dependency in the *same chunk*.
  * Put every module connected with *async* dependency in a *new chunk*.
* **3. Step**: **Optimize** the graph of chunks.
  * Merge chunks with the same modules.
  * Remove modules from chunk, if they are in all parent chunk.
  * Merge chunks on heuristics.