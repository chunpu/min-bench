var assert = require('assert')
var b = require('./')

describe('get speed', function() {
	it('should get the right speed', function() {
		var duration = b.getSpeed(function(n) {
			for (var i = 0; i < n; i++) {
				var a = 1
			}
		})
		assert(duration < 0.001)
	})
})

describe('pretty ms', function() {
	it('should pretty ms', function() {
		var str = b.prettyMS('0.02')
		assert.equal(str, '20 µs')
	})
})
