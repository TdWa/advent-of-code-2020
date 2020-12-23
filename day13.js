const busIds = [
  19,
  "x",
  "x",
  "x",
  "x",
  "x",
  "x",
  "x",
  "x",
  41,
  "x",
  "x",
  "x",
  "x",
  "x",
  "x",
  "x",
  "x",
  "x",
  823,
  "x",
  "x",
  "x",
  "x",
  "x",
  "x",
  "x",
  23,
  "x",
  "x",
  "x",
  "x",
  "x",
  "x",
  "x",
  "x",
  17,
  "x",
  "x",
  "x",
  "x",
  "x",
  "x",
  "x",
  "x",
  "x",
  "x",
  "x",
  29,
  "x",
  443,
  "x",
  "x",
  "x",
  "x",
  "x",
  37,
  "x",
  "x",
  "x",
  "x",
  "x",
  "x",
  13,
];
const timestamp = 1005162;

const nextDepartures = busIds.reduce((acc, cur) => {
  if (cur === "x") return acc;
  const nextDeparture =
    timestamp % cur === 0 ? timestamp : timestamp - (timestamp % cur) + cur;
  return [...acc, { id: cur, next: nextDeparture }];
}, []);
// console.log(nextDepartures);

const nextBus = nextDepartures.reduce((acc, cur) =>
  cur.next < acc.next ? cur : acc
);
// console.log(nextBus);

// ANSWER ONE:
// console.log(nextBus.id * (nextBus.next - timestamp));

/////// PART TWO ////////

const test = [7, 13, "x", "x", 59, "x", 31, 19];
const test2 = [17, "x", 13, 19];
const test3 = [67, 7, 59, 61];

const busses = busIds.reduce((acc, cur, i) => {
  if (cur === "x") return acc;
  return [...acc, { id: cur, interval: i }];
}, []);

console.log(busses);

let t = 2137709360240;
while (true) {
  if (busses.every((bus) => (t + bus.interval) % bus.id === 0)) {
    console.log("SUCCESS!", t);
    break;
  }

  t += 3220444168709;

  // safeguard:
  if (t > 1100000000000000) break;
}

/*
First find the correct timestamp for the first 2 values
then change the incrementor to the product of these values
then find the timestamp for adding the next value
then from that point change the incrementor to the product of all 3
etc 
*/
