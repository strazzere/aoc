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

  describe('part 2', () => {
    it('can parse test inputs correctly', () => {
      const input = fs.readFileSync('./src/2022/11/test.txt', 'utf8');
      const underTest = work2(input);
      const expected = 2713310158;
      expect(underTest, 'should be identical').to.deep.equal(expected);
    });

    it('can parse input2 correctly', () => {
      const input = fs.readFileSync('./src/2022/11/input2.txt', 'utf8');
      const underTest = work2(input);
      const expected = 14952185856;
      expect(underTest, 'should be identical').to.deep.equal(expected);
    });
  });
});
