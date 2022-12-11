const fs = require("fs");

fs.readFile("AOC_5_input.txt", (err, data) => {
    if (err) throw err;

    const inputs = data.toString().split('\r\n\r\n');
    const stackInputs = inputs[0];
    const moveInputs = inputs[1].split('\r\n')

    let stacks = stackInputs.split('\r\n');
    let cratesArray = [];
    
    stacks.splice(-1);
    stacks.forEach((row) => {
        let crates = row.match(/.{1,4}/g);
        crates = crates.map(crate => crate.trim());
        cratesArray.push(crates);
    })

    let transposedStacksArray = cratesArray[0].map((_, colIndex) => cratesArray.map(row => row[colIndex]).filter(n => n));

    for (let i = 0; i < moveInputs.length; i++) {
        const move = moveInputs[i];
        const [stack, from, to] = move.match(/\s?[0-9]+\s?/g);
        for (let j = 1; j <= Number(stack); j++) {
            const popped = transposedStacksArray[from - 1].shift();
            if (popped) {
                transposedStacksArray[to - 1].unshift(popped);
            }
        }
    }

    let result = '';
    transposedStacksArray.forEach(arr => {
        result += arr[0][1];
    })

    console.log(result);
})
