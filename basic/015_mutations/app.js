/*

Return true if the string in the first element of the array contains all of the letters of the string in the second element of the array.

For example, ["hello", "Hello"], should return true because all of the letters in the second string are present in the first, ignoring case.

The arguments ["hello", "hey"] should return false because the string "hello" does not contain a "y".

Lastly, ["Alien", "line"], should return true because all of the letters in "line" are present in "Alien".

Example:

* mutation(["hello", "hey"]) should return false.
* mutation(["hello", "Hello"]) should return true.
* mutation(["zyxwvutsrqponmlkjihgfedcba", "qrstu"]) should return true.
* mutation(["Mary", "Army"]) should return true.
* mutation(["Mary", "Aarmy"]) should return true.
* mutation(["Alien", "line"]) should return true.
* mutation(["floor", "for"]) should return true.
* mutation(["hello", "neo"]) should return false.
* mutation(["voodoo", "no"]) should return false.

*/

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
