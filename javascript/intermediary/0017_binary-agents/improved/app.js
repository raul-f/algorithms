module.exports = {
    binaryAgent: function(str) {
        //convert string to binary snippets correspoding to characters

        let binaryArray = []
        let middleman = ""

        for (let i = 0; i < str.length; i++) {
            if (middleman.length === 7) {
                middleman += str[i]
                binaryArray.push(middleman)
                middleman = ""
            } else if (str[i] !== " ") {
                middleman += str[i]
            }
        }

        console.log(JSON.stringify(binaryArray))
        //console.log(JSON.stringify(middleman));

        let finalString = ""

        //convert binaryArray binary entries to decimal entries

        let hexArray = []

        for (let entry in binaryArray) {
            let powTwo = 0
            let midmanString = ""
            let decNumber = 0

            for (
                let index = binaryArray[entry].length - 1;
                index >= 0;
                index--
            ) {
                if (binaryArray[entry][index] === "1") {
                    decNumber += Math.pow(2, powTwo)
                }
                powTwo++
            }

            console.log(decNumber)

            //convert decimal numbers to Unicode characters

            finalString += String.fromCharCode(decNumber)
        }

        console.log(JSON.stringify(finalString))

        return finalString
    }
}
