function solution(s) {
    let count = 0;
    let zero = 0;
    let x = s;
    
    while (x !== "1") {
        count++;
        zero += x.split("0").length - 1;
        let c = x.split("0").join("").length;
        
        x = c.toString(2);
    }
    
    return [count, zero];
}