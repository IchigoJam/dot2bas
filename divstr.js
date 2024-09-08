import { bin2hex, hex2bin } from "./binhex.js";

export const getStringFromDiv = (div) => {
  const s = [];
  const divs = div.childNodes;
  for (let i = 0; i < divs.length; i++) {
    s.push(divs[i].style.background == 'black' ? '1' : '0');
  }
  const hex = bin2hex(s.join(""));
  return hex;
};
export const setStringToDiv = (div, s) => {
  if (s == null) return;
  s = hex2bin(s);
  const divs = div.childNodes;
  for (let i = 0; i < divs.length && i < s.length; i++) {
    divs[i].style.background = s.charAt(i) == '1' ? 'black' : 'white';
  }
};
