
function solution(board) {
    // board 한 변의 길이
    const len = board.length-1;
    
    // 위험지역 좌표
    const area = [[-1, 0], [1, 0], [0, 1], [0, -1], [-1, 1], [1, 1], [1, -1], [-1, -1]];
    
    // 위험지역 체크하기
    for(let i = 0; i <= len; i++) {
      for(let j = 0; j <= len; j++) {
          if (board[i][j] === 1) {
            area.map((v) => {
                let [x, y] = v;
                [x, y] = [x + i, y + j];
                if (x >= 0 && x <= len && y >= 0 && y <= len && board[x][y] == 0) board[x][y] = 2;
                }); 
            }
        }
    }
    let answer = 0;
    board.map(line => line.map(v2 => v2 == 0 ? answer++ : 0));
    return answer;
}
