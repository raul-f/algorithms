module.exports = {
    confirmEnding: function(str, target) {
        let i = str.length - 1
        let j = target.length - 1

        while (j >= 0) {
            if (str[i] != target[j]) {
                return false
            }
            i--
            j--
        }

        // "Never give up and good luck will find you."
        // -- Falcor
        return true
    }
}
