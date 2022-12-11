const fs = require("fs");

fs.readFile("AOC_3_input.txt", (err, data) => {
    if (err) throw err;

    const rucksacks = data.toString().split('\r\n');
    let total = 0;

    for (let i = 1; i < rucksacks.length + 1; i++) {
        if (i % 3 === 0) {
            total += findDuplicates(rucksacks[i-3], rucksacks[i-2], rucksacks[i-1]);;
        }
    }

    console.log(total);

})

getPositionInAlphabet = function(text) {
    const alphabetString = "abcdefghijklmnopqrstuvwxyz";
    const alphabet = alphabetString.split('');
    alphabet.push(...alphabetString.toUpperCase().split(''));
    return Number(text.split('').map(x => alphabet.indexOf(x) + 1));
}

findDuplicates = function (str1, str2, str3) {
    var result = 0;
    var types = "";
    for(let i in str1) {
        if (str2.includes(str1[i]) && str3.includes(str1[i]) && !types.includes(str1[i])) {
            console.log('includes ', str1[i]);
            types += str1[i];
            result += getPositionInAlphabet(str1[i]);
        }
    }
    return result;
}
