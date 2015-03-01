min-bench
===

[![NPM version][npm-image]][npm-url]
[![Downloads][downloads-image]][downloads-url]
[![Dependency Status][david-image]][david-url]
[npm-image]: https://img.shields.io/npm/v/min-bench.svg?style=flat-square
[npm-url]: https://npmjs.org/package/min-bench
[downloads-image]: http://img.shields.io/npm/dm/min-bench.svg?style=flat-square
[downloads-url]: https://npmjs.org/package/min-bench
[david-image]: http://img.shields.io/david/chunpu/min-bench.svg?style=flat-square
[david-url]: https://david-dm.org/chunpu/min-bench


simple benchmark for javascript code

Installation
---

```sh
npm i min-bench
```

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

License
---

[![License][license-image]][license-url]

[license-image]: http://img.shields.io/npm/l/min-bench.svg?style=flat-square
[license-url]: #
