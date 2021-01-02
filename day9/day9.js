const input = require("./input9");

const numbers = input.split("\n").map((number) => Number(number));

const answerOne = numbers.find((number, i, arr) => {
  if (i < 25) return false;

  const previous25 = arr.slice(i - 25, i);

  for (let n = i - 1; n >= i - 25; n--) {
    const match = previous25.some((num) => {
      return arr[n] !== num && num + arr[n] === number;
    });

    if (match) {
      return false;
    }
  }

  return true;
});

// ANSWER ONE
console.log(answerOne);

// PART TWO
let nums = [];
outer: for (let startIndex = 0; startIndex < numbers.length - 1; startIndex++) {
  let total = 0;
  for (let i = startIndex; i < numbers.length - 1; i++) {
    total += numbers[i];
    nums.push(numbers[i]);

    if (total > 27911108) {
      nums = [];
      break;
    }
    if (total === 27911108 && nums.length > 1) {
      console.log("SUCCESS!");
      break outer;
    }
  }
}

// ANSWER TWO
console.log(Math.min(...nums) + Math.max(...nums));
