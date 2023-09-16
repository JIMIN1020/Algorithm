// 배열을 stack처럼 사용 -> 피연산자, 연산자 따로 두고 계산에 활용
function solution(str) {
    const arr = str.split(" ");
    let opd = [];   // operand
    let op = [];    // operator
    arr.forEach((v) => isNaN(v) ? op.push(v) : opd.push(parseInt(v))); // 연산자, 피연산자 각각 담기
    
    // 꺼낼 때는 앞에서 부터 차례로 꺼내서 계산
    while(opd.length !== 1) {
        let opd1 = opd.shift();
        let opd2 = opd.shift();
        let operator = op.shift();  // 연산자
        operator === "+" ? opd.unshift(opd1 + opd2) : opd.unshift(opd1 - opd2);
    }
    return opd[0];
}