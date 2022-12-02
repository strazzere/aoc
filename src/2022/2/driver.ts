export function work(input: string): number {
  const guide = input.split('\n');

  let sum = 0;
  guide.forEach((round, _index) => {
    const choices = round.split(' ');
    switch (choices[1]) {
      case 'X': // Rock
        sum += 1;
        switch (choices[0]) {
          case 'A': // Rock
            sum += 3;
            break;
          case 'B': // Paper
            sum += 0;
            break;
          case 'C': // Scissors
            sum += 6;
            break;
        }
        break;
      case 'Y': // Paper
        sum += 2;
        switch (choices[0]) {
          case 'A': // Rock
            sum += 6;
            break;
          case 'B': // Paper
            sum += 3;
            break;
          case 'C': // Scissors
            sum += 0;
            break;
        }
        break;
      case 'Z': // Scissors
        sum += 3;
        switch (choices[0]) {
          case 'A': // Rock
            sum += 0;
            break;
          case 'B': // Paper
            sum += 6;
            break;
          case 'C': // Scissors
            sum += 3;
            break;
        }
        break;
    }
  });

  return sum;
}

export function work2(input: string): number {
  const guide = input.split('\n');

  let sum = 0;
  guide.forEach((round, _index) => {
    const choices = round.split(' ');
    switch (choices[1]) {
      case 'X': // Lose
        sum += 0;
        switch (choices[0]) {
          case 'A': // Opponent Rock
            sum += 3; // Scissors
            break;
          case 'B': // Opponent Paper
            sum += 1; // Rock
            break;
          case 'C': // Opponent Scissors
            sum += 2; // Paper
            break;
        }
        break;
      case 'Y': // Draw
        sum += 3;
        switch (choices[0]) {
          case 'A': // Opponent Rock
            sum += 1; // Rock
            break;
          case 'B': // Opponent Paper
            sum += 2; // Paper
            break;
          case 'C': // Opponent Scissors
            sum += 3; // Scissors
            break;
        }
        break;
      case 'Z': // Win
        sum += 6;
        switch (choices[0]) {
          case 'A': // Opponent Rock
            sum += 2; // Paper
            break;
          case 'B': // Opponent Paper
            sum += 3; // Scissors
            break;
          case 'C': // Opponent Scissors
            sum += 1; // Rock
            break;
        }
        break;
    }
  });

  return sum;
}
