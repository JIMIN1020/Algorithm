function solution(a, b) {
    let arr = [a+"", b+""];
    let ab = arr.join("")*1;
    let ba = arr.reverse().join("")*1;
    
    return ab > ba ? ab : ba;
}