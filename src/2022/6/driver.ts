export function work(input: string): number {
  let splitInput = input.split('')
  let start = -1
  let windowSize = 4

  splitInput.some((_value, index) => {
    if (index > input.length - windowSize) {
      return false
    }
    for (let i = 1; i < windowSize; i++) {
      let window = splitInput.slice(index + i, index + windowSize)
      if (window.includes(splitInput[index + i - 1])) {
        return false
      }
    }

    start = index + windowSize
    return true
  })

  return start
}

export function work2(input: string): number {
  let splitInput = input.split('')
  let start = -1
  let windowSize = 14

  splitInput.some((_value, index) => {
    if (index > input.length - windowSize) {
      return false
    }
    for (let i = 1; i < windowSize; i++) {
      let window = splitInput.slice(index + i, index + windowSize)
      if (window.includes(splitInput[index + i - 1])) {
        return false
      }
    }

    start = index + windowSize
    return true
  })

  return start
}
