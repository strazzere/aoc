import { work, work2 } from './driver';
import { expect } from 'chai';

import * as fs from 'fs';

describe('day 13', () => {
  describe('part 1', () => {
    it('can parse test inputs correctly', () => {
      const input = fs.readFileSync('./src/2022/12/test.txt', 'utf8');
      const underTest = work(input);
      const expected = 31;
      expect(underTest, 'should be identical').to.deep.equal(expected);
    });

    it('can parse input1 correctly', () => {
      const input = fs.readFileSync('./src/2022/12/input1.txt', 'utf8');
      const underTest = work(input);
      const expected = 361;
      expect(underTest, 'should be identical').to.deep.equal(expected);
    });
  });

  describe('part 2', () => {
    it('can parse test inputs correctly', () => {
      const input = fs.readFileSync('./src/2022/12/test.txt', 'utf8');
      const underTest = work2(input);
      const expected = 29;
      expect(underTest, 'should be identical').to.deep.equal(expected);
    });

    it('can parse input2 correctly', () => {
      const input = fs.readFileSync('./src/2022/12/input2.txt', 'utf8');
      const underTest = work2(input);
      const expected = 354;
      expect(underTest, 'should be identical').to.deep.equal(expected);
    });
  });
});
