


function findShort(s: string): number {
    const wordArr = s.split(' ');
    return wordArr.reduce((len, word) => {
        return len = len > word.length ? word.length : len
    }, wordArr[0].length);
}

console.log(findShort('bitcoin take over the world maybe who knows perhaps'));
