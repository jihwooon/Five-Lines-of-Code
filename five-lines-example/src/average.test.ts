const sum = (arr: number[]) => {
    let answer = 0;

    for(let i = 0; i < arr.length; i++) {
        answer += arr[i];
    }

    return answer;
}

const size = (arr: number[]) => arr.length

const average = (arr: number[]) => {
    return sum(arr) / size(arr);
}

test('average', () => {
    expect(average([1,2,3,4,5])).toBe(3);
})
