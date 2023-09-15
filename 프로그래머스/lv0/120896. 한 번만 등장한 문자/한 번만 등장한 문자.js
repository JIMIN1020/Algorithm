// 문자를 객체로 저장해서 카운트 -> 카운트가 1인 key만 filtering
function solution(s) {
    let obj = {};
    [...s].forEach((v) => obj[v] !== undefined ? obj[v]++ : obj[v] = 1);
    return Object.keys(obj).filter((v) => obj[v] === 1).sort().join("");
}