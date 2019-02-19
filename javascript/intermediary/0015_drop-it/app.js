module.exports = {
    dropElements: function(arr, func) {
        let filteredArr = []

        for (let i = 0; i < arr.length; i++) {
            if (func(arr[i]) === true) {
                for (let j = i; j < arr.length; j++) {
                    filteredArr.push(arr[j])
                }

                break
            }
        }

        console.log(JSON.stringify(filteredArr))

        // Drop them elements.
        return filteredArr
    }
}
