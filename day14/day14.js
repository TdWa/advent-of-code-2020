const input = require("./input14");

/*
const program = input.split("\n").map((line) => line.split(" = "));

let mask = program[0][1];
for (let i = 1; i < program.length; i++) {
  if (program[i][0] === "mask") {
    mask = program[i][1];
  } else {
    const binaryString = Number(program[i][1]).toString(2).padStart(36, "0");
    const maskedString = binaryString
      .split("")
      .map((bit, i) => (mask[i] === "X" ? bit : mask[i]))
      .join("");
    program[i][1] = parseInt(maskedString, 2);
  }
}

const mem = [];

for (let i = 0; i < program.length; i++) {
  if (program[i][0] === "mask") {
    continue;
  } else {
    const index = Number((program[i][0].match(/[0-9]/g) || []).join(""));
    mem[index] = program[i][1];
  }
}

const answerOne = mem.reduce((acc, cur) => (cur ? acc + cur : acc), 0);

console.log(answerOne);
*/

//////// PART TWO /////////

const test = `mask = 000000000000000000000000000000X1001X
mem[42] = 100
mask = 00000000000000000000000000000000X0XX
mem[26] = 1`;

const program = input.split("\n").map((line) => line.split(" = "));

const mem = {};

let mask = program[0][1];
for (let i = 1; i < program.length; i++) {
  if (program[i][0] === "mask") {
    mask = program[i][1];
  } else {
    const binaryKey = Number((program[i][0].match(/[0-9]/g) || []).join(""))
      .toString(2)
      .padStart(36, "0");

    const maskedKey = binaryKey
      .split("")
      .map((bit, i) => (mask[i] === "0" ? bit : mask[i]));

    const xAmount = maskedKey.reduce(
      (acc, cur) => (cur === "X" ? acc + 1 : acc),
      0
    );

    const combos = [];
    const getCombos = (n, arr = []) => {
      if (n < 1) {
        combos.push(arr.join(""));
      } else {
        arr[n - 1] = "0";
        getCombos(n - 1, arr);
        arr[n - 1] = "1";
        getCombos(n - 1, arr);
      }
    };

    getCombos(xAmount);

    const keys = combos.map((combo) => {
      const binaryKey = [...maskedKey];
      for (let i = 0; i < xAmount; i++) {
        binaryKey[binaryKey.indexOf("X")] = combo[i];
      }
      return binaryKey.join("");
    });

    keys.forEach((key) => {
      mem[key] = Number(program[i][1]);
    });
  }
}

const answerTwo = Object.values(mem).reduce(
  (acc, cur) => (cur ? acc + cur : acc),
  0
);
console.log(answerTwo);
