class ArrayMinimum {
    private processor: MinimumProcessor;
    constructor(private accumulator: number) {
        this.processor = new MinimumProcessor();
  }
  
  process(arr:number[]) {
  	for (let i = 0; i < arr.length; i++) {
      this.processElement(arr[i]);
    }
    return this.accumulator;
  }

    processElement(e: number) {
        this.processor.processElement(e);
    }
}

class ArraySum {
    private processor: SumProcessor;
	constructor(private accumulator: number) {
        this.processor = new SumProcessor();
  }
  
  process(arr:number[]) {
  	for (let i = 0; i < arr.length; i++) {
      this.processElement(arr[i]);
    }
    return this.accumulator;
  }

    private processElement(i: number) {
        this.accumulator += i;
    }
}

class MinimumProcessor {
    processElement(e: number) {
        if (this.accumulator > e) {
            this.accumulator = e;
        }
    }
}

class SumProcessor {
    processElement(e: number) {
        this.accumulator += e;
    }
}


test('ArrayMinimum', () => {
    const arr = new ArrayMinimum(100)
    expect(arr.process([1,2,3,4,5])).toBe(1);
})


test('ArraySum', () => {
    const arr = new ArraySum(100)
    expect(arr.process([1,2,3,4,5])).toBe(115);
})