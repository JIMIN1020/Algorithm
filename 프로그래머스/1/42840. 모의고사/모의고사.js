function solution(answers) {
    // 반복되는 찍는 방식
    let st1 = [1, 2, 3, 4, 5];
    let st2 = [2, 1, 2, 3, 2, 4, 2, 5];
    let st3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];
    
    // 문제 하나씩 체크 -> 맞춘 문제만 남기고 length 구하기
    let sc1 = answers.filter((v, i) => v === st1[i % st1.length]).length;
    let sc2 = answers.filter((v, i) => v === st2[i % st2.length]).length;
    let sc3 = answers.filter((v, i) => v === st3[i % st3.length]).length;
    
    // 최댓값과 같은 경우 push
    let answer = [];
    let max = Math.max(sc1, sc2, sc3);
    if (sc1 === max) answer.push(1);
    if (sc2 === max) answer.push(2);
    if (sc3 === max) answer.push(3);
    
    return answer;
}