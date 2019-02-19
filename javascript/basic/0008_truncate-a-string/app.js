module.exports = {
    truncateString: function(str, num) {
        let vesselStr = ""

        if (num < str.length) {
            for (let i = 0; i < num; i++) {
                vesselStr += str[i]
            }

            vesselStr += "..."
            str = vesselStr
        }

        // Clear out that junk in your trunk
        return str
    }
}
