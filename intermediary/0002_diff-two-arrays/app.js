/* 
Compare two arrays and return a new array with any items only found in one of the two given arrays, but not both. 

In other words, return the symmetric difference of the two arrays.
*/

function diffArray(arr1, arr2) {

    let newArr = [];
    let biggerArray = [];
    let smallerArray = [];

    if (arr1.length > arr2.length) {
        biggerArray = [...arr1];
        smallerArray = [...arr2];
    } else {
        biggerArray = [...arr2];
        smallerArray = [...arr1];
    }

    for (let i = 0; i < biggerArray.length; i++) {

        let k = 0; // counter of appearances of biggerArray[i] in smallerArray

        for (let j = 0; j < smallerArray.length; j++) {
            if (biggerArray[i] === smallerArray[j]) {
                k += 1;
            }
        }

        if (k === 0) {
            newArr.push(biggerArray[i]);
        }
    }

    for (let i = 0; i < smallerArray.length; i++) {

        let k = 0; // counter of appearances of smallerArray[i] in biggerArray

        for (let j = 0; j < biggerArray.length; j++) {
            if (smallerArray[i] === biggerArray[j]) {
                k += 1;
            }
        }

        if (k === 0 && !newArr.includes(smallerArray[i])) { 
            //!newArr.includes(smallerArray[i]) avoids repetition of elements
            newArr.push(smallerArray[i]);
        }
    }

    // Same, same; but different.
    return newArr;
}

diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);

/**
 * diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]) should return an array.

 * ["diorite", "andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"] should return ["pink wool"].

 * ["diorite", "andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"] should return an array with one item.

 * ["andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"] should return ["diorite", "pink wool"].

 * ["andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"] should return an array with two items.

 * ["andesite", "grass", "dirt", "dead shrub"], ["andesite", "grass", "dirt", "dead shrub"] should return [].

 * ["andesite", "grass", "dirt", "dead shrub"], ["andesite", "grass", "dirt", "dead shrub"] should return an empty array.

 * [1, 2, 3, 5], [1, 2, 3, 4, 5] should return [4].

 * [1, 2, 3, 5], [1, 2, 3, 4, 5] should return an array with one item.

 * [1, "calf", 3, "piglet"], [1, "calf", 3, 4] should return ["piglet", 4].

 * [1, "calf", 3, "piglet"], [1, "calf", 3, 4] should return an array with two items.

 * [], ["snuffleupagus", "cookie monster", "elmo"] should return ["snuffleupagus", "cookie monster", "elmo"].

 * [], ["snuffleupagus", "cookie monster", "elmo"] should return an array with three items.

 * [1, "calf", 3, "piglet"], [7, "filly"] should return [1, "calf", 3, "piglet", 7, "filly"].

 * [1, "calf", 3, "piglet"], [7, "filly"] should return an array with six items.
*/