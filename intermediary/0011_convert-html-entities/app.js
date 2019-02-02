module.exports = {
    convertHTML: function(str) {
        //should use regular expressions to test;

        let targetRegEx = /[&<>"']/

        console.log(
            JSON.stringify(
                `The test has returned ${targetRegEx.test("&")} for &.`
            )
        )
        console.log(
            JSON.stringify(
                `The test has returned ${targetRegEx.test("<")} for <.`
            )
        )
        console.log(
            JSON.stringify(
                `The test has returned ${targetRegEx.test(">")} for >.`
            )
        )
        console.log(
            JSON.stringify(
                `The test has returned ${targetRegEx.test(
                    '"'
                )} for " (double quote).`
            )
        )
        console.log(
            JSON.stringify(
                `The test has returned ${targetRegEx.test(
                    "'"
                )} for ' (apostrophe).`
            )
        )

        //simple for loop through str, if conditions and middleman string should suffice;

        let middlemanStr = ""

        for (let i in str) {
            //console.log(i);
            //ideally would write !targetRegEx.test(str[i]). Did it this way to avoid confusion.
            if (targetRegEx.test(str[i]) === false) {
                middlemanStr += str[i]
            } else {
                if (str[i] === "&") {
                    middlemanStr += "&amp;"
                } else if (str[i] === "<") {
                    middlemanStr += "&lt;"
                } else if (str[i] === ">") {
                    middlemanStr += "&gt;"
                } else if (str[i] === '"') {
                    middlemanStr += "&quot;"
                } else if (str[i] === "'") {
                    middlemanStr += "&apos;"
                }
            }
        }

        let result = middlemanStr

        console.log(result)

        // &colon;&rpar;
        return result
    }
}
