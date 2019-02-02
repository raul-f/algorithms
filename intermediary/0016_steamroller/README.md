# Steamroller

Flatten a nested array. You must account for varying levels of nesting.

## Tests:

-   `steamrollArray([[["a"]], [["b"]]])` should return `["a", "b"]`.
-   `steamrollArray([1, [2], [3, [[4]]]])` should return `[1, 2, 3, 4]`.
-   `steamrollArray([1, [], [3, [[4]]]])` should return `[1, 3, 4]`.
-   `steamrollArray([1, {}, [3, [[4]]]])` should return `[1, {}, 3, 4]`.
-   `steamrollArray([1, [2, 3, 4], 3, [1, 2, 3, 4, 2]])` should return `[1, 2, 3, 4, 3, 1, 2, 3, 4, 2]`.
-   `steamrollArray([1, 2, 3, [1, 2, 3, 4, [2, 3, 4]]])` should return `[1, 2, 3, 1, 2, 3, 4, 2, 3, 4]`.
