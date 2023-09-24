function solution(chicken) {
    const coupon = (order) => {
        if (order < 10) return 0;
        return Math.floor(order / 10) + coupon(Math.floor(order / 10) + order % 10);
    }
    return coupon(chicken)
}

