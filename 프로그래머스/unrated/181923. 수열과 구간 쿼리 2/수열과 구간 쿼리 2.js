function solution(arr, queries) {
    let answer = [];
    queries.forEach(([s, e, k]) => {
        let list = [...arr].slice(s, e+1);  // s ~ e 범위 잘라내기
        list = list.filter((v) => v > k);   // k보다 큰 값 필터링
        answer.push(list.length ? Math.min(...list) : -1);  // 최솟값 or -1 push
    })
    return answer;
}