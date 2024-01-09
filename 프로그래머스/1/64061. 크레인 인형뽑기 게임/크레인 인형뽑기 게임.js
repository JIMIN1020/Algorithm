function solution(board, moves) {
  let stack = []; // 인형을 담을 바구니(스택)
  let pop = []; // 삭제한(터진) 인형을 담을 바구니

  moves.forEach((m) => {
    for (let i = 0; i < board.length; i++) {
      // 인형이 있는 경우
      if (board[i][m - 1] !== 0) {
        // 바구니에 담긴 인형과 같으면 삭제, 아니면 담기
        stack[stack.length - 1] === board[i][m - 1]
          ? pop.push(stack.pop())
          : stack.push(board[i][m - 1]);
        // 0으로 리셋
        board[i][m - 1] = 0;
        break;
      }
    }
  });

  return pop.length * 2;  // 터진 쌍이기 때문에 x2
}