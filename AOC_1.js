const fs = require("fs");

fs.readFile("AOC_1_input.txt", (err, data) => {
    if (err) throw err;

    const inputs = data.toString().split('\r\n');
    let elfCalories = [];
    let currentElfCalories = 0;
    let elfCounter = 0;
    inputs.forEach(i => {
        if (i === '') {
            elfCalories[elfCounter] = currentElfCalories;
            currentElfCalories = 0;
            elfCounter++;
            return;
        }

        const calories = Number(i);
        currentElfCalories += calories;

    });

    elfCalories.sort((a, b) => b - a);

    // Part 1 - most calories held
    console.log(Math.max(...elfCalories));

    // Part 2 - top three elves carrying most calories
    console.log(elfCalories[0] + elfCalories[1] + elfCalories[2]);

});