module.exports = {
    sumFibs: function(num) {
        //generate fibonacci array of all fibonacci numbers less than num.

        let fibArray = [1, 1]

        for (let i = 1; fibArray[i] + fibArray[i - 1] <= num; i++) {
            //console.log(i);
            fibArray.push(fibArray[i] + fibArray[i - 1])
        }

        console.log(JSON.stringify(fibArray))

        //sum all odd numbers in that array.

        let oddFibSum = 0

        for (let i in fibArray) {
            if (fibArray[i] % 2 === 1) {
                oddFibSum += fibArray[i]
            }
        }

        console.log(oddFibSum)

        return oddFibSum
    }
}
