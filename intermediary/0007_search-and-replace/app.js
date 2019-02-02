module.exports = {
    myReplace: function(str, before, after) {
        let upperCase = /[A-Z]/
        let lowerCase = /[a-z]/
        let toReplace = ""
        let counter = 0

        if (upperCase.test(before[0]) && lowerCase.test(after[0])) {
            toReplace += after[0].toUpperCase()
            for (let i = 1; i < after.length; i++) {
                toReplace += after[i]
            }
        } else if (
            (upperCase.test(before[0]) && upperCase.test(after[0])) ||
            (lowerCase.test(before[0]) && lowerCase.test(after[0]))
        ) {
            toReplace = after
        } else {
            toReplace += after[0].toLowerCase()
            for (let i = 1; i < after.length; i++) {
                toReplace += after[i]
            }
        }

        let search = new RegExp(before)

        //console.log(search);

        let finalStr = str.replace(search, toReplace)

        //console.log(JSON.stringify(finalStr));

        return finalStr
    }
}
