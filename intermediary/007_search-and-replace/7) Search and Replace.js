/*

Perform a search and replace on the sentence using the arguments provided and return the new sentence.

First argument is the sentence to perform the search and replace on.

Second argument is the word that you will be replacing (before).

Third argument is what you will be replacing the second argument with (after).

NOTE: lazy scripting - used the replace() method. Fix to work without it.

*/

function myReplace(str, before, after) {

    let upperCase = /[A-Z]/;
    let lowerCase = /[a-z]/;
    let toReplace = '';
    let counter = 0;

    if (upperCase.test(before[0]) && lowerCase.test(after[0])) {
        toReplace += after[0].toUpperCase();
        for (let i = 1; i < after.length; i++) {
            toReplace += after[i];
        }
    } else if ((upperCase.test(before[0]) && upperCase.test(after[0])) || (lowerCase.test(before[0]) && lowerCase.test(after[0]))) {
        toReplace = after;
    } else {
        toReplace += after[0].toLowerCase();
        for (let i = 1; i < after.length; i++) {
            toReplace += after[i];
        }
    }

    let search = new RegExp(before);

    //console.log(search);

    let finalStr = str.replace(search, toReplace);

    //console.log(JSON.stringify(finalStr));

    return finalStr;
}

myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped");
myReplace("Let us go to the store", "store", "mall");
myReplace("He is Sleeping on the couch", "Sleeping", "sitting");
myReplace("This has a spellngi error", "spellngi", "spelling");
myReplace("His name is Tom", "Tom", "john");
myReplace("Let us get back to more Coding", "Coding", "algorithms");