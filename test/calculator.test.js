import Calculator from "../scripts/calculator";

test('sum 2 numbers', () => {
    const addition = Calculator.sum(10, 10);
    expect(addition).toBeGreaterThanOrEqual(20);
    expect(addition).toBe(20);
})

test('subtract 2 numbers', () => {
    const sub = Calculator.subtract(5, 10);
    expect(sub).toBe(-5);
    expect(sub).toBeLessThan(0);
})

test('multiply 2 numbers', () => {
    const multi = Calculator.multiply(10, 10);
    expect(multi).toBe(100);
})

test('divide 2 numbres', () => {
    const div1 = Calculator.divide(10, 5);
    const div2 = Calculator.divide(10, 0);

    expect(div1).toBe(2);
    expect(div2).toMatch('Can\'t divide by 0.')
    expect(div2).toMatchInlineSnapshot(`"Can't divide by 0."`);
})