module.exports = {
    sumAll: function(arr) {
        let sum = 0
        let newArr = [...arr]

        if (arr[0] > arr[1]) {
            newArr = [arr[1], arr[0]]
        }

        for (let i = newArr[0]; i <= newArr[1]; i++) {
            sum += i
        }

        console.log(sum)

        return sum
    }
}
