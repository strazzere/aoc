

/* eslint-disable prettier/prettier */
import { work, work2 } from './driver';
import { expect } from 'chai';

import * as fs from 'fs';

describe('day 6', () => {
  describe('part 1', () => {
    it('can parse test inputs correctly', () => {
      expect(work('mjqjpqmgbljsphdztnvjfqwrcgsmlb'), 'should be identical').to.deep.equal(7);
      expect(work('bvwbjplbgvbhsrlpgdmjqwftvncz'), 'should be identical').to.deep.equal(5);
      expect(work('nppdvjthqldpwncqszvftbrmjlhg'), 'should be identical').to.deep.equal(6);
      expect(work('nznrnfrfntjfmvfwmzdfjlvtqnbhcprsg'), 'should be identical').to.deep.equal(10);
      expect(work('zcfzfwzzqfrljwzlrfnpqdbhtmscgvjw'), 'should be identical').to.deep.equal(11);
    });

    it('can parse input1 correctly', () => {
      const input = fs.readFileSync('./src/2022/6/input1.txt', 'utf8');
      const underTest = work(input);
      const expected = 1760;
      expect(underTest, 'should be identical').to.deep.equal(expected);
    });
  });

  describe('part 2', () => {
    it('can parse test inputs correctly', () => {
      expect(work2('mjqjpqmgbljsphdztnvjfqwrcgsmlb'), 'should be identical').to.deep.equal(19);
      expect(work2('bvwbjplbgvbhsrlpgdmjqwftvncz'), 'should be identical').to.deep.equal(23);
      expect(work2('nppdvjthqldpwncqszvftbrmjlhg'), 'should be identical').to.deep.equal(23);
      expect(work2('nznrnfrfntjfmvfwmzdfjlvtqnbhcprsg'), 'should be identical').to.deep.equal(29);
      expect(work2('zcfzfwzzqfrljwzlrfnpqdbhtmscgvjw'), 'should be identical').to.deep.equal(26);
    });

    it('can parse input2 correctly', () => {
      const input = fs.readFileSync('./src/2022/6/input2.txt', 'utf8');
      const underTest = work2(input);
      const expected = 2974;
      expect(underTest, 'should be identical').to.deep.equal(expected);
    });
  });
});
