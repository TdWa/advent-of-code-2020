const input = require("./input10");

input.sort((a, b) => a - b);
input.unshift(0); // add charging outlet
input.push(input[input.length - 1] + 3); // add my device's adapter

const count1sAnd3s = (adapters) => {
  let ones = 0,
    threes = 0;
  for (let i = 1; i < adapters.length; i++) {
    if (adapters[i] - adapters[i - 1] === 1) {
      ones++;
    } else if (adapters[i] - adapters[i - 1] === 3) {
      threes++;
    }
  }
  return [ones, threes];
};

// ANSWER ONE:
console.log(count1sAnd3s(input)[0] * count1sAnd3s(input)[1]);

// PART TWO:
const options = [
  "0",
  1,
  "2",
  "5",
  6,
  7,
  8,
  "9",
  "12",
  "15",
  16,
  17,
  18,
  "19",
  "22",
  23,
  24,
  25,
  "26",
  "29",
  "32",
  33,
  34,
  "35",
  "38",
  39,
  40,
  41,
  "42",
  "45",
  46,
  "47",
  "50",
  51,
  52,
  "53",
  "56",
  57,
  58,
  "59",
  "62",
  63,
  64,
  65,
  "66",
  "69",
  "72",
  73,
  74,
  75,
  "76",
  "79",
  80,
  81,
  82,
  "83",
  "86",
  87,
  88,
  89,
  "90",
  "93",
  94,
  95,
  96,
  "97",
  "100",
  101,
  102,
  "103",
  "106",
  "109",
  110,
  "111",
  "114",
  115,
  116,
  117,
  "118",
  "121",
  "122",
  "125",
  126,
  127,
  128,
  "129",
  "132",
  "135",
  "136",
  "139",
  140,
  141,
  "142",
  "145",
  146,
  147,
  148,
  "149",
  "152",
];

// ANSWER TWO:

// NUMBERS CAN ONLY BE REMOVED IF THERE IS NO DIFFERENCE OF 3

// SERIES OF ONE: 2 options
// it can be on or off

// SERIES OF TWO: 4 options
// both on, both off, a on b off, b on a off

// SERIES OF THREE: 7 options
// all on (1)
// one off (3)
// two off (3)

console.log(
  2 * 7 * 7 * 7 * 4 * 7 * 2 * 4 * 4 * 7 * 7 * 7 * 7 * 7 * 4 * 2 * 7 * 7 * 4 * 7
);
