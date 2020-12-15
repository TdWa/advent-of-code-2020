Work in progress!
const findSeat = (code) => {
  const row = 70;
  const column = 7;
  const seatId = row * 8 + column;
  return seatId;
}

console.log(findSeat("BFFFBBFRRR") === 567);
console.log(findSeat("FFFBBBFRRR") === 119);
console.log(findSeat("BBFFBBFRLL") === 820);

// could add more tests / validations like: 
// the input code should be a string of 7 times B or F and then 3 times L or R
// the result should be at least 0 and at most 127 * 8 + 7
