const input = require("./input5");

const findSeat = (code) => {
  let minRow = 0,
    maxRow = 127;
  for (let i = 0; i < 7; i++) {
    minRow = code[i] === "F" ? minRow : Math.ceil((minRow + maxRow) / 2);
    maxRow = code[i] === "F" ? Math.floor((minRow + maxRow) / 2) : maxRow;
  }
  let minCol = 0,
    maxCol = 7;
  for (let i = 7; i < 10; i++) {
    minCol = code[i] === "L" ? minCol : Math.ceil((minCol + maxCol) / 2);
    maxCol = code[i] === "L" ? Math.floor((minCol + maxCol) / 2) : maxCol;
  }
  return minRow * 8 + minCol;
};

const highestSeat = input.reduce((acc, cur) => {
  return findSeat(cur) > acc ? findSeat(cur) : acc;
}, 0);

// ANSWER PART ONE
console.log(highestSeat);

const seats = input.map((code) => findSeat(code)).sort((a, b) => a - b);

const seatBeforeMine = seats.find((seat, i, arr) => {
  if (i === arr.length - 1) return;
  return seat === arr[i + 1] - 2;
});

// ANSWER PART TWO
console.log(seatBeforeMine);

// TESTS:
// console.log(findSeat("BFFFBBFRRR") === 567);
// console.log(findSeat("FFFBBBFRRR") === 119);
// console.log(findSeat("BBFFBBFRLL") === 820);

// could add more tests / validations like:
// the input code should be a string of 7 times B or F and then 3 times L or R
// the result should be at least 0 and at most 127 * 8 + 7
