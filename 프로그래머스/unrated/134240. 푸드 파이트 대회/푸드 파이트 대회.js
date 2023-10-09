function solution(food) {
    let answer = ["0"];
    let len = food.length;
    let arr = food.slice(1, len).reverse();
    
    arr.forEach((v, i) => {
        let count = (v / 2) * 1;
        answer.push(`${len-1-i}`.repeat(count));
        answer.unshift(`${len-1-i}`.repeat(count));
    });
    
    return answer.join("");
}