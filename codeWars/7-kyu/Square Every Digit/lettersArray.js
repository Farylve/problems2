function squareDigits(num) {
    var lettersArray = ('' + num).split('');
    var res = lettersArray.map(function (letter) { return Number(letter) * Number(letter) + ''; });
    return Number(res.join(''));
}
