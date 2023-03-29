import operate from './operate'

test('test opearation function',() => {
    expect(operate(3, 9, '+')).toBe('12');
})