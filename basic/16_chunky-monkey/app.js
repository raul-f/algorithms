/*

Write a function that splits an array (first argument) into groups the length of size (second argument) and returns them as a two-dimensional array.

Example:

* chunkArrayInGroups(["a", "b", "c", "d"], 2) should return [["a", "b"], ["c", "d"]].
* chunkArrayInGroups([0, 1, 2, 3, 4, 5], 3) should return [[0, 1, 2], [3, 4, 5]].
* chunkArrayInGroups([0, 1, 2, 3, 4, 5], 2) should return [[0, 1], [2, 3], [4, 5]].
* chunkArrayInGroups([0, 1, 2, 3, 4, 5], 4) should return [[0, 1, 2, 3], [4, 5]].
* chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6], 3) should return [[0, 1, 2], [3, 4, 5], [6]].
* chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 4) should return [[0, 1, 2, 3], [4, 5, 6, 7], [8]].
* chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 2) should return [[0, 1], [2, 3], [4, 5], [6, 7], [8]].

*/

module.exports = {
    chunkArrayInGroups: function(arr, size) {
        let chunkedArray = []
        let modSize = (arr.length - (arr.length % size)) / size

        //console.log(modSize);

        for (let k = 0; k < modSize; k += 1) {
            let vesselArray = []
            //console.log("k is equal to " + k);
            for (let i = 0; i < size; i++) {
                //console.log("i+(k*size) is equal to "+(i+(k*size)));
                vesselArray.push(arr[i + k * size])
            }
            //console.log(JSON.stringify(vesselArray));
            chunkedArray.push(vesselArray)
            //console.log(JSON.stringify(chunkedArray));
        }

        //console.log(JSON.stringify(arr));

        if (arr.length % size !== 0) {
            let vesselArray = []
            for (
                let j = arr.length - 1;
                j >= arr.length - (arr.length % size);
                j--
            ) {
                console.log(arr[j])
                vesselArray.unshift(arr[j])
            }
            chunkedArray.push(vesselArray)
        }
        console.log(JSON.stringify(chunkedArray))
        // Break it up.
        return chunkedArray
    }
}
