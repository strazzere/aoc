enum Operation {
  MULTI = '*',
  DIV = '/',
  ADDITION = '+',
  SUBTRACTION = '-',
  POWER_TWO = '^',
}

class Monkey {
  items: number[];
  operation: Operation;
  operationNum: number;
  divisibleTest: number;
  toTrue: number;
  toFalse: number;

  inspected: number;
}

export function work(input: string): number {
  const instructions = input.split('\n');

  const monkeys: Monkey[] = [];

  let monkey: Monkey = undefined;
  instructions.map((instruction) => {
    if (instruction.includes('Monkey')) {
      monkey = new Monkey();
    } else if (instruction.includes('Starting items')) {
      monkey.items = instruction
        .slice(18)
        .split(', ')
        .map((val) => Number(val));
    } else if (instruction.includes('Operation')) {
      const tmp = instruction.slice(23).split(' ');
      if (tmp[0] === Operation.MULTI && tmp[1] === 'old') {
        monkey.operation = Operation.POWER_TWO;
        monkey.operationNum = 2;
      } else {
        switch (tmp[0]) {
          case Operation.MULTI:
            monkey.operation = Operation.MULTI;
            break;
          case Operation.DIV:
            monkey.operation = Operation.DIV;
            break;
          case Operation.ADDITION:
            monkey.operation = Operation.ADDITION;
            break;
          case Operation.SUBTRACTION:
            monkey.operation = Operation.SUBTRACTION;
            break;
          default:
            throw new Error('Unknown operation');
        }
        monkey.operationNum = Number(tmp[1]);
      }
    } else if (instruction.includes('Test:')) {
      monkey.divisibleTest = Number(instruction.slice(21));
    } else if (instruction.includes('If true:')) {
      monkey.toTrue = Number(instruction.split(' ').at(-1));
    } else if (instruction.includes('If false:')) {
      monkey.toFalse = Number(instruction.split(' ').at(-1));
    } else {
      monkey.inspected = 0;
      monkeys.push(monkey);
    }
  });

  const rounds = 20;
  for (let i = 0; i < rounds; i++) {
    monkeys.map((monkey) => {
      monkey.items.map((item) => {
        monkey.inspected++;
        switch (monkey.operation) {
          case Operation.ADDITION:
            item = item + monkey.operationNum;
            break;
          case Operation.SUBTRACTION:
            item -= monkey.operationNum;
            break;
          case Operation.DIV:
            item /= monkey.operationNum;
            break;
          case Operation.MULTI:
            item *= monkey.operationNum;
            break;
          case Operation.POWER_TWO:
            item *= item;
            break;
          default:
            throw new Error('Unknown Operation');
        }
        item = Math.floor(item / 3);

        let to = monkey.toFalse;
        if (item % monkey.divisibleTest === 0) {
          to = monkey.toTrue;
        }

        monkeys[to].items.push(item);
      });
      monkey.items = [];
    });
  }

  const topMonkeys = monkeys.sort((x, y) => y.inspected - x.inspected).slice(0, 2);

  return topMonkeys[0].inspected * topMonkeys[1].inspected;
}

const gcdOverTwo = (x = 0, y = 0): number => {
  x = Math.abs(x);
  y = Math.abs(y);
  while (y) {
    const t = y;
    y = x % y;
    x = t;
  }
  return x;
};

const gcd = (x?: number | number[], y?: number): number =>
  Array.isArray(x) ? x.reduce((a, n) => gcdOverTwo(a, n), 1) : gcdOverTwo(x, y);

const lcmOverTwo = (x?: number, y?: number): number =>
  !x || !y ? 0 : Math.abs((x * y) / gcd(x, y));

const lcm = (x?: number | number[], y?: number): number =>
  Array.isArray(x) ? x.reduce((a, n) => lcmOverTwo(a, n), 1) : lcmOverTwo(x, y);

export function work2(input: string): number {
  const instructions = input.split('\n');

  const monkeys: Monkey[] = [];

  let monkey: Monkey = undefined;
  instructions.map((instruction) => {
    if (instruction.includes('Monkey')) {
      monkey = new Monkey();
    } else if (instruction.includes('Starting items')) {
      monkey.items = instruction
        .slice(18)
        .split(', ')
        .map((val) => Number(val));
    } else if (instruction.includes('Operation')) {
      const tmp = instruction.slice(23).split(' ');
      if (tmp[0] === Operation.MULTI && tmp[1] === 'old') {
        monkey.operation = Operation.POWER_TWO;
        monkey.operationNum = 2;
      } else {
        switch (tmp[0]) {
          case Operation.MULTI:
            monkey.operation = Operation.MULTI;
            break;
          case Operation.DIV:
            monkey.operation = Operation.DIV;
            break;
          case Operation.ADDITION:
            monkey.operation = Operation.ADDITION;
            break;
          case Operation.SUBTRACTION:
            monkey.operation = Operation.SUBTRACTION;
            break;
          default:
            throw new Error('Unknown operation');
        }
        monkey.operationNum = Number(tmp[1]);
      }
    } else if (instruction.includes('Test:')) {
      monkey.divisibleTest = Number(instruction.slice(21));
    } else if (instruction.includes('If true:')) {
      monkey.toTrue = Number(instruction.split(' ').at(-1));
    } else if (instruction.includes('If false:')) {
      monkey.toFalse = Number(instruction.split(' ').at(-1));
    } else {
      monkey.inspected = 0;
      monkeys.push(monkey);
    }
  });

  const lowestCommon: number = lcm(monkeys.map((monkey) => monkey.divisibleTest));

  const rounds = 10000;
  for (let i = 0; i < rounds; i++) {
    monkeys.map((monkey) => {
      monkey.items.map((item) => {
        monkey.inspected++;
        switch (monkey.operation) {
          case Operation.ADDITION:
            item += monkey.operationNum;
            break;
          case Operation.SUBTRACTION:
            item -= monkey.operationNum;
            break;
          case Operation.DIV:
            item /= monkey.operationNum;
            break;
          case Operation.MULTI:
            item *= monkey.operationNum;
            break;
          case Operation.POWER_TWO:
            item = Math.pow(item, 2);
            break;
          default:
            throw new Error('Unknown Operation');
        }

        let to = monkey.toFalse;
        if (item % monkey.divisibleTest === 0) {
          to = monkey.toTrue;
        }

        monkeys[to].items.push(item % lowestCommon);
      });
      monkey.items = [];
    });
  }

  const topMonkeys = monkeys.sort((x, y) => y.inspected - x.inspected).slice(0, 2);

  return topMonkeys[0].inspected * topMonkeys[1].inspected;
}
