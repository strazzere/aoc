/* eslint-disable prettier/prettier */
import { work } from './driver';
import { expect } from 'chai';

import * as fs from 'fs';

describe('day 4', () => {
  describe('part 1', () => {
    it('can parse test inputs correctly', () => {
      const input = fs.readFileSync('./src/2022/5/test.txt', 'utf8');
      const underTest = work(input);
      const expected = 'CMZ';
      expect(underTest, 'should be identical').to.deep.equal(expected);
    });

    it('can parse input1 correctly', () => {
      const input = fs.readFileSync('./src/2022/5/input1.txt', 'utf8');
      const underTest = work(input);
      const expected = 'QNNTGTPFN';
      expect(underTest, 'should be identical').to.deep.equal(expected);
    });
  });
});
