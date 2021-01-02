const { nearbyTickets, myTicket, rules } = require("./day16input.js");

const testRules = `class: 1-3 or 5-7
row: 6-11 or 33-44
seat: 13-40 or 45-50`;

const testMyTicket = [7, 1, 14];
const testNearbyTickets = [
  [7, 3, 47],
  [40, 4, 50],
  [55, 2, 20],
  [38, 6, 12],
];

const formattedRules = rules.split("\n").map((rule) => {
  const formattedRule = rule.split(": ");
  formattedRule[1] = formattedRule[1]
    .split(" or ")
    .map((r) => r.split("-").map((n) => Number(n)));
  return formattedRule;
});

// console.log(formattedRules);

const allRanges = formattedRules.reduce((acc, cur) => [...acc, ...cur[1]], []);

// console.log(allRanges);

const invalidValues = nearbyTickets.flatMap((ticket) =>
  ticket.filter(
    (n) => !allRanges.some((range) => n >= range[0] && n <= range[1])
  )
);

// console.log(invalidValues);

const answerOne = invalidValues.reduce((acc, cur) => acc + cur, 0);
// console.log(answerOne);

//////////// PART TWO /////////////////
const validTickets = nearbyTickets.filter(
  (ticket) =>
    !ticket.some(
      (n) => !allRanges.some((range) => n >= range[0] && n <= range[1])
    )
);

// console.log(allRanges);
// console.log(formattedRules);

const fields = formattedRules.map((rule) => []);
validTickets.forEach((ticket) =>
  ticket.forEach((num, i) => fields[i].push(num))
);

// console.log(fields);
const matches = formattedRules.map((rule) => {
  const indices = fields.reduce((acc, cur, i) => {
    return cur.every(
      (n) =>
        (n >= rule[1][0][0] && n <= rule[1][0][1]) ||
        (n >= rule[1][1][0] && n <= rule[1][1][1])
    )
      ? [...acc, i]
      : acc;
  }, []);
  return [rule[0], indices];
});

// console.log(matches);
// this is what matches looks like:
const results = [
  ["departure location", [2, 4, 7, 9, 10, 11, 12, 15, 17, 19]],
  ["departure station", [2, 4, 7, 8, 9, 10, 11, 12, 15, 17, 19]],
  ["departure platform", [2, 4, 7, 9, 10, 11, 15, 17]],
  ["departure track", [2, 4, 7, 8, 9, 10, 11, 12, 14, 15, 17, 19]],
  ["departure date", [2, 4, 7, 9, 10, 11, 15, 17, 19]],
  ["departure time", [2, 7, 9, 10, 11, 15, 17]],
  ["arrival location", [2, 4, 5, 7, 8, 9, 10, 11, 12, 14, 15, 17, 19]],
  ["arrival station", [7, 9]],
  ["arrival platform", [7, 9, 11, 17]],
  ["arrival track", [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 14, 15, 16, 17, 19]],
  [
    "class",
    [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19],
  ],
  ["duration", [7]],
  ["price", [7, 9, 11, 15, 17]],
  ["route", [2, 3, 4, 5, 7, 8, 9, 10, 11, 12, 14, 15, 16, 17, 19]],
  ["row", [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 19]],
  ["seat", [2, 3, 4, 5, 7, 8, 9, 10, 11, 12, 14, 15, 17, 19]],
  ["train", [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 14, 15, 16, 17, 19]],
  ["type", [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 14, 15, 16, 17, 19]],
  ["wagon", [7, 9, 11]],
  ["zone", [7, 9, 10, 11, 15, 17]],
];

// manually filtered results
// (by removing things from lists if they are the only thing somewhere, starting with 7):
const filteredResults = [
  ["train", [0]],
  ["type", [1]],
  ["departure time", [2]], //
  ["seat", [3]],
  ["departure platform", [4]], //
  ["arrival location", [5]],
  ["arrival track", [6]],
  ["duration", [7]],
  ["departure station", [8]], //
  ["arrival station", [9]],
  ["zone", [10]],
  ["wagon", [11]],
  ["departure location", [12]], //
  ["row", [13]],
  ["departure track", [14]], //
  ["price", [15]],
  ["route", [16]],
  ["arrival platform", [17]],
  ["class", [18]],
  ["departure date", [19]], //
];

const answerTwo =
  myTicket[2] *
  myTicket[4] *
  myTicket[8] *
  myTicket[12] *
  myTicket[14] *
  myTicket[19];

console.log(answerTwo);
