function solution(n) {
    let result = 0;
    
    for(let i = 1; i <= n; i++) {
        let sum = i;
        let j = i+1;
        
        while(sum + j <= n) {
            sum += j;
            j++;
        }
        
        if (sum === n) result++;
    }
    
    return result;
}