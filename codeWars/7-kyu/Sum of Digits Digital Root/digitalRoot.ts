function digitalRoot(n: number) {
    if (('' + n).length === 1) {
        return n;
    }

    let result = ('' + n).split('').reduce((ac, num) => {
        return ac + Number(num);
    }, 0);

    return digitalRoot(result);
}

console.log(digitalRoot(456));
