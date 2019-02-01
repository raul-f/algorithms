/*
Write a function that takes two or more arrays and returns a new array of unique values in the order of the original provided arrays.

In other words, all values present from all arrays should be included in their original order, but with no duplicates in the final array.

The unique numbers should be sorted by their original order, but the final array should not be sorted in numerical order.

Check the assertion tests for examples.

uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]) should return [1, 3, 2, 5, 4].
uniteUnique([1, 3, 2], [1, [5]], [2, [4]]) should return [1, 3, 2, [5], [4]].
uniteUnique([1, 2, 3], [5, 2, 1]) should return [1, 2, 3, 5].
uniteUnique([1, 2, 3], [5, 2, 1, 4], [2, 1], [6, 7, 8]) should return [1, 2, 3, 5, 4, 6, 7, 8].
*/

function uniteUnique(arr) {

    //establish a preliminary array that contains the arguments; Turned out to be completely unecessary

    let extraArguments = [...arguments];
    extraArguments.shift();

    console.log(JSON.stringify(extraArguments));

    //establish a second preliminary array with the first argument's elements;

    let middleManArray = [...arr];

    console.log(JSON.stringify(middleManArray));

    /*double 'for' loop that goes 
    * 1) through the arguments, goes from 0 to (arguments.length - 1) through i;
    * 1.1) through the argument's elements and checks if that element is in the second preliminary array, adding it if it doesn't, goes from 0 to (arr[i].length - 1) through j;
    */

    for (let i = 1; i < arguments.length; i++) {
        for (let j = 0; j < arguments[i].length; j++) {
            if (middleManArray.includes(arguments[i][j]) === false) {
                middleManArray.push(arguments[i][j]);
            }
        }
    }

    let result = [...middleManArray];

    console.log(JSON.stringify(result));

    return result;
}

uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);

/**
 * uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]) should return [1, 3, 2, 5, 4].

 * uniteUnique([1, 3, 2], [1, [5]], [2, [4]]) should return [1, 3, 2, [5], [4]].

 * uniteUnique([1, 2, 3], [5, 2, 1]) should return [1, 2, 3, 5].

 * uniteUnique([1, 2, 3], [5, 2, 1, 4], [2, 1], [6, 7, 8]) should return [1, 2, 3, 5, 4, 6, 7, 8].
 */