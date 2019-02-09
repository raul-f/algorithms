module.exports = {
    palindrome: function(str) {
        let wordArray = str.split(/[^A-Za-z0-9]/)
        let processedStr = wordArray.join("").toLowerCase()

        console.log(JSON.stringify(wordArray))
        console.log(JSON.stringify(processedStr))

        for (let i = 0; i < processedStr.length / 2 + 1; i++) {
            if (processedStr[i] !== processedStr[processedStr.length - 1 - i]) {
                console.log(false)
                return false
            }
        }

        console.log(true)
        return true
    }
}
