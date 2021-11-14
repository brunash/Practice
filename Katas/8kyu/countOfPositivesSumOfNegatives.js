function countPositivesSumNegatives(input) {
    if (!input || input.length === 0) {
        return []
    } else {
        let positiveNum = input.filter((ele) => ele > 0).length
        let negativeNum = input.filter((ele) => ele < 0).reduce((acc, val) => acc + val, 0)
        return [positiveNum, negativeNum]
    }
}