function solution(s) {
  let stack = [0];

  [...s].forEach((v) => {
    let top = stack.length - 1;
    if (v !== stack[top]) {
      stack.push(v);
    } else {
      stack.pop();
    }
  });

  return stack.length > 1 ? 0 : 1;
}