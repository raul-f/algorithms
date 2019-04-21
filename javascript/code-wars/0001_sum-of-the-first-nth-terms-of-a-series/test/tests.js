const seriesSum = require('../app').seriesSum
const assert = require('chai').assert

suite('function seriesSum(n)', function() {
	test('Natural number input should return correct result', function(done) {
		assert.strictEqual(seriesSum(1), '1.00')
		assert.strictEqual(seriesSum(2), '1.25')
		assert.strictEqual(seriesSum(3), '1.39')
		assert.strictEqual(seriesSum(4), '1.49')
		assert.strictEqual(seriesSum(4), '1.49')
		/*
		Test Passed: Value == '1.57'
		Test Passed: Value == '1.63'
		Test Passed: Value == '1.68'
		Test Passed: Value == '1.73'
		Test Passed: Value == '1.77'
		Test Passed: Value == '1.94'
		Test Passed: Value == '2.26'
		Test Passed: Value == '2.40'
		Test Passed: Value == '0.00'
		Test Passed: Value == '2.79'
		Test Passed: Value == '2.65'
		Test Passed: Value == '2.49'
		Test Passed: Value == '1.92'
		Test Passed: Value == '2.86'
		Test Passed: Value == '1.81'
		Test Passed: Value == '2.84'
		Test Passed: Value == '2.72'
		Test Passed: Value == '2.83'
		Test Passed: Value == '2.75'
		Test Passed: Value == '2.57'
		Test Passed: Value == '2.58'
		Test Passed: Value == '2.82'
		Test Passed: Value == '2.70'
		Test Passed: Value == '2.74'
		Test Passed: Value == '2.74'
		Test Passed: Value == '2.36'
		Test Passed: Value == '2.41'
		Test Passed: Value == '2.52'
		Test Passed: Value == '2.85'
		Test Passed: Value == '2.41'
		Test Passed: Value == '2.70'
		Test Passed: Value == '2.64'
		Test Passed: Value == '2.56'
		Test Passed: Value == '2.82'
		Test Passed: Value == '2.52'
		Test Passed: Value == '2.82'
		Test Passed: Value == '2.65'
		Test Passed: Value == '2.67'
		Test Passed: Value == '2.67'
		Test Passed: Value == '2.78'
		Test Passed: Value == '2.80'
		Test Passed: Value == '2.41'
		Test Passed: Value == '2.71'
		Test Passed: Value == '2.69'
		Test Passed: Value == '2.84'
		Test Passed: Value == '2.52'
		*/
		done()
	})
})
