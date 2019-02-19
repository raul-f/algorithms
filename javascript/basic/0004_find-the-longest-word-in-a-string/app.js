module.exports = {
    findLongestWordLength: function(str) {
        //First block: puts all the words of the string in an array.

        let wordSet = []
        let vesselStr = ""

        for (let i = 0; i < str.length; i++) {
            if (str[i] !== " ") {
                vesselStr += str[i]
                //console.log(vesselStr);
            }
            if (str[i] === " " || i === str.length - 1) {
                wordSet.push(vesselStr)
                //console.log(JSON.stringify(wordSet));
                vesselStr = ""
                //console.log(JSON.stringify(wordSet));
            }
        }

        //End of first block. wordSet is an array that now contains the words of the string.

        //Second block: discovers which word within wordSet is the longest and assigns its value to the str

        let greatestLength = 0
        let IndexOfGreatestLength = 0

        for (let j = 0; j < wordSet.length; j++) {
            if (wordSet[j].length > greatestLength) {
                greatestLength = wordSet[j].length
                IndexOfGreatestLength = j
            }
        }

        str = wordSet[IndexOfGreatestLength]

        //End of second block.

        return str.length
    }
}
