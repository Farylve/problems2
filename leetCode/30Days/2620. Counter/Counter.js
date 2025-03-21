var createCounter = function (n) {
    return function () {
        return n++;
    };
};
var counterN = createCounter(10);
console.log(counterN()); // 10
console.log(counterN()); // 11
console.log(counterN()); // 12
