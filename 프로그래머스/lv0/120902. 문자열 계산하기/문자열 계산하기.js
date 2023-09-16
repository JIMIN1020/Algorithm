function solution(str) {
    const arr = str.split(" ");
    let opd = []; // operand
    let op = []; // operator
    arr.forEach((v) => isNaN(v) ? op.push(v) : opd.push(parseInt(v)));
    
    while(opd.length !== 1) {
        let opd1 = opd.shift();
        let opd2 = opd.shift();
        let operator = op.shift();
        
        operator === "+" ? opd.unshift(opd1 + opd2) : opd.unshift(opd1 - opd2);
    }
    return opd[0];
}