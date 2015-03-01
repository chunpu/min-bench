module.exports = exports = run

var max = 1000
var min = 2

exports.run = run
exports.getSpeed = getSpeed
exports.prettyMS = prettyMS

function run(name, fn) {
	var speed = getSpeed(fn)
	console.log('\t%s\t%s/op', name, prettyMS(speed))
}

function getSpeed(fn) {
	var oneDuration = estimateSpeed(fn)
	if (oneDuration > max) return oneDuration
	var count = Math.floor(max / oneDuration) + 1
	var start = now()
	fn(count)
	var duration = now() - start
	return duration / count
}

function estimateSpeed(fn, count) {
	count = count || 1
	var start = now()
	fn(count)
	var duration = now() - start
	if (duration > min) return duration / count
	return estimateSpeed(fn, count * 10)
}

function now() {
	return +new Date
}

function prettyMS(ms) {
	var ret = ms
	var unit = 'ms'
	if (ms >= 1000) {
		unit = 's'
		ret = ms / 1000
	} else if (ms < 0.001) {
		unit = 'ns'
		ret = ms * 1000 * 1000
	} else if (ms < 1) {
		unit = 'µs'
		ret = ms * 1000
	}
	var arr = ('' + ret).split('.')
	if (arr[1]) {
		ret = arr[0] + '.' + arr[1].substr(0, 2)
	}
	return ret + ' ' + unit
}
