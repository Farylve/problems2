function validName(array) {
    const { length } = array;
    console.log(length);

    if (length === 0) {
        return "You must test at least one name.";
    }
    if (length === 1) {
        return "Congratulations, you can choose any name you like!";
    }
    for (let i = 1; i < length; i++) {
        const prevNameLastLetter = array[i - 1].at(-1);
        console.log(prevNameLastLetter);
        const currNameFirstLetter = array[i][0];
     
        if (prevNameLastLetter.toUpperCase() !== currNameFirstLetter) {
            return "Back to the drawing board, your baby names are not compatible.";
        }
    }

    return "Congratulations, your baby names are compatible!";
}

console.log(validName(["Cruz", "Zuma"]));
