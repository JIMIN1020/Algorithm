function solution(a, b) {
    let ab = [a+"", b+""].join("")*1;
    let ab2 = a * b * 2;
    
    return ab2 > ab ? ab2 : ab;
}