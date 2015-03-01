min-bench
===

[![Build status][travis-image]][travis-url]
[![NPM version][npm-image]][npm-url]
[![Downloads][downloads-image]][downloads-url]
[![Dependency Status][david-image]][david-url]
[npm-image]: https://img.shields.io/npm/v/min-bench.svg?style=flat-square
[npm-url]: https://npmjs.org/package/min-bench
[downloads-image]: http://img.shields.io/npm/dm/min-bench.svg?style=flat-square
[downloads-url]: https://npmjs.org/package/min-bench
[david-image]: http://img.shields.io/david/chunpu/min-bench.svg?style=flat-square
[david-url]: https://david-dm.org/chunpu/min-bench

[![Test coverage][coveralls-image]][coveralls-url]
[![Gittip][gittip-image]][gittip-url]

Simple Benchmark for Javascript Code

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

`min-bench` always make your code run more than 1 second

Output the duration of running the code one time

- s second
- ms = 0.001 s
- µs = 0.001 ms
- ns = 0.000001 ms

See more benchmark in [demo.js](demo.js)

License
---

[![License][license-image]][license-url]

[travis-image]: https://img.shields.io/travis/chunpu/min-bench.svg?style=flat-square
[travis-url]: https://travis-ci.org/chunpu/min-bench
[coveralls-image]: https://img.shields.io/coveralls/chunpu/min-bench/gh-pages.svg?style=flat-square
[coveralls-url]: https://coveralls.io/r/chunpu/min-bench
[gittip-image]: https://img.shields.io/gittip/chunpu.svg?style=flat-square
[gittip-url]: https://www.gittip.com/chunpu/
[license-image]: http://img.shields.io/npm/l/min-bench.svg?style=flat-square
[license-url]: #
