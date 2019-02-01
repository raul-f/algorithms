/*
Given a positive integer num, return the sum of all odd Fibonacci numbers that are less than or equal to num.

The first two numbers in the Fibonacci sequence are 1 and 1. Every additional number in the sequence is the sum of the two previous numbers. The first six numbers of the Fibonacci sequence are 1, 1, 2, 3, 5 and 8.

For example, sumFibs(10) should return 10 because all odd Fibonacci numbers less than or equal to 10 are 1, 1, 3, and 5.
*/

function sumFibs(num) {

  //generate fibonacci array of all fibonacci numbers less than num.

  let fibArray = [1,1];

  for (let i = 1; (fibArray[i]+fibArray[i-1]) <= num; i++) {
    //console.log(i);
    fibArray.push(fibArray[i]+fibArray[i-1]);
  }

  console.log(JSON.stringify(fibArray));

  //sum all odd numbers in that array.

  let oddFibSum = 0;

  for (let i in fibArray) {
    if (fibArray[i] % 2 === 1) {
      oddFibSum += fibArray[i];
    }
  }

  console.log(oddFibSum);

  return oddFibSum;
}

sumFibs(1000);

/**
 * sumFibs(1) should return a number.
 * sumFibs(1000) should return 1785.
 * sumFibs(4000000) should return 4613732.
 * sumFibs(4) should return 5.
 * sumFibs(75024) should return 60696.
 * sumFibs(75025) should return 135721.
 */