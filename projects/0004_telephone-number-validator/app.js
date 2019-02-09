module.exports = {
    telephoneCheck: function(str) {
        let telRegex = /^1?\s?(\-|\((?=\d{3}\)))?\d{3}(\-|(?<=\(\d{3})\))?\s?\d{3}(\-|\s)?\d{4}$/ //HELP ME

        /** Explaining:
         * Optional 1 followed by
         * Optional whitespace \s followed by
         * Optional dash - or | left parentheses \(, if followed by three digits \d{3} and right parentheses, followed by
         * Three digits \d{3} followed by
         * Optional dash - or | right parentheses \), if preceded by three digits \d{3} and left parentheses, followed by
         * Optional whitespace followed by
         * Three digits \d{3} followed by
         * Optional dash - or | whitespace followed by
         * Four digits,
         * All filling the entirety of the sentence (^ and $)
         */

        if (telRegex.test(str)) {
            console.log(
                `${str} is a valid US Telephone Number! telephoneCheck("${str}") evaluates as true.`
            )
            return true
        }
        // Good luck!
        console.log(
            `${str} is not a valid US Telephone Number. telephoneCheck("${str}") evaluates as false.`
        )
        return false
    }
}
