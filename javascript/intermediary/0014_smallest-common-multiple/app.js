/*

NOTE 1: works, but is far too inefficient. Improve.

NOTE 2: has been somewhat improved, but needs more work done.

NOTE 3: has finally passed all tests!

*/

module.exports = {
    smallestCommons: function(arr) {
        //put the two-number array in order

        let orderedArr = []

        if (arr[0] > arr[1]) {
            orderedArr[0] = arr[1]
            orderedArr[1] = arr[0]
        } else {
            orderedArr = [...arr]
        }

        console.log(JSON.stringify(orderedArr))

        //spread the orderedArr in the numbers cointained within the range; probably not ideal

        let spreadArr = []

        for (let i = orderedArr[0]; i <= orderedArr[1]; i++) {
            spreadArr.push(i)
        }

        console.log(JSON.stringify(spreadArr))

        //'for' loop starting at let i = orderedArr[1], without set breaking point. Will stop when i is divisible by all the numbers in the spreadArr and spit i out.

        let SCM

        for (let i = orderedArr[1]; i >= 0; i += orderedArr[1]) {
            let counter = 0 //counts the number of elements from spreadArr that i is divisible by.

            //another 'for' loop that goes through spreadArr

            for (let j = 0; j < spreadArr.length - 1; j++) {
                if (i % spreadArr[j] === 0) {
                    counter++
                } else {
                    break
                    // if it's not divisible by any element of spreadArr, it doesn't make sense to keep going inside the loop.
                }
            }

            if (counter === spreadArr.length - 1) {
                SCM = i
                break
            }
        }

        console.log(SCM)

        return SCM
    }
}
