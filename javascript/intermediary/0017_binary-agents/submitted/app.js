/*

NOTE: could have transformed binary into decimal and used String.fromCharCode(decNum) method. Explore that possibility.

*/

module.exports = {
    binaryAgent: function(str) {
        //convert string to binary snippets correspoding to characters

        let binaryArray = []
        let middleman = ""

        for (let i = 0; i < str.length; i++) {
            if (middleman.length === 7) {
                middleman += str[i]
                binaryArray.push(middleman)
                middleman = ""
            } else if (str[i] !== " ") {
                middleman += str[i]
            }
        }

        //console.log(JSON.stringify(binaryArray));
        //console.log(JSON.stringify(middleman));

        /* Very nice, yet unecessary.
  
    //convert binaryArray binary entries to hexadecimal entries
  
    let hexArray = [];
  
    for (let entry in binaryArray) {
  
      let powTwo = 0;
      let midmanString = '';
      let decNumber = 0;
  
      for (let index = (binaryArray[entry].length - 1); index >= 0; index--) {
        if (binaryArray[entry][index] === '1') {
          decNumber += Math.pow(2,powTwo);
        }
        powTwo++;
      }
  
      console.log(decNumber);
  
      /* All very nice; all very wrong.
      let midmanArray = [];
  
      for(let i in binaryArray[entry]) {
        if (middleman.length === 3) {
          middleman += binaryArray[entry][i];
          midmanArray.push(middleman);
          middleman = '';
        } else {
          middleman += binaryArray[entry][i];
        }
      }
  
      console.log(JSON.stringify(midmanArray));
  
      let midmanString = '';
  
      for (let i in midmanArray) {
  
      }
    }
  
    //convert characterArray entries to ASCII characters*/

        let finalString = ""

        for (let entry in binaryArray) {
            switch (binaryArray[entry]) {
                case "00100000":
                    finalString += " "
                    break
                case "00100001":
                    finalString += "!"
                    break
                case "00100010":
                    finalString += '"'
                    break
                case "00100011":
                    finalString += "#"
                    break
                case "00100100":
                    finalString += "$"
                    break
                case "00100101":
                    finalString += "%"
                    break
                case "00100110":
                    finalString += "&"
                    break
                case "00100111":
                    finalString += "'"
                    break
                case "00101000":
                    finalString += "("
                    break
                case "00101001":
                    finalString += ")"
                    break
                case "00101010":
                    finalString += "*"
                    break
                case "00101011":
                    finalString += "+"
                    break
                case "00101100":
                    finalString += ","
                    break
                case "00101101":
                    finalString += "-"
                    break
                case "00101110":
                    finalString += "."
                    break
                case "00101111":
                    finalString += "/"
                    break
                case "00110000":
                    finalString += "0"
                    break
                case "00110001":
                    finalString += "1"
                    break
                case "00110010":
                    finalString += "2"
                    break
                case "00110011":
                    finalString += "3"
                    break
                case "00110100":
                    finalString += "4"
                    break
                case "00110101":
                    finalString += "5"
                    break
                case "00110110":
                    finalString += "6"
                    break
                case "00110111":
                    finalString += "7"
                    break
                case "00111000":
                    finalString += "8"
                    break
                case "00111001":
                    finalString += "9"
                    break
                case "00111010":
                    finalString += ":"
                    break
                case "00111011":
                    finalString += ";"
                    break
                case "00111100":
                    finalString += "<"
                    break
                case "00111101":
                    finalString += "="
                    break
                case "00111110":
                    finalString += ">"
                    break
                case "00111111":
                    finalString += "?"
                    break
                case "01000000":
                    finalString += "@"
                    break
                case "01000001":
                    finalString += "A"
                    break
                case "01000010":
                    finalString += "B"
                    break
                case "01000011":
                    finalString += "C"
                    break
                case "01000100":
                    finalString += "D"
                    break
                case "01000101":
                    finalString += "E"
                    break
                case "01000110":
                    finalString += "F"
                    break
                case "01000111":
                    finalString += "G"
                    break
                case "01001000":
                    finalString += "H"
                    break
                case "01001001":
                    finalString += "I"
                    break
                case "01001010":
                    finalString += "J"
                    break
                case "01001011":
                    finalString += "K"
                    break
                case "01001100":
                    finalString += "L"
                    break
                case "01001101":
                    finalString += "M"
                    break
                case "01001110":
                    finalString += "N"
                    break
                case "01001111":
                    finalString += "O"
                    break
                case "01010000":
                    finalString += "P"
                    break
                case "01010001":
                    finalString += "Q"
                    break
                case "01010010":
                    finalString += "R"
                    break
                case "01010011":
                    finalString += "S"
                    break
                case "01010100":
                    finalString += "T"
                    break
                case "01010101":
                    finalString += "U"
                    break
                case "01010110":
                    finalString += "V"
                    break
                case "01010111":
                    finalString += "W"
                    break
                case "01011000":
                    finalString += "X"
                    break
                case "01011001":
                    finalString += "Y"
                    break
                case "01011010":
                    finalString += "Z"
                    break
                case "01011011":
                    finalString += "["
                    break
                /*case '01011100':
                finalString += '\\';
                break;*/
                case "01011101":
                    finalString += "]"
                    break
                case "01011110":
                    finalString += "^"
                    break
                case "01011111":
                    finalString += "_"
                    break
                case "01100000":
                    finalString += "`"
                    break
                case "01100001":
                    finalString += "a"
                    break
                case "01100010":
                    finalString += "b"
                    break
                case "01100011":
                    finalString += "c"
                    break
                case "01100100":
                    finalString += "d"
                    break
                case "01100101":
                    finalString += "e"
                    break
                case "01100110":
                    finalString += "f"
                    break
                case "01100111":
                    finalString += "g"
                    break
                case "01101000":
                    finalString += "h"
                    break
                case "01101001":
                    finalString += "i"
                    break
                case "01101010":
                    finalString += "j"
                    break
                case "01101011":
                    finalString += "k"
                    break
                case "01101100":
                    finalString += "l"
                    break
                case "01101101":
                    finalString += "m"
                    break
                case "01101110":
                    finalString += "n"
                    break
                case "01101111":
                    finalString += "o"
                    break
                case "01110000":
                    finalString += "p"
                    break
                case "01110001":
                    finalString += "q"
                    break
                case "01110010":
                    finalString += "r"
                    break
                case "01110011":
                    finalString += "s"
                    break
                case "01110100":
                    finalString += "t"
                    break
                case "01110101":
                    finalString += "u"
                    break
                case "01110110":
                    finalString += "v"
                    break
                case "01110111":
                    finalString += "w"
                    break
                case "01111000":
                    finalString += "x"
                    break
                case "01111001":
                    finalString += "y"
                    break
                case "01111010":
                    finalString += "z"
                    break
                case "01111011":
                    finalString += "{"
                    break
                case "01111100":
                    finalString += "|"
                    break
                case "01111101":
                    finalString += "}"
                    break
                case "01111110":
                    finalString += "~"
                    break
            }
        }

        console.log(JSON.stringify(finalString))

        return finalString
    }
}
