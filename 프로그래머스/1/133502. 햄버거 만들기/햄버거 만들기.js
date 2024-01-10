function solution(ingredient) {
    let burger = [];
    let count = 0;
    
    ingredient.forEach((i) => {
        burger.push(i);
        
        if (burger.slice(-4).join("") === "1231") {
            count++;
            burger.splice(-4);
        }
    })
    
    return count;
}