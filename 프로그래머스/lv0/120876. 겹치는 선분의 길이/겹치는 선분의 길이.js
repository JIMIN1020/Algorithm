// 0으로 채운 배열에 인덱스를 이용하여 값을 1로 바꿔주기
// 이미 1인 값은 2로 바꿔주기 -> 이게 겹친 부분!

function solution(lines) {
    // 길이가 200이고 0으로 채워진 배열 생성
    let arr = new Array(200).fill(0);
    
    // 라인 하나씩 체크
    lines.forEach((l) => {
        // 첫번째 요소부터 ~ 두번째 요소까지
        for(let i = l[0]; i < l[1]; i++) {
            let j = i + 100;    // 인덱스 조정
            // 0이면 1로, 그 이상이면 2로
            arr[j] === 0 ? arr[j] = 1 : arr[j] = 2;
        }
    });
    
    // 2인 것만 모아서 길이 구하기
    return arr.filter((v) => v === 2).length;
}