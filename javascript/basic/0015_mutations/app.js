module.exports = {
    mutation: function(arr) {
        let counter = 0

        for (let j = 0; j < arr[1].length; j++) {
            for (let k = 0; k < arr[0].length; k++) {
                if (arr[1][j].toLowerCase() === arr[0][k].toLowerCase()) {
                    counter += 1
                }
            }
            if (counter === 0) {
                return false
            }
            counter = 0
        }

        return true
    }
}
