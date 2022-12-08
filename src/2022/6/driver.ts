export function work(input: string): number {
  const splitInput = input.split('');
  let start = -1;
  const windowSize = 4;

  splitInput.some((_value, index) => {
    if (index > input.length - windowSize) {
      return false;
    }
    for (let i = 1; i < windowSize; i++) {
      const window = splitInput.slice(index + i, index + windowSize);
      if (window.includes(splitInput[index + i - 1])) {
        return false;
      }
    }

    start = index + windowSize;
    return true;
  });

  return start;
}

export function work2(input: string): number {
  const splitInput = input.split('');
  let start = -1;
  const windowSize = 14;

  splitInput.some((_value, index) => {
    if (index > input.length - windowSize) {
      return false;
    }
    for (let i = 1; i < windowSize; i++) {
      const window = splitInput.slice(index + i, index + windowSize);
      if (window.includes(splitInput[index + i - 1])) {
        return false;
      }
    }

    start = index + windowSize;
    return true;
  });

  return start;
}
