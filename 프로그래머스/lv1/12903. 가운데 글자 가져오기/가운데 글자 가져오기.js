function solution(s) {
    let mid = (s.length - 1) / 2;
    return s.length % 2 === 0 ? s.substr(mid, 2) : s.substr(mid, 1);
}