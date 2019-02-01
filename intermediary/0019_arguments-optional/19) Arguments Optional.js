/*
Create a function that sums two arguments together. 
If only one argument is provided, then return a function that expects one argument and returns the sum.

For example, addTogether(2, 3) should return 5, and addTogether(2) should return a function.

Calling this returned function with a single argument will then return the sum:

var sumTwoAnd = addTogether(2);

sumTwoAnd(3) returns 5.

If either argument isn't a valid number, return undefined.

NOTE: very messy and unpleasant.
*/

function addTogether(first, second) {

    //console.log(`${first} ${second}`);
    //console.log(`${typeof first} ${typeof second}`);

    if (typeof first === 'number' && typeof second === 'number') {

        return first + second;

    } else if (typeof first === 'number' && typeof second === 'undefined') {

        //console.log(`${first} ${second}`);

        return function (third) {

            if (typeof third === 'number') { return first + third; }

            //console.log(`${first} ${second}`);

        };
    }
    return undefined;
}
addTogether(2)([3]);

/**
 * addTogether(2, 3) should return 5.
 * addTogether(2)(3) should return 5.
 * addTogether("http://bit.ly/IqT6zt") should return undefined.
 * addTogether(2, "3") should return undefined.
 * addTogether(2)([3]) should return undefined.
 */