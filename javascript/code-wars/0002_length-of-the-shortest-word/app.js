module.exports = {
	findShort: function(string) {
		const wordArray = string.split(' ')
		let smallestLength = wordArray[0].length

		for (const word of wordArray) {
			if (word.length < smallestLength) {
				smallestLength = word.length
			}
		}

		return smallestLength
	},
}
