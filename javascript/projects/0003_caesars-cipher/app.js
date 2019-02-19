module.exports = {
    rot13: function(str) {
        let decoded = ""
        let letterRegEx = /[A-Z]/

        for (let index in str) {
            if (letterRegEx.test(str[index])) {
                let decIndex = str[index].charCodeAt()

                //console.log(JSON.stringify(str[index].charCodeAt()));
                for (let i = 1; i < 14; i++) {
                    decIndex--
                    if (decIndex < 65) {
                        decIndex += 26
                    }
                }

                decoded += String.fromCharCode(decIndex)
            } else {
                decoded += str[index]
            }
        }

        console.log(decoded)

        // LBH QVQ VG!

        return decoded
    }
}
