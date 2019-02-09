module.exports = {
	reverseString: function(str) {
		let inverseLetterArray = []
		for (let i = str.length - 1; i >= 0; i--) {
			inverseLetterArray.push(str[i])
		}
		//console.log(JSON.stringify(firstStep));
		let output = ''
		for (let j = 0; j < inverseLetterArray.length; j++) {
			output += inverseLetterArray[j]
		}
		//console.log(secondStep);
		// str = secondStep
		return output
	},
}
