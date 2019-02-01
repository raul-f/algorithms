/*
Find the smallest common multiple of the provided parameters that can be evenly divided by both, as well as by all sequential numbers in the range between these parameters.

The range will be an array of two numbers that will not necessarily be in numerical order.

For example, if given 1 and 3, find the smallest common multiple of both 1 and 3 that is also evenly divisible by all numbers between 1 and 3. The answer here would be 6.

NOTE 1: works, but is far too inefficient. Improve.

NOTE 2: has been somewhat improved, but needs more work done.

NOTE 3: has finally passed all tests!
*/

function smallestCommons(arr) {

    //put the two-number array in order

    let orderedArr = [];

    if (arr[0] > arr[1]) {

        orderedArr[0] = arr[1];
        orderedArr[1] = arr[0];

    } else {

        orderedArr = [...arr];
    }

    console.log(JSON.stringify(orderedArr));

    //spread the orderedArr in the numbers cointained within the range; probably not ideal

    let spreadArr = [];

    for (let i = orderedArr[0]; i <= orderedArr[1]; i++) {
        spreadArr.push(i);
    }

    console.log(JSON.stringify(spreadArr));

    //'for' loop starting at let i = orderedArr[1], without set breaking point. Will stop when i is divisible by all the numbers in the spreadArr and spit i out.

    let SCM;

    for (let i = orderedArr[1]; i >= 0; i += orderedArr[1]) {

        let counter = 0; //counts the number of elements from spreadArr that i is divisible by.

        //another 'for' loop that goes through spreadArr

        for (let j = 0; j < spreadArr.length - 1; j++) {

            if (i % spreadArr[j] === 0) {

                counter++;

            } else {

                break;
                // if it's not divisible by any element of spreadArr, it doesn't make sense to keep going inside the loop.
            }
        }

        if (counter === spreadArr.length - 1) {
            SCM = i;
            break;
        }
    }

    console.log(SCM);

    return SCM;
}


smallestCommons([1, 5]);
console.log(' ');
smallestCommons([5, 1]);
console.log(' ');
smallestCommons([2, 10]);
console.log(' ');
smallestCommons([1, 13]);
console.log(' ');
smallestCommons([23, 18]);

/**
 * smallestCommons([1, 5]) should return a number.
 * smallestCommons([1, 5]) should return 60.
 * smallestCommons([5, 1]) should return 60.
 * smallestCommons([2, 10]) should return 2520.
 * smallestCommons([1, 13]) should return 360360.
 * smallestCommons([23, 18]) should return 6056820.
 */