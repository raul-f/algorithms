module.exports = {
    getIndexToIns: function(arr, num) {
        let sortedArray = [...arr]
        let firstInput = 0
        let secondInput = 0
        //let k = 0;

        for (let i = 1; i < sortedArray.length; i++) {
            firstInput = sortedArray[i - 1]
            secondInput = sortedArray[i]
            //console.log(firstInput);
            //console.log(secondInput);
            //k += 1;
            //console.log(JSON.stringify(sortedArray) + ` array #${k}`);
            if (firstInput > secondInput) {
                sortedArray[i - 1] = secondInput
                sortedArray[i] = firstInput
                i = 0
            }
        }

        console.log(JSON.stringify(sortedArray) + " final array")

        for (let i = 0; i < sortedArray.length; i++) {
            if (num <= sortedArray[i]) {
                return i
            }
        }

        // Find my place in this sorted array.

        return arr.length
    }
}
