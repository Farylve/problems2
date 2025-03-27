function findShort(s) {
    var wordArr = s.split(' ');
    var resultLen = wordArr[0].length;
    wordArr.forEach(function (word) { return (resultLen = resultLen > word.length ? word.length : resultLen); });
    return resultLen;
}
console.log(findShort('bitcoin take over the world maybe who knows perhaps'));
