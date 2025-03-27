function deleteNth(arr, n) {
    var map = {};
    var res = [];
    arr.forEach(function (el) {
        map[el] = map[el] ? map[el] + 1 : 1;
        if (map[el] <= n) {
            res.push(el);
        }
    });
    return res;
}
console.log(deleteNth([1, 1, 3, 3, 7, 2, 2, 2, 2], 3)); // , [1, 1, 3, 3, 7, 2, 2, 2]
