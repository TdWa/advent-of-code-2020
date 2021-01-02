const passwords = require("./input2");

const amountValid1 = passwords.reduce((acc, cur) => {
  const [appearances, char, password] = cur.split(" ");
  const re = RegExp(`${char[0]}`, "g");
  const appearanceAmount = password.match(re) ? password.match(re).length : 0;

  const [min, max] = appearances.split("-");
  return appearanceAmount >= Number(min) && appearanceAmount <= Number(max)
    ? acc + 1
    : acc;
}, 0);

console.log("part one:", amountValid1);

const amountValid2 = passwords.reduce((acc, cur) => {
  const [appearances, char, password] = cur.split(" ");
  const [pos1, pos2] = appearances.split("-");

  const indexOne = Number(pos1) - 1;
  const indexTwo = Number(pos2) - 1;

  if (
    (password[indexOne] === char[0] && password[indexTwo] !== char[0]) ||
    (password[indexOne] !== char[0] && password[indexTwo] === char[0])
  ) {
    return acc + 1;
  } else {
    return acc;
  }
}, 0);

console.log("part two:", amountValid2);
