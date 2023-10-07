function solution(t, p) {
    let list = [];
    let len = p.length;
    
    let i = 0;
    while (i+len <= t.length) {
        list.push(t.slice(i, i+len));
        i++;
    }
    return list.filter((v) => v <= p).length;
}