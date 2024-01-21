function solution(people, limit) {
  let p = people.sort((a, b) => b - a);
  let boats = 0;

  for (let i = 0; i < p.length; i++) {
    if (p[i] + p[p.length - 1] <= limit) {
      p.pop();
    }
    boats++;
  }

  return boats;
}