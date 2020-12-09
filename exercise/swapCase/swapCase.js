// hello i am gaoey ~> HELLO i AM gaoey

export function swapCase(input) {
  return input
      .toLowerCase()
      .split(' ')
      .map((word, index) => {
        return index % 2 == 0 ? word.toUpperCase() : word.toLowerCase()
      })
      .join(' ')
}