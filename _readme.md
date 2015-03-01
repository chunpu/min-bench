Usage
---

```js
var b = require('min-bench')

b('code in with', function(n) {
	for (var i = 0; i < n; i++) {
		with (Math) {
			var a = floor(1.234)
		}
	}
})

// =>
//	code in with	645.59 ns/op
```

`min-bench` always make your code run more than 1 second

Output the duration of running the code one time

- s second
- ms = 0.001 s
- µs = 0.001 ms
- ns = 0.000001 ms

See more benchmark in [demo.js](demo.js)
