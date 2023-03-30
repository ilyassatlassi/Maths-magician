import operate from './operate';

test('test operation function', () => {
  expect(operate(2, 5, '+')).toBe('7');
  expect(operate(5, 1, '-')).toBe('4');
  expect(operate(2, 2, 'x')).toBe('4');
  expect(operate(5, 5, '÷')).toBe('1');
  expect(operate(7, 2, '%')).toBe('1');
  expect(operate(10, 0, '÷')).toBe("Can't divide by 0.");
  expect(operate(1, 0, '%')).toBe("Can't find modulo as can't divide by 0.");
});
