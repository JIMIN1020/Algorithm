function solution(nums) {
    let len = nums.length;
    let num = [];
    
    // 3개의 수 더하기
    for(let i = 0; i < len-2; i++) {
        for(let j = i+1; j < len-1; j++) {
            for(let k = j+1; k < len; k++) {
                num.push(nums[i] + nums[j] + nums[k]);
            }
        }
    }
    
    // 소수만 필터링
    num = num.filter((v) => {
        for(let i = 2; i < v; i++) {
            if (v % i === 0) return false
        }
        return true;
    });
    
    return num.length;
}