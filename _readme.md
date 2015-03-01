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

see more in [demo.js](demo.js)
