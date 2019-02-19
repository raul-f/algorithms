module.exports = {
    repeatStringNumTimes: function(str, num) {
        let stringy = str

        if (num > 0) {
            while (num > 1) {
                str += stringy
                num--
                console.log(str)
            }
        } else {
            str = ""
        }
        // repeat after me
        return str
    }
}
