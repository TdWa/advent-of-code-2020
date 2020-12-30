const CupList = require("./CupList");

const test = [3, 8, 9, 1, 2, 5, 4, 6, 7];
const cupList = CupList.fromValues(...test);
for (let i = 10; i < 1000001; i++) {
  cupList.push(i);
}

const before = Date.now();

let i = 0;
while (i < 10000000) {
  const pickup = cupList.pick3Cups();

  let destinationValue =
    cupList.current.value - 1 < 1 ? 1000000 : cupList.current.value - 1;
  while (pickup.includes(destinationValue)) {
    destinationValue--;
    if (destinationValue < 1) {
      destinationValue = 1000000;
    }
  }
  cupList.setDestinationCup(destinationValue);

  cupList.insertCups(pickup);
  cupList.setNewCurrent();

  i++;
  if (i === 10000000) {
    console.log(cupList.getCup1());
  }
}
console.log("AFTER WHOLE LOOP", Date.now() - before);

/*

const CupList = require("./CupList");

const test = [3, 8, 9, 1, 2, 5, 4, 6, 7];
const cupList = CupList.fromValues(...test);
for (let i = 10; i < 1000001; i++) {
  cupList.push(i);
}

let i = 0;
const before = Date.now();
while (i < 20) {
  const one = Date.now();
  const pickup = cupList.pick3Cups();
  console.log("what is pickup", pickup);
  console.log("after getting pickup array", Date.now() - one);

  const two = Date.now();
  let destinationValue =
    cupList.current.value - 1 < 1 ? 1000000 : cupList.current.value - 1;
  while (pickup.includes(destinationValue)) {
    destinationValue--;
    if (destinationValue < 1) {
      destinationValue = 1000000;
    }
  }
  console.log("after finding destination", Date.now() - two);

  const three = Date.now();
  const d = cupList.setDestinationCup(destinationValue);
  const before = cupList.beforeDestination(destinationValue - 1);
  console.log("what is current?", cupList.current);
  console.log("what is destination?", d);
  console.log("what is before?:", before);
  console.log("after setting destination", Date.now() - three);

  const four = Date.now();
  cupList.insertCups(pickup);
  console.log("after putting back pickup", Date.now() - four);

  const five = Date.now();
  cupList.setNewCurrent();
  console.log("after setting new current", Date.now() - five);

  i++;
  console.log("total", Date.now() - one);
  console.log();

  // if (i === 10000) {
  //   console.log(Date.now() - one);
  // }
  // if (i === 10000000) {
  //   console.log(cupList.getCup1());
  // }
  // console.log(i);
}
console.log("AFTER WHOLE LOOP", Date.now() - before);

*/
