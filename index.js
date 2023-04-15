let characters = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];
const numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
const symbols = [
  "~",
  "`",
  "!",
  "@",
  "#",
  "$",
  "%",
  "^",
  "&",
  "*",
  "(",
  ")",
  "_",
  "-",
  "+",
  "=",
  "{",
  "[",
  "}",
  "]",
  ",",
  "|",
  ":",
  ";",
  "<",
  ">",
  ".",
  "?",
  "/",
];

let pwdGen = document.querySelector(".pwd-btn");
let pwd1 = document.querySelector("#pwd1");
let pwd2 = document.querySelector("#pwd2");

function randNum(n) {
  return Math.floor(Math.random() * n + 1);
}

function getCharacters() {
  const num = document.querySelector("#number").checked;
  const sym = document.querySelector("#symbols").checked;
  if (num && sym) {
    return [...characters, ...numbers, ...symbols];
  } else if (num) {
    return [...characters, ...numbers];
  } else if (sym) {
    return [...characters, ...symbols];
  } else return characters;
}

function genrate() {
  let charArr = getCharacters();
  let value = document.querySelector("#length").value;
  let pwdLength = value ? (value <= 15 && value > 8 ? value : 15) : 8;
  let pwd = "";
  for (let i = 0; i < pwdLength; i++) {
    let num = randNum(charArr.length);
    pwd += charArr[num];
    console.log(num, charArr[num]);
  }
  console.log(charArr);
  return pwd;
}

const copy = () => {
  navigator.clipboard
    .writeText(pwd1.value)
    .then(() => alert("Copied the text: " + pwd1.value));
};

document.querySelector(".generate-password").addEventListener("click", () => {
  document.querySelector("#pwd1").value = genrate();
  document.querySelector("#pwd2").value = genrate();
});
