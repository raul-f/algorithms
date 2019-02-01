/*

Find the missing letter in the passed letter range and return it.

If all letters are present in the range, return undefined.

NOTE: Very messy, yet full of potential. To be fixed eventually.

*/

function fearNotLetter(str) {

    let alphabet = "abcdefghijklmnopqrstuvwxyz";

    //here follows the best piece of this algorithm. Very reusable.
    let letterArray = function (str) {
        let provisoryArray = [];
        for (let i = 0; i < str.length; i++) {
            provisoryArray.push(str[i]);
        }
        return provisoryArray;
    };

    let alphabetArray = letterArray(alphabet);
    //end of this work of art.

    let rangeStart = 0;
    let rangeEnd = 0;

    for (let i = 0; i < alphabet.length; i++) {

        let trigger = -1;

        if (str[0] === alphabet[i]) {
            rangeStart = i;
        } else if (str[str.length - 1] === alphabet[i]) {
            rangeEnd = i;
            console.log('Range end has been set');
            trigger += 1;
            console.log('the trigger has been activated');
        }

        while (trigger >= 0 && i === rangeEnd) {
            console.log(`we have looped ${trigger} times.`);
            if (str[0 + trigger] === alphabet[rangeStart + trigger]) {
                console.log(`At the ${trigger}th time, letter #${trigger} has been matched with letter ${alphabet[rangeStart + trigger]}.`);
                trigger++;
            } else if (rangeEnd >= rangeStart + trigger) {
                console.log(alphabet[rangeStart + trigger]);
                return alphabet[rangeStart + trigger];
            } else {
                break;
            }
        }

    }

    /*for (let i = 0; i < alphabet.length; i++) {
  
      if (str[0] === alphabet[i]) {
        rangeStart = i;
      } else if (str[str.length - 1] === alphabet[i]) {
        rangeEnd = i;
      }
  
    }*/

    let rangeSize = rangeEnd + 1 - rangeStart;

    console.log(JSON.stringify(alphabetArray));
    console.log(JSON.stringify(rangeSize));

    return undefined;
}

fearNotLetter("abce");
fearNotLetter("abcdefghjklmno");
fearNotLetter("stvwx");
fearNotLetter("bcdf");
fearNotLetter("abcdefghijklmnopqrstuvwxyz");