const reportPrimes = (n: number) => {
    for(let i = 2; i < n; i++) {
        reportIfPrime(i);
    }
}

const isPrime = (n: number) => {
    return true;
}

function reportIfPrime(i: number) {
    if (isPrime(i)) {
        console.log(`${i}i is prime`);
    }
}

// test('reportPrimes', () => {
//     expect(reportPrimes(5)).toBe(2);
// })
