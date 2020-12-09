// abc => cba, [1,2,3] => [3,2,1]
export function reverseArray(input) {
    if (typeof(input) === 'string') {
        return input.split('').reverse().join('')
    } else {
        return input.reverse()
    }
}