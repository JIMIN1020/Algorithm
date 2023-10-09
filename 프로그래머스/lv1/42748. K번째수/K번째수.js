function solution(array, commands) {
    let result = [];
    commands.forEach(([i, j, k]) => {
        let sorted = array.slice(i-1, j).sort((a, b) => a - b);
        result.push(sorted[k-1]);
    })
    return result;
}