## How does a module loader work?

* *Load* runtime into browser (via `<script>`)
* *Load* **entry point**
* *Read* **dependenies**
* *Resolve* dependencies
* Load, Read, Resolve dependencies (repeated)
* execute entry point and dependencies

