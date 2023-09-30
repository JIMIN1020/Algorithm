function solution(num_list) {
    let sum = num_list.reduce((a, c) => a + c);
    let mul = num_list.reduce((a, c) => a * c);
    return mul < sum ** 2 ? 1 : 0;
}