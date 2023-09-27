const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', function (line) {
    input = line.split(' ');
}).on('close', function () {
    let n = input[0] * 1;
    n % 2 === 0 ? console.log(`${n} is even`) : console.log(`${n} is odd`);
});