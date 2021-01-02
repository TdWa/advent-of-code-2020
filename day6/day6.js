const input = require("./input6");

const groups = input.split("\n\n");
const uniqueYesAmounts = groups.map(
  (group) =>
    new Set(group.split("\n").flatMap((answers) => answers.split(""))).size
);

const sumUniqueYesAmounts = uniqueYesAmounts.reduce((acc, cur) => acc + cur, 0);

// ANSWER 1:
console.log(sumUniqueYesAmounts);

//////////////  PART TWO  ///////////////////

const sharedYesAmounts = groups.map((group) => {
  const answers = group.split("\n");
  let totalShared = 0;
  for (let i = 0; i < answers[0].length; i++) {
    if (answers.every((answer) => answer.includes(answers[0][i]))) {
      totalShared++;
    }
  }
  return totalShared;
});

const sumSharedYesAmounts = sharedYesAmounts.reduce((acc, cur) => acc + cur, 0);

// ANSWER 2:
console.log(sumSharedYesAmounts);
