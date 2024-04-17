import { arrayPairSum, cleanPairsArray } from "./array-pair-sum.js";

describe('Array Pair Sum', () => {
    it('01 - should return: [[3, 7], [4, 6]]', () => {

        const sum = 10;
        const integersList = [3, 4, 5, 6, 7]

        const EXPECTED_VALUE = [[3, 7], [4, 6]]

        const numberPairsList = arrayPairSum(sum, integersList)

        const cleanedNumberPairsList = cleanPairsArray(numberPairsList)

        expect( cleanedNumberPairsList ).toStrictEqual(EXPECTED_VALUE)
    });

    it('02 - should return: [[3, 5], [4, 4], [4, 4], [4, 4]]', () => {

        const sum = 8;
        const integersList = [3, 4, 5, 4, 4]

        const EXPECTED_VALUE = [[3, 5]]

        const numberPairsList = arrayPairSum(sum, integersList)

        const cleanedNumberPairsList = cleanPairsArray(numberPairsList)

        expect( cleanedNumberPairsList ).toStrictEqual(EXPECTED_VALUE)
    });

    it('03 - should return: []', () => {

        const sum = 10;
        const integersList = [3, 5, 6, 8]

        const EXPECTED_VALUE = []

        const numberPairsList = arrayPairSum(sum, integersList)

        const cleanedNumberPairsList = cleanPairsArray(numberPairsList)

        expect( cleanedNumberPairsList ).toStrictEqual(EXPECTED_VALUE)
    });
})