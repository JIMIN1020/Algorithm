function solution(n) {
    let one = n.toString(2).split("1").length - 1;
    let next = n+1;
    
    while (true) {
        let bi = next.toString(2);
        if (bi.split("1").length - 1 === one) {
            break;
        }
        next++;
    }
    
    return next;
}