## Caching: <br>Advanced techniques

* Use **multiple layers** of commons chunks
  * one for rarly changing stuff
  * the other for often changing stuff
  * both can be loading in *parallel*
  * `names: ["commons", "vendors"]`
* Use **different** commons chunks for different parts of the app
  * more *efficient*
  * `chunks: ["a", "b", "c"]`
* Commons chunk for **on-demand** chunks
  * Loaded in *parallel* to the additional chunk
  * `async: true`