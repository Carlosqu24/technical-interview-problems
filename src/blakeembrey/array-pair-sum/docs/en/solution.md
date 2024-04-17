# 2- Array pair sum

## Solution

1. Make a mapping of the general array INTEGERS_ARRAY. This will return a new array with the pairs of numbers

2. For each loop, do a find of the same array to find the integers that, adding
the currentValue, of the expected sum. This will return a pair of numbers in an array, the currentValue and the secondNumberMatched

3. To avoid repeated numbers, I made an extra function that eliminates those pairs

4. To avoid repeated pairs but in different order, I made an extra function that eliminates those pairs

5. To avoid empty arrays of elements that do not add up to the expected value, I made a function to remove them