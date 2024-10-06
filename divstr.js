import { bin2hex, hex2bin } from "./binhex.js";

export const getStringFromDiv = (div) => {
  const s = [];
  const divs = div.childNodes;
  if (divs.length == 64) {
    for (let i = 0; i < divs.length; i++) {
      s.push(divs[i].style.background == 'black' ? '1' : '0');
    }
  } else if (divs.length == 256) {
    for (let j = 0; j < 4; j++) {
      const offx = j % 2 * 8;
      const offy = Math.floor(j / 2) * 8;
      for (let i = 0; i < 64; i++) {
        const x = offx + i % 8;
        const y = offy + Math.floor(i / 8);
        const idx = x + y * 16;
        s.push(divs[idx].style.background == 'black' ? '1' : '0');
      }
    }
  } else {
    throw new Error("not supported size");
  }
  const hex = bin2hex(s.join(""));
  return hex;
};
export const setStringToDiv = (div, s) => {
  if (s == null) return;
  s = hex2bin(s);
  const divs = div.childNodes;
  if (divs.length == 64) {
    for (let i = 0; i < divs.length && i < s.length; i++) {
      divs[i].style.background = s[i] == '1' ? 'black' : 'white';
    }
  } else if (divs.length == 256) {
    for (let j = 0; j < 4; j++) {
      const offx = j % 2 * 8;
      const offy = Math.floor(j / 2) * 8;
      for (let i = 0; i < 64; i++) {
        const x = offx + i % 8;
        const y = offy + Math.floor(i / 8);
        const idx = x + y * 16;
        const si = i + j * 64;
        divs[idx].style.background = s[si] == '1' ? 'black' : 'white';
      }
    }
  } else {
    throw new Error("not supported size");
  }
};
