function solution(l, r) {
    let arr = [];
    
    for (let i = l; i <= r; i++) {
        let num = i+"";
        num = num.replaceAll("0", "");
        num = num.replaceAll("5", "");
        
        if (num.length === 0) arr.push(i);
    }
    
    return arr.length > 0 ? arr : [-1];
}