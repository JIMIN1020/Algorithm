function solution(food) {
    let answer = [];
    
    for (let i = 1; i < food.length; i++) {
        const len = answer.length;
        const count = food[i] - (food[i] % 2);
        answer.splice(len / 2, 0, ...(i+"").repeat(count));
    }
    answer.splice(answer.length / 2, 0, "0");
    
    return answer.join("");
}