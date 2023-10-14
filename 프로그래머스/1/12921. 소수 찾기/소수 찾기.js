function solution(n) {
    let num = Array(n).fill(0);
    let prime = [];
    
    // 2~n까지 num 배열에 저장
    for(let i = 2; i <= n; i++) {
        num[i] = i;
    }
    
    // 가장 작은 수를 prime에 넣고 그 배수 없애기
    for(let i = 2; i <= n; i++) {
        if(num[i] === 0) continue;
        prime.push(i);
        
        // 배수 없애기
        for(let j = i*2; j < num.length; j+=i){
            if(num[j] === 0) continue;
            num[j] = 0;
        }
    }
    return prime.length;
}