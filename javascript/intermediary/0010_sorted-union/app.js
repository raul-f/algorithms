/*

*/

module.exports = {
    uniteUnique: function(arr) {
        //establish a preliminary array that contains the arguments; Turned out to be completely unecessary

        let extraArguments = [...arguments]
        extraArguments.shift()

        console.log(JSON.stringify(extraArguments))

        //establish a second preliminary array with the first argument's elements;

        let middleManArray = [...arr]

        console.log(JSON.stringify(middleManArray))

        /*double 'for' loop that goes
         * 1) through the arguments, goes from 0 to (arguments.length - 1) through i;
         * 1.1) through the argument's elements and checks if that element is in the second preliminary array, adding it if it doesn't, goes from 0 to (arr[i].length - 1) through j;
         */

        for (let i = 1; i < arguments.length; i++) {
            for (let j = 0; j < arguments[i].length; j++) {
                if (middleManArray.includes(arguments[i][j]) === false) {
                    middleManArray.push(arguments[i][j])
                }
            }
        }

        let result = [...middleManArray]

        console.log(JSON.stringify(result))

        return result
    }
}
