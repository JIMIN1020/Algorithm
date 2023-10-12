function solution(cards1, cards2, goal) {
    let answer = "Yes";
    
    goal.forEach((v) => {
        if (v === cards1[0]) cards1.shift();
        else if (v === cards2[0]) cards2.shift();
        else answer = "No";
    });
    
    return answer;
}