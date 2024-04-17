# Array Pair Sum

Given an integer array, output all distinct pairs that sum up to a specific value k. Consider the fact that the same number can add up to k with its duplicates in the array.

f(10, [3, 4, 5, 6, 7]) // [ [4, 6], [3, 7] ]
f(8, [3, 4, 5, 4, 4]) // [ [3, 5], [4, 4], [4, 4], [4, 4] ]
f(10, [3, 5, 6, 8]) // []

## Harder
- Pairs numbers can't be repeated, example: [5, 5]
- Pairs numbers can't be the same but different order, example: [3, 4], [4, 3]
- Can't be an empty array