function sortGrades(arr) {
    if (!arr.length) {
        return [];
    }
    const dict = {
        ['VB']: 0,
        ["V0+"]: 0.2,
    };

    const result = arr.sort((a, b) => {
        let prev = dict[a] ?? Number(a.split("V")[1]);
        console.log(prev);
        
        let next = dict[b] ?? Number(b.split("V")[1]);
        return prev - next;
    });
    return result;
}

console.log(sortGrades(["V7", "V12", "V1", "VB", "V0+", "V0"]));
