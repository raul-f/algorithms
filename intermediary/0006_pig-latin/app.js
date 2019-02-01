/*

Translate the provided string to pig latin.

Pig Latin takes the first consonant (or consonant cluster) of an English word, moves it to the end of the word and suffixes an "ay".

If a word begins with a vowel you just add "way" to the end.

Input strings are guaranteed to be English words in all lowercase.

*/

function translatePigLatin(str) {

    let translatedString = '';
    let prefixString = '';
    let consonantRegEx = /[bcdfghjklmnpqrsdtvwxyz]/;
    let vowelRegEx = /[aeiou]/;
    let counter = 0;

    while (consonantRegEx.test(str[counter]) === true && counter < str.length) {
        prefixString += str[counter];
        counter++;
    }

    for (let i = counter; i < str.length; i++) {
        translatedString += str[i];
    }

    if (translatedString.length < str.length) {
        translatedString += prefixString + 'ay';
    } else {
        translatedString += 'way';
    }

    console.log(translatedString);

    return translatedString;
}

translatePigLatin("paragraphs");