## On-demand &amp; initial rendering

**No on-demand loading** in initial rendering.

### Multi Page App: separate entry points

``` js
module.exports = {
	entry: {
		dashboard: "./dashboard/entry",
		profile: "./profile/entry",
		settings: "./settings/entry",
		// ...
	}
}
```