module.exports = {
    convertToRoman: function(num) {
        let decNum = num.toString()
        let romanNum = ""

        //let numeral = { 'thousands': 'none', 'hundreds': 'none', 'tens': 'none', 'unities': 'none'}

        for (let i = decNum.length - 1; i >= 0; i--) {
            switch (i) {
                case decNum.length - 1:
                    console.log(`unity ${JSON.stringify(decNum[i])}`)
                    switch (decNum[i]) {
                        case "1":
                            romanNum = "I" + romanNum
                            break
                        case "2":
                            romanNum = "II" + romanNum
                            break
                        case "3":
                            romanNum = "III" + romanNum
                            break
                        case "4":
                            romanNum = "IV" + romanNum
                            break
                        case "5":
                            romanNum = "V" + romanNum
                            break
                        case "6":
                            romanNum = "VI" + romanNum
                            break
                        case "7":
                            romanNum = "VII" + romanNum
                            break
                        case "8":
                            romanNum = "VIII" + romanNum
                            break
                        case "9":
                            romanNum = "IX" + romanNum
                            break
                    }
                    break

                case decNum.length - 2:
                    console.log(`ten ${JSON.stringify(decNum[i])}`)
                    switch (decNum[i]) {
                        case "1":
                            romanNum = "X" + romanNum
                            break
                        case "2":
                            romanNum = "XX" + romanNum
                            break
                        case "3":
                            romanNum = "XXX" + romanNum
                            break
                        case "4":
                            romanNum = "XL" + romanNum
                            break
                        case "5":
                            romanNum = "L" + romanNum
                            break
                        case "6":
                            romanNum = "LX" + romanNum
                            break
                        case "7":
                            romanNum = "LXX" + romanNum
                            break
                        case "8":
                            romanNum = "LXXX" + romanNum
                            break
                        case "9":
                            romanNum = "XC" + romanNum
                            break
                    }
                    break

                case decNum.length - 3:
                    console.log(`hundred ${JSON.stringify(decNum[i])}`)
                    switch (decNum[i]) {
                        case "1":
                            romanNum = "C" + romanNum
                            break
                        case "2":
                            romanNum = "CC" + romanNum
                            break
                        case "3":
                            romanNum = "CCC" + romanNum
                            break
                        case "4":
                            romanNum = "CD" + romanNum
                            break
                        case "5":
                            romanNum = "D" + romanNum
                            break
                        case "6":
                            romanNum = "DC" + romanNum
                            break
                        case "7":
                            romanNum = "DCC" + romanNum
                            break
                        case "8":
                            romanNum = "DCCC" + romanNum
                            break
                        case "9":
                            romanNum = "CM" + romanNum
                            break
                    }
                    break

                case decNum.length - 4:
                    console.log(`thousand ${JSON.stringify(decNum[i])}`)
                    switch (decNum[i]) {
                        case "1":
                            romanNum = "M" + romanNum
                            break
                        case "2":
                            romanNum = "MM" + romanNum
                            break
                        case "3":
                            romanNum = "MMM" + romanNum
                    }
                    break
            }
        }

        console.log(JSON.stringify(decNum))
        console.log(JSON.stringify(num))
        console.log(JSON.stringify(romanNum))
        //console.log(JSON.stringify(numeral));

        return romanNum
    }
}
