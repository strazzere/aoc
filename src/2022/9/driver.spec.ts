/* eslint-disable prettier/prettier */
import { work, work2 } from './driver';
import { expect } from 'chai';

import * as fs from 'fs';

describe('day 9', () => {
  describe('part 1', () => {
    it('can parse test inputs correctly', () => {
      const input = fs.readFileSync('./src/2022/9/test.txt', 'utf8');
      const underTest = work(input);
      const expected = 13;
      expect(underTest, 'should be identical').to.deep.equal(expected);
    });

    it('can parse input1 correctly', () => {
      const input = fs.readFileSync('./src/2022/9/input1.txt', 'utf8');
      const underTest = work(input);
      const expected = 5907;
      expect(underTest, 'should be identical').to.deep.equal(expected);
    });
  });

  describe('part 2', () => {
    it('can parse test inputs correctly', () => {
      const input = fs.readFileSync('./src/2022/9/test2.txt', 'utf8');
      const underTest = work2(input);
      const expected = 36;
      expect(underTest, 'should be identical').to.deep.equal(expected);
    });

    it('can parse input2 correctly', () => {
      const input = fs.readFileSync('./src/2022/9/input2.txt', 'utf8');
      const underTest = work2(input);
      const expected = 2303;
      expect(underTest, 'should be identical').to.deep.equal(expected);
    });
  });
});
