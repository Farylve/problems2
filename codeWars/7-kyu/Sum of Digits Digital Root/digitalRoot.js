function digitalRoot(n) {
    if (('' + n).length === 1) {
        return n;
    }
    var result = ('' + n).split('').reduce(function (ac, num) {
        return ac + Number(num);
    }, 0);
    return digitalRoot(result);
}
console.log(digitalRoot(456));
