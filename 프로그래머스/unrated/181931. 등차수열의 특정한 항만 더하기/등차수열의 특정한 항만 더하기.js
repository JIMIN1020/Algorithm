function solution(a, d, included) {
    let sum = 0;
    
    // 등차수열 배열 만들기
    let num = a;
    for (let i = 0; i < included.length; i++) {
        included[i] ? sum += num : "";
        num += d;
    }
    
    return sum;
}