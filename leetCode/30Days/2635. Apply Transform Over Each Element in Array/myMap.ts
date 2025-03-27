/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */

var map = function (arr: number[], fn: Function): number[] {
    const resultArr: number[] = [];

    for (let i = 0; i < arr.length; i++) {
        resultArr[i] = fn(arr[i], i);
    }

    return resultArr;
};
