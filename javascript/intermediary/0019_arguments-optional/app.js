/*

NOTE: very messy and unpleasant.

*/

module.exports = {
    addTogether: function(first, second) {
        //console.log(`${first} ${second}`);
        //console.log(`${typeof first} ${typeof second}`);

        if (typeof first === "number" && typeof second === "number") {
            return first + second
        } else if (typeof first === "number" && typeof second === "undefined") {
            //console.log(`${first} ${second}`);

            return function(third) {
                if (typeof third === "number") {
                    return first + third
                }

                //console.log(`${first} ${second}`);
            }
        }
        return undefined
    }
}
