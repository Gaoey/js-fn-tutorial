// find prime number in an array

const isPrime = (number) => {
    if (number < 2) {
      return false
    } else {
      for (let i = 2; i < number; i++) {
          if (number % i == 0) {
              return false
          }
      }
      return true
    }
}

function primeTo(input) {
  return input.filter(v => isPrime(v))
}

export default primeTo