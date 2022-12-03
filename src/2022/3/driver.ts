export function work(input: string): number {
  const packs = input.split('\n');

  let sum = 0;
  packs.map((pack) => {
    const compartments = [pack.slice(0, pack.length / 2), pack.slice(pack.length / 2, pack.length)];

    compartments[0].split('').some((item) => {
      if (compartments[1].includes(item)) {
        sum += item.charCodeAt(0) - (item.charCodeAt(0) >= 97 ? 96 : 65 - 27);
        return true;
      }
      return false;
    });
  });

  return sum;
}

export function work2(input: string): number {
  const packs = input.split('\n');

  let sum = 0;
  packs.map((pack, index) => {
    if (index % 3 === 0) {
      pack.split('').some((item) => {
        if (packs[index + 1].includes(item) && packs[index + 2].includes(item)) {
          sum += item.charCodeAt(0) - (item.charCodeAt(0) >= 97 ? 96 : 65 - 27);
          return true;
        }
        return false;
      });
    }
  });

  return sum;
}
