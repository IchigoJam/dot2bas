export const hex2bas = (s) => {
  if (s.length != 16) return "";
  const res = ["POKE#700"];
  for (let i = 0; i < 8; i++) {
    res.push(",#" + s.substring(i * 2, i * 2 + 2));
  }
  res.push(":?CHR$(224)");
  return res.join("");
};
