export const bin2hex = (s) => {
  let res = "";
  for (let i = 0; i < s.length; i += 4) {
    let n = 0;
    for (let j = 0; j < 4; j++) {
      n += s.charAt(i + 3 - j) == "1" ? (1 << j) : 0;
    }
    res += "0123456789abcdef".charAt(n);
  }
  return res;
};
export const hex2bin = (s) => {
  s = s.toLowerCase();
  let res = "";
  for (let i = 0; i < s.length; i++) {
    let n = "0123456789abcdef".indexOf(s.charAt(i));
    if (n < 0) n = 0;
    for (let j = 0; j < 4; j++) {
      res += (n & (1 << (3 - j))) != 0 ? "1" : "0";
    }
  }
  return res;
};
