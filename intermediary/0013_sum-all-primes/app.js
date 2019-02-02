module.exports = {
    sumPrimes: function(num) {
        //make an array of the primes up to and including num.

        let primeArr = [2]

        sum = 0

        if (num > 2) {
            for (let i = 2; i <= num; i++) {
                let count = 0

                for (let index in primeArr) {
                    if (i % primeArr[index] === 0) {
                        count += 1
                    }
                }

                if (count === 0) {
                    primeArr.push(i)
                }
            }
        }

        console.log(JSON.stringify(primeArr))

        //sum all numbers in that array.

        let sum = primeArr.reduce(function(vacc, val) {
            return vacc + val
        })

        console.log(sum)

        return sum
    }
}
