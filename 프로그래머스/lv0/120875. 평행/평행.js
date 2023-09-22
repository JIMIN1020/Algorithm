function solution(dots) {
    let answer = 0;
    
    slope(dots[0], dots[1]) === slope(dots[2], dots[3]) ? answer = 1 : "";
    slope(dots[0], dots[2]) === slope(dots[1], dots[3]) ? answer = 1 : "";
    slope(dots[0], dots[3]) === slope(dots[1], dots[2]) ? answer = 1 : "";
    
    return answer;
}

// 기울기 구하는 함수
const slope = (pos1, pos2) => (Math.abs(pos1[1] - pos2[1]) / Math.abs(pos1[0] - pos2[0]));