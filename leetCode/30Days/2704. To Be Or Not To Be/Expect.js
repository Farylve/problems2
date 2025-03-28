/**
 * @param {string} val
 * @return {Object}
 */
var expect = function (val) {
    return {
        toBe: (toBeVal) => {
            if (val !== toBeVal) throw new Error("Not Equal");
            else return true;
        },
        notToBe: (notToBeVal) => {
            if (val === notToBeVal) throw new Error("Equal");
            else return true;
        },
    };
};

/**
 * expect(5).toBe(5); // true
 * expect(5).notToBe(5); // throws "Equal"
 */
