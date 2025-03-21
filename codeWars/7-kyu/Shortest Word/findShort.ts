


function findShort(s: string): number {
    const wordArr = s.split(' ');
    let resultLen = wordArr[0].length;
    wordArr.forEach((word) => (resultLen = resultLen > word.length ? word.length : resultLen));
    return resultLen;
}

console.log(findShort('bitcoin take over the world maybe who knows perhaps'));
