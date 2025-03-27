function scramble(str: string, arr: number[]): string {
    return arr.reduce((result, targetIndex, currentIndex) => {
        result[targetIndex] = str[currentIndex];
        return result;
    }, []).join('');
}

console.log(scramble('abcd', [0, 3, 1, 2])); // acdb
