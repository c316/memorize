import assert from 'assert';
import { getWeek } from '../miscFunctions';

describe('Dates', () => {
  describe('#getWeek()', () => {
    it('should return 1 for January 4th 2018', () => {
      assert.equal(1, getWeek(new Date('01 04 2017')));
    });
    it('should return 36 for September 6th 2017', () => {
      assert.equal(36, getWeek(new Date('09 06 2017')));
    });
    it('should return 41 for October 10th 1984', () => {
      assert.equal(41, getWeek(new Date('10 10 1984')));
    });
    it('should return 52 for the last week of the year', () => {
      assert.equal(52, getWeek(new Date('12 31 2017')));
    });
  });
});
