const fs = require("fs");

fs.readFile("AOC_8_input.txt", (err, data) => {
    if (err) throw err;

    const input = data.toString().split('\r\n');
    const treesArray = input.map( el => el.split(''));
    const transposedArray = treesArray[0].map((_, colIndex) => treesArray.map(row => row[colIndex]).filter(n => n));

    const rowString = treesArray.map( el => el.join(''));
    const columnCtring = transposedArray.map( el => el.join(''));
    const forestSize = treesArray.length;

    let counter = 0;
    for (let row = 0; row < forestSize; row++) {
        for (let col = 0; col < forestSize; col++) {
            if (row === 0 || col === 0 || row === forestSize - 1 || col === forestSize - 1) {
                counter++;
            } else {
                const treeHeight = treesArray[row][col];
                const treeInARow = rowString[row];
                const treeInAColumn = columnCtring[col];

                const treesAtTheLeft = treeInARow.substring(0, col);
                const treesAtTheRight = treeInARow.substring(col+1, forestSize);
                const treesAtTheTop = treeInAColumn.substring(0, row);
                const treesAtTheBottom = treeInAColumn.substring(row+1, forestSize);

                const visibleFromLeft = treesAtTheLeft.split('').filter(char => char >= treeHeight).length === 0;
                const visibleFromRight = treesAtTheRight.split('').filter(char => char >= treeHeight).length === 0;
                const visibleFromTop = treesAtTheTop.split('').filter(char => char >= treeHeight).length === 0;
                const visibleFromBottom = treesAtTheBottom.split('').filter(char => char >= treeHeight).length === 0;

                if (visibleFromLeft || visibleFromRight || visibleFromTop || visibleFromBottom) {
                    counter++;
                }
            }
        }
    }

    console.log('counter:', counter)
})