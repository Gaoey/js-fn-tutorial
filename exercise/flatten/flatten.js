// make flatten for example [[a,b],[c,d]] => [a,b,c,d]

const R = require('ramda')

export function flatten(input) {
  return R.flatten(input)
}