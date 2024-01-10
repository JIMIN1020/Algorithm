function solution(new_id) {
  let id = new_id;

  // 1~4단계
  id = id
    .toLowerCase()
    .replaceAll(/[^a-z0-9\-_.]/g, "")
    .replaceAll(/\.+/g, ".")
    .replaceAll(/^\.+|\.+$/g, "");

  // 5단계
  if (id === "") id = "a";

  // 6단계
  if (id.length >= 16) id = id.slice(0, 15).replace(/\.$/, "");

  // 7단계
  while (id.length < 3) {
    id += id[id.length - 1];
  }

  return id;
}
