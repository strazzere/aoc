import { head, sort, sum } from 'ramda';
import { isArray, isNumber } from 'ramda-adjunct';

type Group = {
  first: number | number[];
  second: number | number[];
};

const checkOrder = ([left, right]: [number | number[], number | number[]]): number => {
  if (isNumber(left) && isNumber(right)) {
    if (left === right) {
      return 0;
    } else if (left < right) {
      return 1;
    }
    return -1;
  }
  if (isArray(left) && isArray(right)) {
    if (left.length === 0 && right.length === 0) {
      return 0;
    }

    if (left.length === 0 || right.length === 0) {
      if (left.length === 0) {
        return 1;
      }
      return -1;
    }

    const headRes = checkOrder([head(left), head(right)]);
    if (headRes === 0) {
      return checkOrder([left.slice(1), right.slice(1)]);
    }

    return headRes;
  }

  if (isNumber(left) && isArray(right)) {
    return checkOrder([[left], right]);
  }

  if (isArray(left) && isNumber(right)) {
    return checkOrder([left, [right]]);
  }

  return -1;
};

export function work(input: string): number {
  const groupsInput = input.split('\n\n');
  const groups: Group[] = groupsInput.map((group) => {
    const [first, second] = group.split('\n').map((v) => JSON.parse(v.trim()));
    return { first, second };
  });

  return sum(
    groups.map((group, idx) => (checkOrder([group.first, group.second]) === 1 ? idx + 1 : 0)),
  );
}

export function work2(input: string): number {
  const targets = [[[2]], [[6]]];
  const groupsInput = input.split('\n\n');
  const groups: Group[] = groupsInput
    .flatMap((group) => {
      return group.split('\n').map((v) => JSON.parse(v.trim()));
    })
    .concat(targets);

  const sorted = sort(
    (a: number | number[], b: number | number[]) => (checkOrder([a, b]) === 1 ? -1 : 1),
    // @ts-ignore
    groups,
  );
  // @ts-ignore
  const indices = targets.map((target) => sorted.indexOf(target) + 1);
  return indices[0] * indices[1];
}
