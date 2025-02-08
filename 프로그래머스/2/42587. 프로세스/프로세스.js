function solution(priorities, location) {
    const queue = priorities.map((p, i) => [p, String.fromCharCode(65 + i)]);
    const target = String.fromCharCode(65 + location);
    let completed = 0;
    
    while (queue.length > 0) {
        const first = queue.shift();
        
        if (queue.some((prior) => prior[0] > first[0])) {
            queue.push(first);
        } else {
             completed++;
            if (first[1] === target) return completed;
        }
    }
}