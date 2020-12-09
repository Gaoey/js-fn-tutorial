// ama is symmetric 
// tenet is not symmetric
// aabbaa is not symmetric
// aaaa is symmetric
// khokho is symmetric
export function symmetric(input) {
    let middlePos = Math.floor(input.length / 2);

    let left = input.substr(0, middlePos + (input.length % 2 == 0 ? 0 : 1))
    let right = input.substr(middlePos)

    return left == right
}