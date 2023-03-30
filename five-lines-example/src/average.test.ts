const sum = (arr: number[]) => {
    let answer = 0;

    for(let i = 0; i < arr.length; i++) {
        answer += arr[i];
    }

    return answer;
}

const size = (arr: number[]) => arr.length

const average = (arr: number[]) => {
    assertNotEmpty(arr);
    return sum(arr) / size(arr)    
}

function assertNotEmpty(arr: number[]) {
    if (size(arr) === 0) {
        throw "Empty array not allowed"
    }
}

test('average', () => {
    expect(average([1,2,3,4,5])).toBe(3);
})

test('assertNotEmpty', () => {
    expect(() => {
        assertNotEmpty([])
    }).toThrow("Empty array not allowed")
})
