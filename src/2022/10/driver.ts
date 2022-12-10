export function work(input: string): number {
  const instructions = input.split('\n');
  const pipeline: number[] = [1];

  instructions.map((instruction) => {
    const inst = instruction.split(' ')[0];
    const val = Number(instruction.split(' ')[1]);

    switch (inst) {
      case 'addx':
        pipeline.push(0);
        pipeline.push(val);
        break;
      case 'noop':
        pipeline.push(0);
        break;
      default:
        throw new Error('Unknown instruction');
    }
  });

  const cycles: number[] = [];
  pipeline.map((inst) => {
    let previousValue = 0;
    if (cycles.at(-1)) {
      previousValue = cycles.at(-1);
    }
    cycles.push(previousValue + inst);
  });

  let strengths = 0;
  const toCheck = [20, 60, 100, 140, 180, 220];
  toCheck.forEach((index) => {
    strengths += index * cycles[index - 1];
  });

  return strengths;
}

export function work2(input: string): string {
  const instructions = input.split('\n');
  const pipeline: number[] = [1];

  instructions.map((instruction) => {
    const inst = instruction.split(' ')[0];
    const val = Number(instruction.split(' ')[1]);

    switch (inst) {
      case 'addx':
        pipeline.push(0);
        pipeline.push(val);
        break;
      case 'noop':
        pipeline.push(0);
        break;
      default:
        throw new Error('Unknown instruction');
    }
  });

  let crt = '';
  let spritePosition = 0;
  const cycles: number[] = [];
  pipeline.map((inst, cycleIndex) => {
    if (cycleIndex > 0) {
      if (cycleIndex % 40 >= spritePosition && cycleIndex % 40 <= spritePosition + 2) {
        crt = crt.concat('#');
      } else {
        crt = crt.concat('.');
      }

      if (cycleIndex % 40 === 0) {
        crt = crt.concat('\n');
      }
    }

    let previousValue = 0;
    if (cycles.at(-1)) {
      previousValue = cycles.at(-1);
    }
    cycles.push(previousValue + inst);

    spritePosition = cycles.at(-1);
  });

  return crt;
}
