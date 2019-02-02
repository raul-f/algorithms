module.exports = {
    translatePigLatin: function(str) {
        let translatedString = ""
        let prefixString = ""
        let consonantRegEx = /[bcdfghjklmnpqrsdtvwxyz]/
        let vowelRegEx = /[aeiou]/
        let counter = 0

        while (
            consonantRegEx.test(str[counter]) === true &&
            counter < str.length
        ) {
            prefixString += str[counter]
            counter++
        }

        for (let i = counter; i < str.length; i++) {
            translatedString += str[i]
        }

        if (translatedString.length < str.length) {
            translatedString += prefixString + "ay"
        } else {
            translatedString += "way"
        }

        console.log(translatedString)

        return translatedString
    }
}
