function solution(brown, yellow) {
    let size = 0;
    let carpet = brown + yellow;
    let divisors = [];
    
    // 약수 구하기
    for(let i = 1 ; i <= Math.sqrt(carpet) ; i++){
	    if(carpet % i === 0) {
	    	divisors.push(i);
	    	if(carpet / i != i) divisors.push(carpet / i);
	    }
    }
    divisors.sort((a, b) => a - b);  // 약수 정렬
    let index = Math.floor(divisors.length / 2); // 가운데 인덱스
    
    // 약수가 짝수라면?
    if (divisors.length % 2 === 0) {
        for (let i = 0; i < index; i++) {
            // 차이가 작은 약수 쌍부터
            size = [divisors[index+i], divisors[index-i-1]];
            // 테두리 수 계산 후 갈색 격자 수와 맞는지 테스트
            let test = size[0] * 2 + (size[1]-2) * 2;
            if (test === brown) break;
        }
    } else {
        // 홀수인 경우 가운데 약수 * 2
        size = [divisors[index], divisors[index]];
    }
    
    return size;
}