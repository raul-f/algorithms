module.exports = {
    reverseString: function(str) {
        let firstStep = []
        for (let i = str.length - 1; i >= 0; i--) {
            firstStep.push(str[i])
        }
        //console.log(JSON.stringify(firstStep));
        let secondStep = ""
        for (let j = 0; j < firstStep.length; j++) {
            secondStep += firstStep[j]
        }
        //console.log(secondStep);
        str = secondStep
        return str
    }
}
