const fs = require("fs");

fs.readFile("AOC_4_input.txt", (err, data) => {
    if (err) throw err;

    const input = data.toString();
    const pairs = input.split('\r\n');
    
    let count = 0;
    pairs.forEach(pair => {
        const ranges = pair.split(',');
        
        const r1_start = +ranges[0].split('-')[0];
        const r1_end = +ranges[0].split('-')[1];

        const r2_start = +ranges[1].split('-')[0];
        const r2_end = +ranges[1].split('-')[1];
        
        if ((r1_start >= r2_start && r1_end <= r2_end) || 
            (r2_start >= r1_start && r2_end <= r1_end)) {
                count++;
        }
    })
    console.log(count);

});