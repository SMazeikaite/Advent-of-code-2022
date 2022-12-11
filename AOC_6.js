const fs = require("fs");

fs.readFile("AOC_6_input.txt", (err, data) => {
    if (err) throw err;

    const input = data.toString();

    let marker = [];
    let markerEndIndex = 0;
    const CHARACTER_COUNT = 14;

    input.split('').every((letter, index) => {
        if (marker.length === CHARACTER_COUNT) {
            markerEndIndex = index;
            return false;
        }
        if (marker.includes(letter)) {
            const index = marker.indexOf(letter) + 1;
            for (let i = 0; i < index; i++) {
                marker.shift();
            }
        }
        marker.push(letter);
        return true;
    })

   console.log(markerEndIndex);

})