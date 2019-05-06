# BST Operations

## Task

Write a program that processes the following queries on a Binary Search Tree:

**i x**: Insert **x** in the BST  
**d x**: Delete **x** from the BST

### Input format

- Line 1 contains an integer Q, the number of queries
- The next Q lines are of the form i x or d x

### Output format

- For each query, print the position of x in the BST
- If the position of a node is p, the positions of its left and right children are 2p and 2p + 1 respectively
- Position of the root node is 1

### Test data

- 1 ≤ N ≤ 103
- -109 ≤ x ≤ 109
- 1 ≤ position(x) ≤ 232 - 1
- It is guaranteed that there will be no duplicates in the BST

### Sample input

```
5
i 1
i 2
i 0
d 2
i 3
```

### Sample output

```
1
3
2
3
3
```
