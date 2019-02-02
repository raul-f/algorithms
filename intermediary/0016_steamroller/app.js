/*

NOTE: solved with weird recursive voodoo. NOT FULLY UNDERSTOOD YET - STUDY LATER

*/

module.exports = {
    steamrollArray: function(arr) {
        let toFlatten = [...arr]
        let flattened = []

        for (let i in toFlatten) {
            if (Array.isArray(toFlatten[i]) === false) {
                flattened.push(toFlatten[i])
            } else {
                flattened = flattened.concat(steamrollArray(toFlatten[i]))
            }
        }

        // I'm a steamroller, baby
        console.log(JSON.stringify(flattened))
        return flattened
    }
}
