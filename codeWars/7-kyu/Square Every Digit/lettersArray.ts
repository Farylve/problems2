function squareDigits(num: number): number {
    const lettersArray = ('' + num).split('');
    const res = lettersArray.map((letter) => Number(letter) * Number(letter) + '');
    return Number(res.join(''));
}
