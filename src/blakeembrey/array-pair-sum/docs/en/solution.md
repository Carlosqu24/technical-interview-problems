2- Array pair sum

## Steps

1. Select the first number of the array and add it with the following ones to see which one the sum gives the number of the first parameter

2. Create an array with the selected number and the one found

cannot be repeated
Cannot be an empty array
They cannot be equal numbers

## Solution

1. Make a mapping of the general array INTEGERS_ARRAY. This will return a new array with the pairs of numbers

2. For each loop, do a find of the same array to find the integers that, adding
the currentValue, of the expected sum. This will return a pair of numbers in an array, the currentValue and the secondNumberMatched

3. To avoid repeated numbers, I made an extra function that eliminates those pairs

4. To avoid repeated pairs but in different order, I made an extra function that eliminates those pairs

5. To avoid empty arrays of elements that do not add up to the expected value, I made a function to remove them