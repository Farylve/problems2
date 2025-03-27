function deleteNth(arr: number[], n: number) {
    const map: { [key: string]: number } = {};
    return arr.reduce((acc: number[], el) => {

        map[el] = map[el] ? map[el] + 1 : 1;
        if (map[el] <= n) {
            acc.push(el);
        }
        return acc;
    }, [])
}

console.log(deleteNth([1, 1, 3, 3, 7, 2, 2, 2, 2], 3)); // , [1, 1, 3, 3, 7, 2, 2, 2]
