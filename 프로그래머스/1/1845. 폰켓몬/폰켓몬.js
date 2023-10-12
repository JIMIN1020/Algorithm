function solution(nums) {
    let n = parseInt(nums.length / 2);
    let set = [...new Set(nums)];
    
    return set.length > n ? n : set.length;
}