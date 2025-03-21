var createCounter = function (n: number): Function {
    return function () {
        return n++;
    };
};

const counterN = createCounter(10);
console.log(counterN()); // 10
console.log(counterN()); // 11
console.log(counterN()); // 12
