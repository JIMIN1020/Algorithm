function solution(s) {
    let check = /^[0-9]+$/;
    return (s.length === 4 || s.length === 6) && check.test(s) ? true : false;
}