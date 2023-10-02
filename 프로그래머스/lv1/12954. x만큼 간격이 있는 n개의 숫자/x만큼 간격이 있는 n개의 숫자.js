function solution(x, n) {
    let list = [];
    for (let i = 1; i <= n; i++) {
        list.push(i * x);
    }
    return list;
}