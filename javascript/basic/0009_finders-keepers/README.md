# Finders Keepers

Create a function that looks through an array (first argument) and returns the first element in the array that passes a truth test (second argument).
If no element passes the test, return `undefined`.

## Tests:

-   `findElement([1, 3, 5, 8, 9, 10], function(num) { return num % 2 === 0; })` should return `8`.
-   `findElement([1, 3, 5, 9], function(num) { return num % 2 === 0; })` should return `undefined`.
