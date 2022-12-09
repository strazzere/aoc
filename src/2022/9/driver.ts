function distanceOf(one: string, two: string): number[] {
  return [
    Number(two.split(',')[0]) - Number(one.split(',')[0]),
    Number(two.split(',')[1]) - Number(one.split(',')[1]),
  ];
}

function isNeighbor(one: string, two: string): boolean {
  const distance = distanceOf(one, two);

  return distance.every((val) => val <= 1 && val >= -1);
}

export function work(input: string): number {
  const directions = input.split('\n');

  const head = ['0,0'];
  const tail = ['0,0'];
  directions.map((direction) => {
    const parsed = direction.split(' ');
    const dir = parsed[0];
    const amount = Number(parsed[1]);

    const currentHead = head.at(-1).split(',');
    let nextMove = undefined;
    for (let i = 0; i < amount; i++) {
      switch (dir) {
        case 'R':
          nextMove = `${Number(currentHead[0]) + (i + 1)},${currentHead[1]}`;
          break;
        case 'L':
          nextMove = `${Number(currentHead[0]) - (i + 1)},${currentHead[1]}`;
          break;
        case 'U':
          nextMove = `${currentHead[0]},${Number(currentHead[1]) + (i + 1)}`;
          break;
        case 'D':
          nextMove = `${currentHead[0]},${Number(currentHead[1]) - (i + 1)}`;
          break;
        default:
          throw new Error(`Unknown direction`);
      }
      head.push(nextMove);
      if (!isNeighbor(tail.at(-1), head.at(-1))) {
        tail.push(head.at(-2));
      }
    }
  });

  return tail.filter((value, index, self) => {
    return self.indexOf(value) === index;
  }).length;
}

function getNextMove(head: string[], tail: string[]) {
  const distance = distanceOf(tail.at(-1), head.at(-1));
  let xCoord = Number(tail.at(-1).split(',')[0]);
  let yCoord = Number(tail.at(-1).split(',')[1]);
  if (distance[0] > 0) {
    xCoord++;
  } else if (distance[0] < 0) {
    xCoord--;
  }
  if (distance[1] > 0) {
    yCoord++;
  } else if (distance[1] < 0) {
    yCoord--;
  }

  return `${xCoord},${yCoord}`;
}

// This got reworked a bit as I technically was treating part 1 as a "snake" and not a "rope",
// Which worked when the rope was of length 2, though this lead to issues on diagonal moves
export function work2(input: string): number {
  const directions = input.split('\n');

  const head = ['0,0'];
  const knots: string[][] = [
    ['0,0'],
    ['0,0'],
    ['0,0'],
    ['0,0'],
    ['0,0'],
    ['0,0'],
    ['0,0'],
    ['0,0'],
    ['0,0'],
  ];
  directions.map((direction) => {
    const parsed = direction.split(' ');
    const dir = parsed[0];
    const amount = Number(parsed[1]);

    const currentHead = head.at(-1).split(',');
    let tempHead = head;

    for (let i = 0; i < amount; i++) {
      let nextMove = undefined;
      switch (dir) {
        case 'R':
          nextMove = `${Number(currentHead[0]) + (i + 1)},${currentHead[1]}`;
          break;
        case 'L':
          nextMove = `${Number(currentHead[0]) - (i + 1)},${currentHead[1]}`;
          break;
        case 'U':
          nextMove = `${currentHead[0]},${Number(currentHead[1]) + (i + 1)}`;
          break;
        case 'D':
          nextMove = `${currentHead[0]},${Number(currentHead[1]) - (i + 1)}`;
          break;
        default:
          console.log(`dir : ${dir}`);
          throw new Error(`Unknown direction`);
      }
      head.push(nextMove);
      tempHead = head;
      for (let x = 0; x < knots.length; x++) {
        if (!isNeighbor(knots[x].at(-1), tempHead.at(-1))) {
          knots[x].push(getNextMove(tempHead, knots[x]));
        }
        tempHead = knots[x];
      }
    }
  });

  return knots.at(-1).filter((value, index, self) => {
    return self.indexOf(value) === index;
  }).length;
}
