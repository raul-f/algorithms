/*

Create a function that looks through an array (first argument) and returns the first element in the array that passes a truth test (second argument).
If no element passes the test, return undefined.

Example:

* findElement([1, 3, 5, 8, 9, 10], function(num) { return num % 2 === 0; }) should return 8.
* findElement([1, 3, 5, 9], function(num) { return num % 2 === 0; }) should return undefined.

*/

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
