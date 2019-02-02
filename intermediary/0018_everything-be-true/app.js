module.exports = {
    truthCheck: function(collection, pre) {
        for (let entry in collection) {
            if (!collection[entry][pre]) {
                return false
            }
        }
        // Is everyone being true?
        return true
    }
}
