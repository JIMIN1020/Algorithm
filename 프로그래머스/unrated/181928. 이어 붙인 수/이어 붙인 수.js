function solution(num_list) {
    let odd = num_list.filter((v) => v % 2 !== 0).join("")*1;
    let even = num_list.filter((v) => v % 2 === 0).join("")*1;
    
    return odd + even;
}