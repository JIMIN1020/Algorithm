function solution(quiz) {
    return quiz.map((v) => check(v));
}

const check = (str) => {
    const arr = str.split(" ");
    return arr[1] === "+" ? (parseInt(arr[0]) + parseInt(arr[2]) === parseInt(arr[4]) ? "O" : "X") : (parseInt(arr[0]) - parseInt(arr[2]) === parseInt(arr[4]) ? "O" : "X");
}