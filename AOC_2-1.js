const fs = require("fs");

fs.readFile("AOC_2_input.txt", (err, data) => {
    if (err) throw err;

    const rounds = data.toString().split('\r\n');

    let totalSum = 0;
    rounds.forEach(round => {
        const signs = round.split(' ');
        
        let roundSum = 0;
        const opponentsMove = signs[0];
        const myMove = signs[1];
        switch(myMove) {
            case 'X': 
                roundSum = 1;
                if (opponentsMove === 'C') roundSum += 6; 
                if (opponentsMove === 'A') roundSum += 3; 
                break;
            case 'Y': 
                roundSum = 2;
                if (opponentsMove === 'A') roundSum += 6; 
                if (opponentsMove === 'B') roundSum += 3; 
                break;
            case 'Z': 
                roundSum = 3;
                if (opponentsMove === 'B') roundSum += 6; 
                if (opponentsMove === 'C') roundSum += 3; 
                break;
        }
        totalSum += roundSum;
    });

    console.log(totalSum);

});