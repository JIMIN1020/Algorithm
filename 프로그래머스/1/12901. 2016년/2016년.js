function solution(a, b) {
    const day = ["FRI","SAT","SUN","MON","TUE","WED","THU"];
    const numOfDay = [0, 31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    let totalDays = numOfDay.slice(0, a).reduce((a, c) => a + c) + b - 1;
    
    return day[totalDays % 7];
}