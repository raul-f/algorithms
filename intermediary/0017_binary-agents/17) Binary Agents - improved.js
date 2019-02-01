/*
Return an English translated sentence of the passed binary string.

The binary string will be space separated.

NOTE: could have transformed binary into decimal and used String.fromCharCode(decNum) method. Explore that possibility.
*/

function binaryAgent(str) {

    //convert string to binary snippets correspoding to characters

    let binaryArray = [];
    let middleman = '';

    for (let i = 0; i < str.length; i++) {

        if (middleman.length === 7) {

            middleman += str[i];
            binaryArray.push(middleman);
            middleman = '';

        } else if (str[i] !== ' ') {
            middleman += str[i];
        }
    }

    console.log(JSON.stringify(binaryArray));
    //console.log(JSON.stringify(middleman));

    let finalString = '';

    //convert binaryArray binary entries to decimal entries

    let hexArray = [];

    for (let entry in binaryArray) {

        let powTwo = 0;
        let midmanString = '';
        let decNumber = 0;

        for (let index = (binaryArray[entry].length - 1); index >= 0; index--) {

            if (binaryArray[entry][index] === '1') {

                decNumber += Math.pow(2, powTwo);
                
            }
            powTwo++;
        }

        console.log(decNumber);

        //convert decimal numbers to Unicode characters

        finalString += String.fromCharCode(decNumber);

    }

    console.log(JSON.stringify(finalString));

    return finalString;
}

binaryAgent("01110011 01110000 01101000 01101001 01101110 01111000 00100000 01101111 01100110 00100000 01100010 01101100 01100001 01100011 01101011 00100000 01110001 01110101 01100001 01110010 01110100 01111010 00101100 00100000 01101010 01110101 01100100 01100111 01100101 00100000 01101101 01111001 00100000 01110110 01101111 01110111 00101110");

/**
 * binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111") should return "Aren't bonfires fun!?".
 * binaryAgent("01001001 00100000 01101100 01101111 01110110 01100101 00100000 01000110 01110010 01100101 01100101 01000011 01101111 01100100 01100101 01000011 01100001 01101101 01110000 00100001") should return "I love FreeCodeCamp!".
 */