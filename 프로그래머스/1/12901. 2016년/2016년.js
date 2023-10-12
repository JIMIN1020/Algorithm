function solution(a, b) {
    const day = ["THU","FRI","SAT","SUN","MON","TUE","WED"];
    const numOfDay = [0, 31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    let totalDays = numOfDay.slice(0, a).reduce((a, c) => a + c) + b;
    
    return day[totalDays % 7];
}