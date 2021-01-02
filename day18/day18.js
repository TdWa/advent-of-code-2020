const input = require("./input18");

const calculate = (sum) =>
  sum.reduce((acc, cur, i) => {
    const num = Number(cur);
    if (isNaN(num)) return acc;
    return sum[i - 1] === "+" ? Number(acc) + num : Number(acc) * num;
  });

const resolveSum = (sum) => {
  if (!sum.includes(")")) {
    return calculate(sum);
  } else {
    const firstCloser = sum.indexOf(")");
    const matchingOpener = sum.slice(0, firstCloser).lastIndexOf("(");
    const resolved = calculate(sum.slice(matchingOpener + 1, firstCloser));
    return resolveSum([
      ...sum.slice(0, matchingOpener),
      resolved,
      ...sum.slice(firstCloser + 1),
    ]);
  }
};

const answerOne = input.reduce(
  (acc, cur) => acc + resolveSum(cur.match(/[^ ]/g)),
  0
);

console.log(answerOne);

///// PART TWO //////

// const testSum = ["1", "+", "2", "*", "3", "+", "4", "*", "5", "+", "6"];
// const test = "((2 + 4 * 9) * (6 + 9 * 8 + 6) + 6) + 2 + 4 * 2";
// const noSpace = test.match(/[^ ]/g);

const resolvePlusses = (sum) => {
  if (!sum.includes("+")) {
    return calculate(sum);
  } else {
    const firstPlus = sum.indexOf("+");
    const resolved = calculate(sum.slice(firstPlus - 1, firstPlus + 2));
    return resolvePlusses([
      ...sum.slice(0, firstPlus - 1),
      resolved,
      ...sum.slice(firstPlus + 2),
    ]);
  }
};

const resolveWithPars = (sum) => {
  if (!sum.includes(")")) {
    return resolvePlusses(sum);
  } else {
    const firstCloser = sum.indexOf(")");
    const matchingOpener = sum.slice(0, firstCloser).lastIndexOf("(");
    const resolved = resolvePlusses(sum.slice(matchingOpener + 1, firstCloser));
    return resolveWithPars([
      ...sum.slice(0, matchingOpener),
      resolved,
      ...sum.slice(firstCloser + 1),
    ]);
  }
};

const answerTwo = input.reduce(
  (acc, cur) => acc + resolveWithPars(cur.match(/[^ ]/g)),
  0
);

console.log(answerTwo);
