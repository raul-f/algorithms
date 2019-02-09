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
