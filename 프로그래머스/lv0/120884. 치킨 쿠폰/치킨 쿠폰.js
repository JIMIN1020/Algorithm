function solution(chicken) {
    return coupon(chicken)
}

// 재귀 함수 (10으로 나누기 -> 서비스 치킨 + 나머지 값으로 또 다시 호출
const coupon = (order) => {
    if (order < 10) return 0;
    return Math.floor(order / 10) + coupon(Math.floor(order / 10) + order % 10);
}