function sum (n1: number, n2: number) {
    return n1 + n2
}

const number1 = 5;
const number2 = 2.8;

test('add',() => {
    expect(sum(number1, number2)).toBe(7.8);
})
