function solution(order) {
    return (order+"").split("").filter((n) => "369".includes(n)).length;
}