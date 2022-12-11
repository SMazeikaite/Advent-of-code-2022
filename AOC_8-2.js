const fs = require("fs");

fs.readFile("AOC_8_input.txt", (err, data) => {
    if (err) throw err;

    const input = data.toString().split('\r\n');
    const treesArray = input.map( el => el.split(''));
    const transposedArray = treesArray[0].map((_, colIndex) => treesArray.map(row => row[colIndex]).filter(n => n));

    const rowString = treesArray.map( el => el.join(''));
    const columnCtring = transposedArray.map( el => el.join(''));
    const forestSize = treesArray.length;

    let bestScenicScore = 0;
    for (let row = 0; row < forestSize; row++) {
        for (let col = 0; col < forestSize; col++) {
            if (row !== 0 && col !== 0 && row !== forestSize - 1 && col !== forestSize - 1) {
                let scenicRouteCounter = 0;

                const treeHeight = treesArray[row][col];
                const treeInARow = rowString[row];
                const treeInAColumn = columnCtring[col];

                const treesAtTheLeft = treeInARow.substring(0, col);
                const treesAtTheRight = treeInARow.substring(col+1, forestSize);
                const treesAtTheTop = treeInAColumn.substring(0, row);
                const treesAtTheBottom = treeInAColumn.substring(row+1, forestSize);

                scenicRouteCounter = canculateScenicRoute(treesAtTheLeft.split('').reverse(), treeHeight);
                scenicRouteCounter = canculateScenicRoute(treesAtTheRight.split(''), treeHeight) * scenicRouteCounter;
                scenicRouteCounter = canculateScenicRoute(treesAtTheTop.split('').reverse(), treeHeight) * scenicRouteCounter;
                scenicRouteCounter = canculateScenicRoute(treesAtTheBottom.split(''), treeHeight) * scenicRouteCounter;
                
                bestScenicScore = scenicRouteCounter > bestScenicScore ? scenicRouteCounter : bestScenicScore;
            }
        }
    }

    console.log('best scenic score:', bestScenicScore)
})

canculateScenicRoute = function(trees, treeHeight) {
    let counter = 0;
    trees.every(char => {
        if (char >= treeHeight) {
            counter++;
            return false;
        }
        counter++;
        return true;
    });
    return counter ?? counter;
}