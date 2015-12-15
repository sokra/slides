## gzip

Either rely on **server software**, or:

``` js
plugins: [
    new CompressionPlugin()
]
```

Emits additional `*.gz` for each asset **when compression ratio is met**.