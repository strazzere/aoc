export function work(input: string): number {
  const calories = input.split('\n');

  const elves: Array<number> = [];
  let count = 0;
  calories.forEach((value, _index) => {
    if (value === '') {
      elves.push(count);
      count = 0;
    } else {
      count += Number(value);
    }
  });
  elves.push(count);

  return Math.max(...elves.map((value) => value));
}

export function work2(input: string): number {
  const calories = input.split('\n');

  const elves: Array<number> = [];
  let count = 0;
  calories.forEach((value, _index) => {
    if (value === '') {
      elves.push(count);
      count = 0;
    } else {
      count += Number(value);
    }
  });
  elves.push(count);

  const used: number[] = [];
  let sum = 0;

  for (let i = 0; i < 3; i++) {
    const max = Math.max(
      ...elves.map((value, index) => {
        if (!used.includes(index)) {
          return value;
        }
        return -1;
      }),
    );
    used.push(elves.indexOf(max));
    sum += max;
  }

  return sum;
}
