function solution(com) {
    let len = com.length;
    
    if (check(com) === 1) {
        return com[len-1] + (com[1] - com[0])
    } else {
        return com[len-1] * (com[1] / com[0])
    }
}

// 등차(1) or 등비(2) 체크 함수
const check = (arr) => {
    return arr[0] - arr[1] === arr[1] - arr[2] ? 1 : 2;
}