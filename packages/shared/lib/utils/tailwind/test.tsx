import { sizeToClassName } from '.';

describe('tailwind', () => {
  describe('sizeToClassName', () => {
    it('converts size to className dimensions', () => {
      expect(sizeToClassName('xs')).toBe('h-6 w-6');
    });
  });
});
