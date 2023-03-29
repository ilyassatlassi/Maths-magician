import calculate from './calculate'

const object = {
    total: null,
    next: null,
    operation: null,
  };
  
  describe('test calculate', () => {
    test('when AC button is clicked, the result should be cleared', () => {
      const buttonName = 'AC';
      const obj = { ...object, next: '5' };
      const result = calculate(obj, buttonName);
      expect(result).toEqual(object);
    });
    test('when the button is = ', () => {
        const buttonName = '=';
        const obj = { total: '50', next: '50', operation: '+' };
        const result = calculate(obj, buttonName);
        expect(result).toEqual({ ...object, total: '100' });
      });
});