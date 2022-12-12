import {
  add,
  equals,
  groupBy,
  indexOf,
  isEmpty,
  lensPath,
  map,
  minBy,
  over,
  pipe,
  reduce,
  values,
  valuesIn,
} from 'ramda';

const getHeightValue = (letter: string): number => {
  if (letter === 'S') {
    return 'a'.charCodeAt(0) - 97;
  } else if (letter === 'E') {
    return 'z'.charCodeAt(0) - 97;
  } else {
    return letter.charCodeAt(0) - 97;
  }
};

type Coord = [number, number];
type Grid<T> = T[][];

const left = over(lensPath<Coord, 1>([1]), add(-1));
const right = over(lensPath<Coord, 1>([1]), add(1));
const up = over(lensPath<Coord, 0>([0]), add(-1));
const down = over(lensPath<Coord, 0>([0]), add(1));

const validRange: (grid: number[][]) => (coord: Coord) => boolean =
  (grid) =>
  ([y, x]) =>
    x >= 0 && y >= 0 && y < grid.length && x < grid[0].length;

const getNeighbors = (grid: number[][], coord: Coord): Coord[] =>
  [left(coord), right(coord), up(coord), down(coord)].filter(validRange(grid));

const minBySteps = (xs: [Coord, number][]) =>
  reduce(
    minBy(([_, steps]) => steps),
    xs[0],
    xs,
  );

const find = <T>(grid: Grid<T>, value: T): Coord[] =>
  grid.flatMap((row, ridx) =>
    row.flatMap((col, cidx) => (col === value ? [[ridx, cidx] as Coord] : [])),
  );

const bfs = (
  grid: number[][],
  target: Coord,
  queue: [Coord, number][],
  visited = new Set<string>(),
): number => {
  if (isEmpty(queue)) return Number.MIN_SAFE_INTEGER;

  const stepsToTarget = queue
    .filter(([coord, _]) => equals(coord, target))
    .map(([_, steps]) => steps)
    .reduce((a, b) => Math.min(a, b), Number.MAX_SAFE_INTEGER);

  if (stepsToTarget !== Number.MAX_SAFE_INTEGER) return stepsToTarget;

  const visitedNext = new Set([...visited, ...queue.map(([coord, _]) => coord.toString())]);
  const valueAt = (coord: Coord) => grid[coord[0]][coord[1]];

  const nextQueue: [Coord, number][] = queue.flatMap(([current, steps]) =>
    getNeighbors(grid, current)
      .filter((coord) => !visitedNext.has(coord.toString()))
      .filter((coord) => valueAt(coord) <= valueAt(current) + 1)
      .map((coord) => [coord, steps + 1] as [Coord, number]),
  );
  const nextQueueByMinSteps: [Coord, number][] = pipe(
    groupBy<[Coord, number], string>(([coord, _]) => coord.toString()),
    values,
    map(minBySteps),
  )(nextQueue);

  return bfs(grid, target, nextQueueByMinSteps, visitedNext);
};

export function work(input: string): number {
  const map = input.split('\n');

  const grid: String[][] = [];
  const gridVal: number[][] = [];
  map.map((row) => {
    let gridValRow: number[] = [];
    let gridRow: string[] = [];
    row.split('').map((location) => {
      gridRow.push(location);
      gridValRow.push(getHeightValue(location));
    });
    gridVal.push(gridValRow);
    grid.push(gridRow);
  });

  const start = find(grid, 'S');
  const end = find(grid, 'E')[0];

  return bfs(gridVal, end, [[start[0], 0]]);
}

export function work2(input: string): number {
  const map = input.split('\n');

  const grid: String[][] = [];
  const gridVal: number[][] = [];
  map.map((row) => {
    let gridValRow: number[] = [];
    let gridRow: string[] = [];
    row.split('').map((location) => {
      gridRow.push(location);
      gridValRow.push(getHeightValue(location));
    });
    gridVal.push(gridValRow);
    grid.push(gridRow);
  });

  const start = find(grid, 'a');
  const end = find(grid, 'E')[0];

  return bfs(
    gridVal,
    end,
    start.map((coord) => [coord, 0]),
  );
}
