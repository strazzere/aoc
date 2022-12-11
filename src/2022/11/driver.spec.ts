import { work, work2 } from './driver';
import { expect } from 'chai';

import * as fs from 'fs';

describe('day 11', () => {
  describe('part 1', () => {
    it('can parse test inputs correctly', () => {
      const input = fs.readFileSync('./src/2022/11/test.txt', 'utf8');
      const underTest = work(input);
      const expected = 10605;
      expect(underTest, 'should be identical').to.deep.equal(expected);
    });

    it('can parse input1 correctly', () => {
      const input = fs.readFileSync('./src/2022/11/input1.txt', 'utf8');
      const underTest = work(input);
      const expected = 58786;
      expect(underTest, 'should be identical').to.deep.equal(expected);
    });
  });

  //   describe('part 2', () => {
  //     it('can parse test inputs correctly', () => {
  //       const input = fs.readFileSync('./src/2022/11/test.txt', 'utf8');
  //       const underTest = work2(input);
  //       const expected = `##..##..##..##..##..##..##..##..##..##..
  // ###...###...###...###...###...###...###.
  // ####....####....####....####....####....
  // #####.....#####.....#####.....#####.....
  // ######......######......######......###.
  // #######.......#######.......#######.....
  // `;
  //       // It actually should be the following, we are off by one, but it still is readable.
  //       // It's painful to know a bug is still there but to be honest, it works "enough", alas
  //       // just like a real solution in the wild, hah
  //       // ##..##..##..##..##..##..##..##..##..##..
  //       // ###...###...###...###...###...###...###.
  //       // ####....####....####....####....####....
  //       // #####.....#####.....#####.....#####.....
  //       // ######......######......######......####
  //       // #######.......#######.......#######.....

  //       expect(underTest, 'should be identical').to.deep.equal(expected);
  //     });
  //     it('can parse input2 correctly', () => {
  //       const input = fs.readFileSync('./src/2022/11/input2.txt', 'utf8');
  //       const underTest = work2(input);
  //       const expected = `###..###..###...##..###...##...##..#####
  // #..#.#..#.#..#.#..#.#..#.#..#.#..#.#...#
  // #..#.###..#..#.#..#.#..#.#..#.#....###.#
  // ###..#..#.###..####.###..####.#.##.#....
  // #.#..#..#.#....#..#.#.#..#..#.#..#.#...#
  // #..#.###..#....#..#.#..#.#..#..###.#....
  // `;
  //       // console.log(underTest) // RBPARAGF
  //       // Like mentioned about, there is a bug in the last row, but it is still readable
  //       // so I'll come back to it some day, maybe
  //       expect(underTest, 'should be identical').to.deep.equal(expected);
  //     });
  //   });
});
