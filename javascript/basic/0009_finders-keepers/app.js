module.exports = {
    findElement: function(arr, func) {
        let num = 0

        for (let i = 0; i < arr.length; i++) {
            if (func(arr[i]) === true) {
                num = arr[i]
                return num
            }
        }

        return undefined
    },
    truthTest: function(num) {
        // equals the arrow notation function (num => num % 2 === 0)
        return num % 2 === 0
    }
}
