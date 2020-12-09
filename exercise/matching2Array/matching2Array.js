const R = require('ramda')

// matching 2 array are equal
// for example
// arr1 = [2,3,4,5], arr2 = [2,3,4,5] ~> both equal
// arr1 = "abcd", arr2 = "abcd" ~> both equal

const reducer = (acc, pair) => {
    return acc && (pair[0] === pair[1])
}

export function matching2Array(arr1, arr2) {
    // return R.equals(arr1, arr2)

    if (arr1.length != arr2.length) {
        return false
    } else {
        return R.reduce(reducer, true, R.zip(arr1, arr2))
    }
}