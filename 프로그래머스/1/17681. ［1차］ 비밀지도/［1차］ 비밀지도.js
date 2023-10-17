function solution(n, arr1, arr2) {
    let result = [];
    
    // 이진수로 변환하기
    let map1 = arr1.map((v) => {
        let num = v.toString(2);
        // 앞에 생략된 0 추가해주기
        num = "0".repeat(n - num.length) + num;  
        return num;
    });
    let map2 = arr2.map((v) => {
        let num = v.toString(2);
        num = "0".repeat(n - num.length) + num;  
        return num;
    });
    
    // 합치기
    for (let i = 0; i < n; i++) {
        let line = "";
        for (let j = 0; j < n; j++) {
            // 둘 다 0인 경우만 빈칸
            if (map1[i][j] === "0" && map2[i][j] === "0") line += " ";
            else line += "#";
        }
        result.push(line);
    }
    
    return result;
}