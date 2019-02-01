module.exports = {
    largestOfFour: function(arr) {
        let vesselArray = []

        for (let i = 0; i < arr.length; i++) {
            vesselArray[i] = arr[i][0]
            for (let j = 0; j < arr[i].length; j++) {
                if (arr[i][j] > vesselArray[i]) {
                    vesselArray[i] = arr[i][j]
                }
            }
        }

        arr = vesselArray

        // You can do this!
        return arr
    }
}
