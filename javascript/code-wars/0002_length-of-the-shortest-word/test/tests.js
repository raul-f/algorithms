const findShort = require('../app').findShort
const assert = require('chai').assert

suite('function findShort(string)', function() {
	test('function findShort must return the length of the shortest word in string', function(done) {
		assert.strictEqual(
			findShort('bitcoin take over the world maybe who knows perhaps'),
			3
		)
		assert.strictEqual(
			findShort(
				'turns out random test cases are easier than writing out basic ones'
			),
			3
		)
		done()
	})
})
