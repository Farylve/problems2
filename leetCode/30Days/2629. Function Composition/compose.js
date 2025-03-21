/**
 * @param {Function[]} functions
 * @return {Function}
 */
var compose = function (functions, x) {
    const res = functions.reduceRight((acc, func) => { 
        return func(acc);
    }, x);
    console.log(res);

    return res;
};

const fn = compose([(x) => x + 1, (x) => 2 * x], 4);
// 9
console.log(fn);
