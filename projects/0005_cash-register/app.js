module.exports = {
    checkCashRegister: function(price, cash, cid) {
        let change = []
        let totalChange = cash - price
        let totalChangeYetToBeReturned = cash - price

        // Make a currency unit table

        let cut = {
            PENNY: 0.01,
            NICKEL: 0.05,
            DIME: 0.1,
            QUARTER: 0.25,
            ONE: 1,
            FIVE: 5,
            TEN: 10,
            TWENTY: 20,
            "ONE HUNDRED": 100
        } //currencyUnitTable

        // make an array with the amount of each currency and check total amount of money

        let ogCidAmounts = []

        for (let i = 0; i < cid.length; i++) {
            if (i === 0) {
                ogCidAmounts.push(["PENNY", Math.round(cid[i][1] / 0.01)])
            } else if (i === 1) {
                ogCidAmounts.push(["NICKEL", Math.round(cid[i][1] / 0.05)])
            } else if (i === 2) {
                ogCidAmounts.push(["DIME", Math.round(cid[i][1] / 0.1)])
            } else if (i === 3) {
                ogCidAmounts.push(["QUARTER", Math.round(cid[i][1] / 0.25)])
            } else if (i === 4) {
                ogCidAmounts.push(["ONE", Math.round(cid[i][1])])
            } else if (i === 5) {
                ogCidAmounts.push(["FIVE", Math.round(cid[i][1] / 5)])
            } else if (i === 6) {
                ogCidAmounts.push(["TEN", Math.round(cid[i][1] / 10)])
            } else if (i === 7) {
                ogCidAmounts.push(["TWENTY", Math.round(cid[i][1] / 20)])
            } else if (i === 8) {
                ogCidAmounts.push(["ONE HUNDRED", Math.round(cid[i][1] / 100)])
            }
        }

        //console.log(JSON.stringify(ogCidAmounts));

        //lets calculate this change.

        let futureCid = [...cid]
        let cidAmounts = [...ogCidAmounts]
        let totalChangeReturned = 0

        for (let i = cid.length - 1; i >= 0; i--) {
            if (totalChange >= cut[cid[i][0]]) {
                if (cidAmounts[i][1] > 0) {
                    change.push([cid[i][0], 0])
                } else {
                    continue
                }

                //console.log(JSON.stringify(`My god I am lost and also I'm logging ${cid[i][0]}`));
                //console.log(' ');
                //console.log(cidAmounts[i][1]);

                let parameterA =
                    Math.round(100 * (totalChangeReturned + cut[cid[i][0]])) /
                    100
                let parameterB = Math.round(100 * totalChange) / 100

                while (parameterA <= parameterB && cidAmounts[i][1] > 0) {
                    totalChangeReturned += cut[cid[i][0]]
                    parameterA =
                        Math.round(
                            100 * (totalChangeReturned + cut[cid[i][0]])
                        ) / 100
                    totalChangeReturned =
                        Math.round(100 * totalChangeReturned) / 100

                    change[change.length - 1][1] += cut[cid[i][0]]
                    change[change.length - 1][1] =
                        Math.round(100 * change[change.length - 1][1]) / 100

                    cidAmounts[i][1]--

                    //console.log(`The amount of ${cidAmounts[i][0]} is ${cidAmounts[i][1]}`);
                    //console.log(`The totalChangeReturned is ${totalChangeReturned} and the total change is ${totalChange}`);
                    //console.log(' ');
                }

                if (change[change.length - 1][1] === 0) {
                    change.splice(change.length - 1, 1)
                }

                if (totalChangeReturned === totalChange) {
                    break
                }
            }
        }

        console.log(
            `The amount of each currency left is: ${JSON.stringify(
                cidAmounts
            )}.`
        )
        console.log(
            `The total amount that should have been returned is ${totalChange}.`
        )
        console.log(
            `The amount that has been returned is ${totalChangeReturned}.`
        )
        console.log(JSON.stringify(change))

        let p1 = totalChangeReturned
        let p2 = totalChange
        let diffCounter = 0

        for (let index in cidAmounts) {
            //if the counter is different from 0, the cash register is not empty.
            if (cidAmounts[index][1] !== 0) {
                diffCounter++
            }
        }

        //console.log(diffCounter);

        if (p1 < p2) {
            console.log(
                JSON.stringify({ status: "INSUFFICIENT_FUNDS", change: [] })
            )
            console.log(" ")
            return { status: "INSUFFICIENT_FUNDS", change: [] }
        } else if (diffCounter === 0) {
            let finalChange = [
                ["PENNY", 0],
                ["NICKEL", 0],
                ["DIME", 0],
                ["QUARTER", 0],
                ["ONE", 0],
                ["FIVE", 0],
                ["TEN", 0],
                ["TWENTY", 0],
                ["ONE HUNDRED", 0]
            ]

            for (let i in finalChange) {
                for (let j in change) {
                    if (change[j][0] === finalChange[i][0]) {
                        finalChange[i][1] = change[j][1]
                    }
                }
            }

            console.log(
                JSON.stringify({ status: "CLOSED", change: finalChange })
            )
            console.log(" ")
            return { status: "CLOSED", change: finalChange }
        }

        console.log(JSON.stringify({ status: "OPEN", change: change }))
        console.log(" ")

        // Here is your change, ma'am.
        return { status: "OPEN", change: change }
    }
}
