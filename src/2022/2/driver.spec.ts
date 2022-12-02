/* eslint-disable prettier/prettier */
import { work, work2 } from './driver';
import { expect } from 'chai';

import * as fs from 'fs';

describe('day 2', () => {
  describe('part 1', () => {
    it('can parse test inputs correctly', () => {
      const input = fs.readFileSync('./src/2022/2/test.txt', 'utf8');
      const underTest = work(input);
      const expected = 15;
      expect(underTest, 'should be identical').to.deep.equal(expected);
    });

    it('can parse input1 correctly', () => {
      const input = fs.readFileSync('./src/2022/2/input1.txt', 'utf8');
      const underTest = work(input);
      const expected = 11063;
      expect(underTest, 'should be identical').to.deep.equal(expected);
    });
  });

  describe('part 2', () => {
    it('can parse test inputs correctly', () => {
      const input = fs.readFileSync('./src/2022/2/test.txt', 'utf8');
      const underTest = work2(input);
      const expected = 12;
      expect(underTest, 'should be identical').to.deep.equal(expected);
    });

    it('can parse input2 correctly', () => {
      const input = fs.readFileSync('./src/2022/2/input2.txt', 'utf8');
      const underTest = work2(input);
      const expected = 10349;
      expect(underTest, 'should be identical').to.deep.equal(expected);
    });
  });
});
