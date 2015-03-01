var b = require('./')

b('empty', function(n) {
	for (var i = 0; i < n; i++) {
	}
})

function Obj() {
	var a = 1
}

Obj.prototype.run = function(val) {
	return val
}

var obj = new Obj


b('function direct', function(n) {
	for (var i = 0; i < n; i++) {
		obj.run('foo')
	}
})

b('function call', function(n) {
	for (var i = 0; i < n; i++) {
		obj.run.call(obj, 'foo')
	}
})

b('function apply', function(n) {
	for (var i = 0; i < n; i++) {
		obj.run.apply(obj, ['foo'])
	}
})

b('code without with', function(n) {
	for (var i = 0; i < n; i++) {
		var a = Math.floor(1.234)
	}
})

b('code in with', function(n) {
	for (var i = 0; i < n; i++) {
		with (Math) {
			var a = floor(1.234)
		}
	}
})

b('obj use null', function(n) {
	for (var i = 0; i < n; i++) {
		var obj = {
			a: 1
		}
		obj.a = null
	}
})

b('obj use delete', function(n) {
	for (var i = 0; i < n; i++) {
		var obj = {
			a: 1
		}
		delete obj.a
	}
})
