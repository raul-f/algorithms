/*
We'll pass you an array of two numbers.
Return the sum of those two numbers plus the sum of all the numbers between them.

The lowest number will not always come first.

Example:

* sumAll([1, 4]) should return a number.
* sumAll([1, 4]) should return 10.
* sumAll([4, 1]) should return 10.
* sumAll([5, 10]) should return 45.
* sumAll([10, 5]) should return 45.

*/

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
