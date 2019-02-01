/*
Flatten a nested array. You must account for varying levels of nesting.

NOTE: solved with weird recursive voodoo. NOT FULLY UNDERSTOOD YET - STUDY LATER
*/

function steamrollArray(arr) {

    let toFlatten = [...arr];
    let flattened = [];

    for (let i in toFlatten) {

        if (Array.isArray(toFlatten[i]) === false) {
            flattened.push(toFlatten[i]);
        } else {
            flattened = flattened.concat(steamrollArray(toFlatten[i]));
        }
    }

    // I'm a steamroller, baby
    console.log(JSON.stringify(flattened));
    return flattened;
}

console.log(JSON.stringify(steamrollArray([1, [2, 3, 4], 3, [1, 2, 3, 4, 2]])));

/**
 * steamrollArray([[["a"]], [["b"]]]) should return ["a", "b"].
 * steamrollArray([1, [2], [3, [[4]]]]) should return [1, 2, 3, 4].
 * steamrollArray([1, [], [3, [[4]]]]) should return [1, 3, 4].
 * steamrollArray([1, {}, [3, [[4]]]]) should return [1, {}, 3, 4].
 * steamrollArray([1, [2, 3, 4], 3, [1, 2, 3, 4, 2]] should return [1,2,3,4,3,1,2,3,4,2].
 * steamrollArray([1, 2, 3, [1, 2, 3, 4, [2, 3, 4]]] should return [1,2,3,1,2,3,4,2,3,4].
 */