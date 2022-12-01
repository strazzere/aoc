/* eslint-disable prettier/prettier */
import { work, workRedo, work2, work2Redo } from './driver';
import { expect } from 'chai';

import * as fs from 'fs';

describe('day 1', () => {
  describe('part 1', () => {
    describe('pass 1', () => {
      it('can parse test inputs correctly', () => {
        const input = fs.readFileSync('./src/2022/1/test.txt', 'utf8');
        const underTest = work(input);
        const expected = 24000;
        expect(underTest, 'should be identical').to.deep.equal(expected);
      });

      it('can parse input1 correctly', () => {
        const input = fs.readFileSync('./src/2022/1/input1.txt', 'utf8');
        const underTest = work(input);
        const expected = 70613;
        expect(underTest, 'should be identical').to.deep.equal(expected);
      });
    });

    describe('redo for clean code', () => {
      it('can parse test inputs correctly', () => {
        const input = fs.readFileSync('./src/2022/1/test.txt', 'utf8');
        const underTest = workRedo(input);
        const expected = 24000;
        expect(underTest, 'should be identical').to.deep.equal(expected);
      });

      it('can parse input1 correctly', () => {
        const input = fs.readFileSync('./src/2022/1/input1.txt', 'utf8');
        const underTest = workRedo(input);
        const expected = 70613;
        expect(underTest, 'should be identical').to.deep.equal(expected);
      });
    });
  });

  describe('part 2', () => {
    describe('pass 1', () => {
      it('can parse test inputs correctly', () => {
        const input = fs.readFileSync('./src/2022/1/test.txt', 'utf8');
        const underTest = work2(input);
        const expected = 45000;
        expect(underTest, 'should be identical').to.deep.equal(expected);
      });

      it('can parse input2 correctly', () => {
        const input = fs.readFileSync('./src/2022/1/input2.txt', 'utf8');
        const underTest = work2(input);
        const expected = 205805;
        expect(underTest, 'should be identical').to.deep.equal(expected);
      });
    });

    describe('pass 2, redo for clean code', () => {
      it('can parse test inputs correctly', () => {
        const input = fs.readFileSync('./src/2022/1/test.txt', 'utf8');
        const underTest = work2Redo(input);
        const expected = 45000;
        expect(underTest, 'should be identical').to.deep.equal(expected);
      });

      it('can parse input2 correctly', () => {
        const input = fs.readFileSync('./src/2022/1/input2.txt', 'utf8');
        const underTest = work2Redo(input);
        const expected = 205805;
        expect(underTest, 'should be identical').to.deep.equal(expected);
      });
    });
  });
});
