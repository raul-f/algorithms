module.exports = {
    orbitalPeriod: function(arr) {
        let GM = 398600.4418
        let earthRadius = 6367.4447
        let newArr = [...arr]

        for (let index in newArr) {
            newArr[index]["orbitalPeriod"] = Math.round(
                2 *
                    Math.PI *
                    Math.sqrt(
                        Math.pow(arr[index]["avgAlt"] + earthRadius, 3) / GM
                    )
            )

            delete newArr[index]["avgAlt"]
        }

        console.log(JSON.stringify(newArr))

        return newArr
    }
}
