/*

Remove all falsy values from an array.

Falsy values in JavaScript are false, null, 0, "", undefined, and NaN.

Hint: Try converting each value to a Boolean.

Example:

* bouncer([7, "ate", "", false, 9]) should return [7, "ate", 9].
* bouncer(["a", "b", "c"]) should return ["a", "b", "c"].
* bouncer([false, null, 0, NaN, undefined, ""]) should return [].
* bouncer([1, null, NaN, 2, undefined]) should return [1, 2].

*/

module.exports = {
    bouncer: function(arr) {
        let localArray = [...arr]
        let k = 0
        for (let i = 0; i < arr.length; i++) {
            //console.log(JSON.stringify(localArray));
            //console.log("Going through the loop!");
            //console.log(arr[i]);
            if (!arr[i]) {
                //console.log("In the if condition!");
                localArray.splice(i - k, 1)
                k += 1
            }
            //console.log(JSON.stringify(localArray));
        }

        arr = localArray

        // Don't show a false ID to this bouncer.
        return arr
    }
}
