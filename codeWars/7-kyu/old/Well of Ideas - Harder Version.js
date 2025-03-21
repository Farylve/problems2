function well(x) {
    let goodCount = 0;
    for (let i = 0; i < x.length; i++) {
        const currentArray = x[i];

    
        for (let j = 0; j < currentArray.length; j++) {
            const currentElem = currentArray[j];
            if (typeof currentElem !== "string") {
                continue;
            }

            if (currentElem.toLowerCase() === "good") {
                goodCount += 1;
            }
        }
    }
    console.log(goodCount);
    
    if (goodCount === 0) {
        return "Fail!";
    }
    if (goodCount <= 2) {
        return "Publish";
    }
    return "I smell a series!";
}

console.log(
    well([["bad"],[3,"bad","BAD"],["bad","BAD",6,16,"bAd","gOOd"]]
    )
);
