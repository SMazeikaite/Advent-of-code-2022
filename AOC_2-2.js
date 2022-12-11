const fs = require("fs");

const SCORES = {
    ROCK: 1,
    PAPER: 2,
    SCISSORS: 3,
    WIN: 6,
    DRAW: 3,
    LOSE: 0
}

fs.readFile("AOC_2_input.txt", (err, data) => {
    if (err) throw err;

    const rounds = data.toString().split('\r\n');

    let totalSum = 0;
    rounds.forEach(round => {
        const signs = round.split(' ');
        
        let roundSum = 0;
        const opponentsMove = signs[0];
        const moveResult = signs[1];
        switch(moveResult) {
            case 'X': 
                roundSum += getScoreIfLost(opponentsMove);
                break;
            case 'Y': 
                roundSum += getScoreIfDraw(opponentsMove);
                break;
            case 'Z': 
                roundSum += getScoreIfWon(opponentsMove);
                break;
        }
        totalSum += roundSum;
    });

    console.log(totalSum);

});

getScoreIfWon = function(opponentsMove) {
    switch (opponentsMove) {
        case 'A': // rock
            return SCORES.WIN + SCORES.PAPER;
        case 'B': // paper
            return SCORES.WIN + SCORES.SCISSORS;
        case 'C': // scissors
            return SCORES.WIN + SCORES.ROCK;
    }
}

getScoreIfDraw = function(opponentsMove) {
    switch (opponentsMove) {
        case 'A': // rock
            return SCORES.DRAW + SCORES.ROCK;
        case 'B': // paper
            return SCORES.DRAW + SCORES.PAPER;
        case 'C': // scissors
            return SCORES.DRAW + SCORES.SCISSORS;
    }
}

getScoreIfLost = function(opponentsMove) {
    switch (opponentsMove) {
        case 'A': // rock
            return SCORES.LOSE + SCORES.SCISSORS;
        case 'B': // paper
            return SCORES.LOSE + SCORES.ROCK;
        case 'C': // scissors
            return SCORES.LOSE + SCORES.PAPER;
    }
}