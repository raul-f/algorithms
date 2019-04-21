module.exports = {
	seriesSum: function(n) {
		let series = 0

		for (let i = 0; i < n; i++) {
			series += 1 / (i * 3 + 1)
		}

		return series.toFixed(2).toString()
	},
}
