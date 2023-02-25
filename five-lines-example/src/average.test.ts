const sum = (arr: number[]) => {
    let answer = 0;

    for(let i = 0; i < arr.length; i++) {
        answer += arr[i];
    }

    return answer;
}

const average = (arr: number[]) => {
    return sum(arr) / arr.length;
}

test('average', () => {
    expect(average([1,2,3,4,5])).toBe(3);
})
