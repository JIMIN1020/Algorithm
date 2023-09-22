function solution(n) {
    let i = 1;      // 반복자
    let num = 0;    // 현재 숫자
    let count = 0;  // 카운트 횟수
    
    // n번 카운트할 때까지
    while(count !== n) {
        // 3의 배수이거나 "3"이 들어가면?
        if (i % 3 === 0 || (i+"").includes("3")) {
            i++;    // 건너뛰기
            continue;
        }
        // 해당하지 않는 경우
        count++;
        num = i++;
    }
    return num;
}