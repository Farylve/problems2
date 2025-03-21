function scramble(str, arr) {
    var result = [];
    for (var i = 0; i < str.length; i++) {
        result[arr[i]] = str[i];
    }
    return result.join('');
}
