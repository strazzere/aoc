export function work(input: string): number {
  const assignments = input.split('\n');

  let sum = 0;
  assignments.map((assignment) => {
    const sections = assignment.split(',');
    if (sections[0] === sections[1]) {
      sum++;
    } else {
      const first = Number(sections[0].split('-')[1]) - Number(sections[0].split('-')[0]);
      const second = Number(sections[1].split('-')[1]) - Number(sections[1].split('-')[0]);
      const outside = first > second ? 0 : 1;
      const inside = first > second ? 1 : 0;
      if (
        Number(sections[outside].split('-')[0]) <= Number(sections[inside].split('-')[0]) &&
        Number(sections[outside].split('-')[1]) >= Number(sections[inside].split('-')[1])
      ) {
        sum++;
      }
    }
  });

  return sum;
}

export function work2(input: string): number {
  const assignments = input.split('\n');

  let sum = 0;
  assignments.map((assignment) => {
    const sections = assignment.split(',');
    if (sections[0] === sections[1]) {
      sum++;
    } else {
      const first = Number(sections[0].split('-')[1]) - Number(sections[0].split('-')[0]);
      const second = Number(sections[1].split('-')[1]) - Number(sections[1].split('-')[0]);
      const outside = first > second ? 0 : 1;
      const inside = first > second ? 1 : 0;
      if (
        Number(sections[outside].split('-')[0]) <= Number(sections[inside].split('-')[0]) &&
        Number(sections[outside].split('-')[1]) >= Number(sections[inside].split('-')[0])
      ) {
        sum++;
      } else if (
        Number(sections[outside].split('-')[0]) <= Number(sections[inside].split('-')[1]) &&
        Number(sections[outside].split('-')[1]) >= Number(sections[inside].split('-')[1])
      ) {
        sum++;
      }
    }
  });

  return sum;
}
