const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', function (line) {
    input = [...line];
}).on('close',function(){
    input = input.map((v) => v === v.toUpperCase() ? v.toLowerCase() : v.toUpperCase());
    console.log(input.join(""));
});