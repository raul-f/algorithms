/*

The DNA strand is missing the pairing element. Take each character, get its pair, and return the results as a 2d array.

Base pairs are a pair of AT and CG. Match the missing element to the provided character.

Return the provided character as the first element in each array.

For example, for the input GCG, return [["G", "C"], ["C","G"],["G", "C"]]

The character and its pair are paired up in an array, and all the arrays are grouped into one encapsulating array.

*/

function pairElement(str) {
    let DNAPairs = [];

    for (let letterIndex in str) {

        let currentPair = [];

        if (str[letterIndex] === 'A') {

            currentPair.push('A');
            currentPair.push('T');
            DNAPairs.push(currentPair);

        } else if (str[letterIndex] === 'T') {

            currentPair.push('T');
            currentPair.push('A');
            DNAPairs.push(currentPair);

        } else if (str[letterIndex] === 'G') {

            currentPair.push('G')
            currentPair.push('C');
            DNAPairs.push(currentPair);

        } else if (str[letterIndex] === 'C') {

            currentPair.push('C')
            currentPair.push('G');
            DNAPairs.push(currentPair);

        }

    }
    return DNAPairs;
}

pairElement("GCG");
pairElement("ATCGA");
pairElement("TTGAG");
pairElement("CTCTA");