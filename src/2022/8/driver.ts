const isEdge = (map: number[], index: number) => {
  if (index === 0 || map.length - 1 === index) {
    return true;
  }
  return false;
};

const isGreatestFromAnyAngle = (map: number[][], xCoord: number, yCoord: number): boolean => {
  const val = map[xCoord][yCoord];
  const left = map[xCoord].slice(0, yCoord);
  const right = map[xCoord].slice(yCoord + 1);

  if (!left.some((v) => v >= val) || !right.some((v) => v >= val)) {
    return true;
  }

  const up: number[] = [];
  const down: number[] = [];
  for (let i = 0; i < map.length; i++) {
    if (i < xCoord) {
      up.push(map[i][yCoord]);
    } else if (i > xCoord) {
      down.push(map[i][yCoord]);
    }
  }

  if (!up.some((v) => v >= val) || !down.some((v) => v >= val)) {
    return true;
  }

  return false;
};

export function work(input: string): number {
  const lines = input.split('\n');

  const forest: number[][] = [];

  lines.map((line) => {
    const row: number[] = [];
    line.split('').map((tree) => {
      row.push(Number(tree));
    });
    forest.push(row);
  });

  let visible = 0;
  forest.map((row, x) => {
    row.map((_column, y) => {
      if (isEdge(forest, x) || isEdge(row, y)) {
        visible++;
      } else {
        if (isGreatestFromAnyAngle(forest, x, y)) {
          visible++;
        }
      }
    });
  });

  return visible;
}

const viewableTrees = (map: number[][], xCoord: number, yCoord: number): number => {
  const val = map[xCoord][yCoord];
  const left = map[xCoord].slice(0, yCoord);
  const right = map[xCoord].slice(yCoord + 1);

  let viewable = 0;
  for (let i = left.length - 1; i >= 0; i--) {
    viewable++;
    if (left[i] >= val) {
      break;
    }
  }

  let score = viewable;
  viewable = 0;
  for (let i = 0; i < right.length; i++) {
    viewable++;
    if (right[i] >= val) {
      break;
    }
  }

  const up: number[] = [];
  const down: number[] = [];
  for (let i = 0; i < map.length; i++) {
    if (i < xCoord) {
      up.push(map[i][yCoord]);
    } else if (i > xCoord) {
      down.push(map[i][yCoord]);
    }
  }

  score *= viewable;
  viewable = 0;
  for (let i = up.length - 1; i >= 0; i--) {
    viewable++;
    if (up[i] >= val) {
      break;
    }
  }

  score *= viewable;
  viewable = 0;
  for (let i = 0; i < down.length; i++) {
    viewable++;
    if (down[i] >= val) {
      break;
    }
  }

  score *= viewable;

  return score;
};

export function work2(input: string): number {
  const lines = input.split('\n');

  const forest: number[][] = [];

  lines.map((line) => {
    const row: number[] = [];
    line.split('').map((tree) => {
      row.push(Number(tree));
    });
    forest.push(row);
  });

  let bestVisibility = 0;
  forest.map((row, y) => {
    row.map((_column, x) => {
      // ignore edges
      if (!isEdge(forest, x) && !isEdge(row, y)) {
        const viewability = viewableTrees(forest, x, y);
        if (bestVisibility < viewability) {
          bestVisibility = viewability;
        }
      }
    });
  });

  return bestVisibility;
}
