function solution(d, budget) {
    d.sort((a, b) => a - b);
    
    d = d.map((v) => {
        if (budget - v >= 0) {
            budget -= v;
            return 0;
        }
        else return v;
    });
    
    return d.filter((v) => v === 0).length;
}