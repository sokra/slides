## Everything is a module

* webpack allows to **configure** "*loaders*" for files.
* Loaders **transform** files **into javascript** modules.
* *Example: images*
  * Copied to output directory.
  * Final URL is exported.
  * Alternative: Export DataURL.
* *Example: stylesheets*
  * CSS is inlined as string in javascript.
  * When imported a `<style>`-tag is added to the DOM.
* *Other examples: TypeScript, ES6, HTML, Shaders, Templates, Translations*