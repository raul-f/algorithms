module.exports = {
    diffArray: function(arr1, arr2) {
        let newArr = []
        let biggerArray = []
        let smallerArray = []

        if (arr1.length > arr2.length) {
            biggerArray = [...arr1]
            smallerArray = [...arr2]
        } else {
            biggerArray = [...arr2]
            smallerArray = [...arr1]
        }

        for (let i = 0; i < biggerArray.length; i++) {
            let k = 0 // counter of appearances of biggerArray[i] in smallerArray

            for (let j = 0; j < smallerArray.length; j++) {
                if (biggerArray[i] === smallerArray[j]) {
                    k += 1
                }
            }

            if (k === 0) {
                newArr.push(biggerArray[i])
            }
        }

        for (let i = 0; i < smallerArray.length; i++) {
            let k = 0 // counter of appearances of smallerArray[i] in biggerArray

            for (let j = 0; j < biggerArray.length; j++) {
                if (smallerArray[i] === biggerArray[j]) {
                    k += 1
                }
            }

            if (k === 0 && !newArr.includes(smallerArray[i])) {
                //!newArr.includes(smallerArray[i]) avoids repetition of elements
                newArr.push(smallerArray[i])
            }
        }

        // Same, same; but different.
        return newArr
    }
}
