function scramble(str, arr) {
    var result = [];
    for (var i = 0; i < str.length; i++) {
        result[arr[i]] = str[i];
    }
    return result.join('');
}

console.log(scramble('abcd', [0,3,1,2])); // acdb
