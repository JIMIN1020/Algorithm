function solution(arr, queries) {
    queries.forEach((q) => {
        const [s, e, k] = q;
        
        for (let i = s; i <= e; i++) {
            if (i % k === 0) arr[i] += 1;
        }
    })
    
    return arr;
}