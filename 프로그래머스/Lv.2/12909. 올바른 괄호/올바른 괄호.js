function solution(s){
    let result = true;
    let stack = [];
    
    [...s].forEach((v) => {
        if (v === "(") {
            stack.push(v);
        } else {
            if (stack.pop() !== "(") result = false;
        }
    })
    
    return result && stack.length === 0;
}