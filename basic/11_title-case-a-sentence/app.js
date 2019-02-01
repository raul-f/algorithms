/*

Return the provided string with the first letter of each word capitalized. 
Make sure the rest of the word is in lower case.
For the purpose of this exercise, you should also capitalize connecting words like "the" and "of".

Example:

* titleCase("I'm a little tea pot") should return a string.
* titleCase("I'm a little tea pot") should return I'm A Little Tea Pot.
* titleCase("sHoRt AnD sToUt") should return Short And Stout.
* titleCase("HERE IS MY HANDLE HERE IS MY SPOUT") should return Here Is My Handle Here Is My Spout.

*/

module.exports = {
    titleCase: function(str) {
        let vesselStr = ""

        for (let j = 0; j < str.length; j++) {
            if (j === 0) {
                //console.log('if #1');
                vesselStr += str[j].toUpperCase()
                //console.log(vesselStr);
            } else if (str[j - 1] === " ") {
                //console.log('if #2');
                vesselStr += str[j].toUpperCase()
                //console.log(vesselStr);
            } else {
                //console.log('if #3');
                vesselStr += str[j].toLowerCase()
                //console.log(vesselStr);
            }
        }
        str = vesselStr
        console.log(JSON.stringify(str))
        return str
    }
}
