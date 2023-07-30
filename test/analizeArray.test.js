import analizeArray from "../scripts/analizeArray";

test('check average value in array ', () => {
    const average = analizeArray([1,8,3,4,2,6]).Average;
    expect(average).toBe(4);
})

test('check max value in array', () => {
    const max = analizeArray([1,8,3,4,2,6]).Max;
    expect(max).toBe(8);
})

test('check min value in array', () => {
    const min = analizeArray([1,8,3,4,2,6]).Min;
    expect(min).toBe(1);
})

test('check legth of array', () => {
    const length = analizeArray([1,8,3,4,2,6]).Length;
    expect(length).toBe(6);
})
