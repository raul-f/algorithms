module.exports = {
    spinalCase: function(str) {
        let vesselStr = ""
        let wordArray = []
        let lowerCaseRegEx = /[a-z]/
        let upperCaseRegEx = /[A-Z]/
        let stopRegEx = /[^a-zA-Z]/

        for (let i = 0; i < str.length; i++) {
            if (i === 0) {
                vesselStr += str[i]
            } else if (
                upperCaseRegEx.test(str[i]) ||
                stopRegEx.test(str[i - 1])
            ) {
                wordArray.push(vesselStr.toLowerCase())
                vesselStr = "" + str[i]
            } else if (lowerCaseRegEx.test(str[i])) {
                vesselStr += str[i]
            }

            if (i === str.length - 1) {
                //It's working fine. DON'T CHANGE
                wordArray.push(vesselStr.toLowerCase())
                //console.log(JSON.stringify(`I have executed if block #6 in lap #${i}`));
            }
        }

        console.log(JSON.stringify(wordArray))

        let finalStr = wordArray.join("-")

        console.log(JSON.stringify(finalStr))

        // "It's such a fine line between stupid, and clever."
        // --David St. Hubbins
        return finalStr
    }
}
