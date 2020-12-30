const cups = [3, 2, 7, 4, 6, 5, 1, 8, 9];
const test = [3, 8, 9, 1, 2, 5, 4, 6, 7];

const play = (cups, currentCup, i = 0) => {
  if (i === 100) return cups;
  i++;
  const ccIndex = cups.indexOf(currentCup);
  const pickup =
    ccIndex === 8
      ? cups.slice(0, 3)
      : ccIndex === 7
      ? [cups[8], ...cups.slice(0, 2)]
      : ccIndex === 6
      ? [cups[7], cups[8], cups[0]]
      : cups.slice(ccIndex + 1, ccIndex + 4);

  const newCups = cups.filter((cup) => !pickup.includes(cup));
  let destination = currentCup - 1;
  while (!newCups.includes(destination)) {
    destination--;
    if (destination < Math.min(...cups)) {
      destination = Math.max(...cups);
    }
  }
  const destinationIndex = newCups.indexOf(destination);
  newCups.splice(destinationIndex + 1, 0, ...pickup);
  const newCCIndex = newCups.indexOf(currentCup);
  const newCurrentCup = newCCIndex === 8 ? newCups[0] : newCups[newCCIndex + 1];
  return play(newCups, newCurrentCup, i);
};

const result = play(cups, cups[0]);
// console.log(result);

///// PART TWO /////
// console.log(one);

let cups2 = [...test];
for (let i = 10; i < 1000001; i++) {
  cups2.push(i);
}

// const two = Date.now();
// console.log(two);
// console.log(two - one);

// const one = Date.now();
let currentCup = cups2[0];
let ccIndex = 0;
let i = 0;
const before = Date.now();
while (i < 500) {
  const one = Date.now();
  const pickup =
    ccIndex === 999999
      ? cups2.splice(0, 3)
      : ccIndex === 999998
      ? [...cups2.splice(999999, 1), ...cups2.splice(0, 2)]
      : ccIndex === 999997
      ? [...cups2.splice(999998, 2), ...cups2.splice(0, 1)]
      : cups2.splice(ccIndex + 1, 3);
  // console.log("after getting pickup array", Date.now() - one);

  // const two = Date.now();
  let destination = currentCup - 1 < 1 ? 1000000 : currentCup - 1;
  while (pickup.includes(destination)) {
    destination--;
    if (destination < 1) {
      destination = 1000000;
    }
  }
  // console.log("after finding destination", Date.now() - two);

  // const three = Date.now();
  const destinationIndex = cups2.indexOf(destination);
  // console.log("after setting destination", Date.now() - three);

  // const four = Date.now();
  cups2.splice(destinationIndex + 1, 0, ...pickup);
  // console.log("after putting back pickup", Date.now() - four);

  // const five = Date.now();
  const newCCIndex = cups2.indexOf(currentCup);
  ccIndex = newCCIndex === 999999 ? 0 : newCCIndex + 1;
  currentCup = newCCIndex === 999999 ? cups2[0] : cups2[newCCIndex + 1];
  // console.log("after setting new current", Date.now() - five);

  i++;
  // console.log("total", Date.now() - one);
  // console.log(i);
  // if (i === 10000) {
  //   console.log(Date.now() - one);
  // }
}
console.log("AFTER WHOLE LOOP", Date.now() - before);

// console.log(cups2);
/*
let cups2 = [...test];
let currentCup = cups2[0];
let ccIndex = 0;
let i = 0;
while (i < 100) {
  i++;
  const pickup =
    ccIndex === 8
      ? cups2.splice(0, 3)
      : ccIndex === 7
      ? [...cups2.splice(8, 1), ...cups2.splice(0, 2)]
      : ccIndex === 6
      ? [...cups2.splice(7, 2), ...cups2.splice(0, 1)]
      : cups2.splice(ccIndex + 1, 3);

  let destination = currentCup - 1 < 1 ? 9 : currentCup - 1;
  while (pickup.includes(destination)) {
    destination--;
    if (destination < 1) {
      destination = 9;
    }
  }
  const destinationIndex = cups2.indexOf(destination);
  cups2.splice(destinationIndex + 1, 0, ...pickup);
  const newCCIndex = cups2.indexOf(currentCup);
  ccIndex = newCCIndex === 8 ? 0 : newCCIndex + 1;
  currentCup = newCCIndex === 8 ? cups2[0] : cups2[newCCIndex + 1];
  // console.log(i);
}

console.log(cups2);

////////////////////////////////////////////////////////////////////




const CupList = require("./CupList");

const test = [3, 8, 9, 1, 2, 5, 4, 6, 7];

const cupList = CupList.fromValues(...test);

let i = 0;
while (i < 100) {
  const pickup = cupList.pick3Cups();

  let destinationValue =
    cupList.current.value - 1 < 1 ? 9 : cupList.current.value - 1;
  while (pickup.includes(destinationValue)) {
    destinationValue--;
    if (destinationValue < 1) {
      destinationValue = 9;
    }
  }
  cupList.setDestinationCup(destinationValue);
  cupList.insertCups(pickup);
  cupList.setNewCurrent();
  i++;
  if (i === 100) {
    console.log(cupList.toArray());
  }
}
*/
