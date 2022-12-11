const fs = require("fs");

fs.readFile("AOC_3_input.txt", (err, data) => {
    if (err) throw err;

    const rucksacks = data.toString().split('\r\n');
    let total = 0;

    rucksacks.forEach(rucksack => {
        const indexOfHalfRucksack = rucksack.length / 2;
        const compartment1 = rucksack.substring(0, indexOfHalfRucksack);
        const compartment2 = rucksack.substring(indexOfHalfRucksack, rucksack.length);

        total += findDuplicates(compartment1, compartment2);

    });

    console.log(total);

})

getPositionInAlphabet = function(text) {
    const alphabetString = "abcdefghijklmnopqrstuvwxyz";
    const alphabet = alphabetString.split('');
    alphabet.push(...alphabetString.toUpperCase().split(''));
    return Number(text.split('').map(x => alphabet.indexOf(x) + 1));
}

findDuplicates = function (str1, str2) {
    var result = 0;
    var types = "";
    for(let i in str1) {
        if (str2.includes(str1[i]) && !types.includes(str1[i])) {
            types += str1[i];
            result += getPositionInAlphabet(str1[i]);
        }
    }
    return result;
}