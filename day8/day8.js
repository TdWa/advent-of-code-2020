const test = `nop +0
acc +1
jmp +4
acc +3
jmp -3
acc -99
acc +1
jmp -4
acc +6`;

const input = require("./input8");

const commands = input.split("\n").map((command) => {
  const code = command.split(" ");
  code[1] = Number(code[1]);
  return code;
});

let sum = 0;
let seen = [];
for (let i = 0; i < commands.length; i++) {
  if (seen.includes(i)) {
    console.log("INFINITE LOOP ALERT!");
    break;
  }
  seen.push(i);
  if (commands[i][0] === "acc") {
    sum += commands[i][1];
  } else if (commands[i][0] === "jmp") {
    i += commands[i][1] - 1;
  } else {
    continue;
  }
}

console.log(sum);

// PART TWO

console.log(
  "what is filtered seen?",
  seen.filter(
    (i) =>
      commands[i][0] !== "acc" &&
      !(commands[i][0] === "jmp" && commands[i][1] === 1)
  )
);

/*
what is filtered seen? [
4, 217, 167, 168, 452, 142,  71,  73,  74, 460, 518,
359, 308, 147, 496, 407, 408, 208, 398, 278, 482, 484, 337,
338, 192, 256, 260, 203, 118, 121, 199, 200, 293, 394, 505,
 64,  66,  14, 125, 533, 233,  20, 102, 318, 129,  36, 182,
349, 403, 478, 479, 378, 587, 115, 457,  51, 239, 240, 188,
472,  59, 356, 490, 369, 421,  57, 557, 561,  85, 197, 223,
132, 134, 372, 430, 344, 580, 314, 380, 163, 322, 324, 325
]

// check from back to front ->
// the error was at index 163
*/
