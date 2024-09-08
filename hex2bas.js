export const hex2bas = (s, hex = true) => {
  const res = ["POKE#700"];
  const hexordec = (s) => {
    if (hex) return "#" + s;
    return "" + parseInt(s, 16);
  };
  if (s.length == 16) {
    for (let i = 0; i < 8; i++) {
      res.push("," + hexordec(s.substring(i * 2, i * 2 + 2)));
    }
    res.push(":?CHR$(224)");
  } else if (s.length == 16 * 4) {
    for (let i = 0; i < 8 * 4; i++) {
      res.push("," + hexordec(s.substring(i * 2, i * 2 + 2)));
    }
    res.push(":?CHR$(224,225,28,28,31,226,227)");
  } else {
    throw new Error("not supported size");
  }
  return res.join("").toUpperCase();
};
