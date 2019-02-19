module.exports = {
    destroyer: function(arr) {
        console.log(JSON.stringify(arr))

        let toBeSought = [...arguments].splice(1)
        let cleansedArray = []

        console.log(JSON.stringify(toBeSought))

        for (let i = 0; i < arr.length; i++) {
            let ocurrenceCounter = 0

            for (let j = 0; j < toBeSought.length; j++) {
                if (arr[i] === toBeSought[j]) {
                    ocurrenceCounter++
                }
            }

            if (ocurrenceCounter === 0) {
                cleansedArray.push(arr[i])
            }
        }

        console.log(JSON.stringify(cleansedArray))

        // Remove all the values
        return cleansedArray
    }
}
