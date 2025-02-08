function solution(bridge_length, weight, truck_weights) {
    let current = [];
    let totalTime = 0;
    
    while (truck_weights.length || current.length) {
        // 1초 씩 증가
        totalTime++;
        
        // 다 건넌 트럭 빼기
        if (current.some((c) => c[1] === totalTime)) {
            current.shift();
        }
        
        // 현재 다리 위에 있는 트럭
        if (current.reduce((a, c) => a + c[0], 0) + truck_weights[0] <= weight) {
            const truck = truck_weights.shift();
            current.push([truck, totalTime + bridge_length]);
        } else if (current[0]) {
            // 못올라오는 경우 시간 점프
            totalTime = current[0][1] - 1;
        }
    }
    
    return totalTime;
}