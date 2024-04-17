
export function removeReversedPairs(array) {
    return array.filter((value, index, self) => 
        index === self.findIndex((v) => 
            v.toString() === value.toString() || v.slice().reverse().toString() === value.toString()
        )
    );
}

export function removeEmptyPairs(array) {
    return array.filter((value) => value.length > 0)
}

export function cleanPairsArray(array) {
    const result = removeReversedPairs(array)
    return removeEmptyPairs(result)
}

export function arrayPairSum(
    sum: number, 
    integersList: number[]
) {
    if (sum < 0) return []
    if (integersList.length < 2) return []

    return integersList.map(
        (currentValue, _, array) => {
            const secondNumberMatched = array.find(
                (value, _) => value + currentValue === sum
            );

            const pairArray = [currentValue, secondNumberMatched]

            if (pairArray[0] === pairArray[1]) return []
            if (pairArray[0] === undefined || pairArray[1] === undefined) return []
            return pairArray
    })
}