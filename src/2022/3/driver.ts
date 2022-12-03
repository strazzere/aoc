export function work(input: string): number {
  const packs = input.split('\n');

  let sum = 0;
  packs.forEach((pack) => {
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

export function work2(_input: string): number {
  return -1;
}
