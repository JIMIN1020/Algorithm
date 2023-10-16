function solution(number, limit, power) {
    let count = [];
    
    // 약수 개수 구하기
    for (let i = 1; i <= number; i++) {
        let divisors = [];
        
        // 제곱근까지만 약수 구하기
        for (let j = 1; j <= Math.sqrt(i); j++) {
            if(i % j === 0) {
		        divisors.push(i);
                // 구한 약수로 나눈 수 = 또 다른 약수
		        if(i / j != j) divisors.push(i / j);
            }
        }
        count.push(divisors.length);
    }
    
    return count.map((v) => v > limit ? power : v).reduce((a, c) => a + c);
}