function solution(today, terms, privacies) {
  let tday = today.split(".").map(Number);
  let expire = [];

  // 약관 종류별 계산
  terms.forEach((t) => {
    const [type, month] = t.split(" "); // 약관 종류 - 유효기간 나누기
    const priv = privacies.filter((p) => p.includes(type)); // 약관 종류에 해당하는 케이스만 필터링

    priv.forEach((p) => {
      let [y, m, d] = p.split(" ")[0].split(".").map(Number);
      m += month * 1;

      if (m % 12 === 0) {
        y += Math.trunc(m / 12) - 1;
        m = 12;
      } else if (m > 12) {
        y += Math.trunc(m / 12);
        m = m % 12;
      }

      if (d === 1 && m === 1) {
        d = 28;
        m = 12;
        y -= 1;
      } else if (d === 1) {
        d = 28;
        m -= 1;
      } else {
        d -= 1;
      }

      const idx = privacies.indexOf(p);
      if (tday[0] > y) {
        expire.push(idx + 1);
        privacies[idx] = "";
      } else if (tday[0] == y && tday[1] > m) {
        expire.push(idx + 1);
        privacies[idx] = "";
      } else if (tday[0] == y && tday[1] == m && tday[2] > d) {
        expire.push(idx + 1);
        privacies[idx] = "";
      }
    });
  });

  return expire.sort((a, b) => a - b);
}
