module.exports = {
    whatIsInAName: function(collection, source) {
        // What's in a name?

        var arr = []
        let keys = Object.keys(source)

        console.log(JSON.stringify(keys))

        for (let i = 0; i < collection.length; i++) {
            let counter = 0

            for (let j = 0; j < keys.length; j++) {
                if (collection[i][keys[j]] === source[keys[j]]) {
                    counter++
                }
            }

            if (counter === keys.length) {
                arr.push(collection[i])
            }
        }
        // Only change code above this line
        return arr
    }
}
