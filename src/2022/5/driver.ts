export function work(input: string): string {
  const crateStart: string[] = [];
  const instructions: string[] = [];
  let crateTotal = 0;
  input.split('\n').map((line) => {
    if (line.includes('[')) {
      crateStart.push(line);
    } else if (line.includes('move')) {
      instructions.push(line);
    } else if (line.startsWith(' 1 ')) {
      crateTotal = Number(line.trim().split(' ').at(-1));
    }
  });

  crateStart.length;
  const stacks: string[] = [];
  crateStart.reverse().map((row) => {
    for (let i = 0; i < crateTotal; i++) {
      //     [D]
      // [N] [C]
      // [Z] [M] [P]
      // 01234567890
      //  1   5   9
      const crate = row.at(i * 4 + 1);
      if (crate !== ' ') {
        if (stacks[i]) {
          stacks[i] = stacks[i].concat(crate);
        } else {
          stacks[i] = crate;
        }
      }
    }
  });

  instructions.map((instruction) => {
    const split = instruction.split(' ');
    const move = Number(split.at(1));
    // indexes, reduce by one
    const from = Number(split.at(3)) - 1;
    const to = Number(split.at(5)) - 1;
    for (let i = 0; i < move; i++) {
      stacks[to] = stacks[to].concat(stacks[from].at(-1));
      stacks[from] = stacks[from].slice(0, stacks[from].length - 1);
    }
  });

  let top = '';
  stacks.map((stack) => {
    if (stack.length > 0) {
      top = top.concat(stack.at(-1));
    }
  });

  return top;
}

export function work2(input: string): string {
  const crateStart: string[] = [];
  const instructions: string[] = [];
  let crateTotal = 0;
  input.split('\n').map((line) => {
    if (line.includes('[')) {
      crateStart.push(line);
    } else if (line.includes('move')) {
      instructions.push(line);
    } else if (line.startsWith(' 1 ')) {
      crateTotal = Number(line.trim().split(' ').at(-1));
    }
  });

  crateStart.length;
  const stacks: string[] = [];
  crateStart.reverse().map((row) => {
    for (let i = 0; i < crateTotal; i++) {
      //     [D]
      // [N] [C]
      // [Z] [M] [P]
      // 01234567890
      //  1   5   9
      const crate = row.at(i * 4 + 1);
      if (crate !== ' ') {
        if (stacks[i]) {
          stacks[i] = stacks[i].concat(crate);
        } else {
          stacks[i] = crate;
        }
      }
    }
  });

  instructions.map((instruction) => {
    const split = instruction.split(' ');
    const move = Number(split.at(1));
    // indexes, reduce by one
    const from = Number(split.at(3)) - 1;
    const to = Number(split.at(5)) - 1;
    stacks[to] = stacks[to].concat(stacks[from].slice(0 - move));
    stacks[from] = stacks[from].slice(0, stacks[from].length - move);
  });

  let top = '';
  stacks.map((stack) => {
    if (stack.length > 0) {
      top = top.concat(stack.at(-1));
    }
  });

  return top;
}
