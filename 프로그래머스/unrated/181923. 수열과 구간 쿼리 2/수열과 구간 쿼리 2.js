function solution(arr, queries) {
    let answer = [];
    
    queries.forEach(([s, e, k]) => {
        let list = [...arr].slice(s, e+1);
        list = list.filter((v) => v > k);
        answer.push(list.length ? Math.min(...list) : -1);
    })
    
    return answer;
}