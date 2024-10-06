export const hex2bas = (s, hex = true, firstch = 224) => {
  const res = ["POKE#" + (firstch * 8).toString(16).toUpperCase()];
  const hexordec = (s) => {
    if (hex) return "#" + s;
    return "" + parseInt(s, 16);
  };
  if (s.length == 16) {
    for (let i = 0; i < 8; i++) {
      res.push("," + hexordec(s.substring(i * 2, i * 2 + 2)));
    }
    res.push(`:?CHR$(${firstch})`);
  } else if (s.length == 16 * 4) {
    for (let i = 0; i < 8 * 4; i++) {
      res.push("," + hexordec(s.substring(i * 2, i * 2 + 2)));
    }
    const c = parseInt(firstch);
    res.push(`:?CHR$(${c},${c + 1},28,28,31,${c + 2},${c + 3})`);
  } else {
    throw new Error("not supported size");
  }
  return res.join("").toUpperCase();
};
