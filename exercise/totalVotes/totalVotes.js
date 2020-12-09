// see test case
export function totalVotes(input) {
    return input
        .map(v => v.voted == true ? 1 : 0)
        .reduce((acc, val) => acc + val, 0)
}