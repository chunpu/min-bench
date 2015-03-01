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
