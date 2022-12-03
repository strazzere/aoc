/* eslint-disable prettier/prettier */
import { work, work2 } from './driver';
import { expect } from 'chai';

import * as fs from 'fs';

describe('day 3', () => {
  describe('part 1', () => {
    it('can parse test inputs correctly', () => {
      const input = fs.readFileSync('./src/2022/3/test.txt', 'utf8');
      const underTest = work(input);
      const expected = 157;
      expect(underTest, 'should be identical').to.deep.equal(expected);
    });

    it('can parse input1 correctly', () => {
      const input = fs.readFileSync('./src/2022/3/input1.txt', 'utf8');
      const underTest = work(input);
      const expected = 8018;
      expect(underTest, 'should be identical').to.deep.equal(expected);
    });
  });

  describe('part 2', () => {
    it('can parse test inputs correctly', () => {
      const input = fs.readFileSync('./src/2022/3/test.txt', 'utf8');
      const underTest = work2(input);
      const expected = 70;
      expect(underTest, 'should be identical').to.deep.equal(expected);
    });

    it('can parse input2 correctly', () => {
      const input = fs.readFileSync('./src/2022/3/input2.txt', 'utf8');
      const underTest = work2(input);
      const expected = 2518;
      expect(underTest, 'should be identical').to.deep.equal(expected);
    });
  });
});
