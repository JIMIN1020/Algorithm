function solution(keyinput, board) {
    let pos = [0, 0];
    const x = (board[0]-1)/2;
    const y = (board[1]-1)/2;
    
    while(keyinput.length) {
        let key = keyinput.shift();
        if (key === "up" && pos[1] < y) pos[1]++;
        else if (key === "down" && pos[1] > -y) pos[1]--;
        else if (key === "right" && pos[0] < x) pos[0]++;
        else if (key === "left" && pos[0] > -x) pos[0]--;
    }
    return pos;
}