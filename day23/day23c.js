const input = [3, 2, 7, 4, 6, 5, 1, 8, 9];
const test = [3, 8, 9, 1, 2, 5, 4, 6, 7];

for (let i = 10; i < 1000001; i++) {
  input.push(i);
}

const cups = new Map();
cups.set(input[input.length - 1], input[0]);
for (let i = 0; i < input.length - 1; i++) {
  cups.set(input[i], input[i + 1]);
}

const before = Date.now();

let current = 3;
let i = 0;
while (i < 10000000) {
  const pickup1 = cups.get(current);
  const pickup2 = cups.get(pickup1);
  const pickup3 = cups.get(pickup2);

  cups.set(current, cups.get(pickup3));
  cups.delete(pickup1);
  cups.delete(pickup2);
  cups.delete(pickup3);

  let destination = current - 1 < 1 ? 1000000 : current - 1;
  while ([pickup1, pickup2, pickup3].includes(destination)) {
    destination--;
    if (destination < 1) {
      destination = 1000000;
    }
  }

  const after3 = cups.get(destination);
  cups.set(destination, pickup1);
  cups.set(pickup1, pickup2);
  cups.set(pickup2, pickup3);
  cups.set(pickup3, after3);

  current = cups.get(current);

  i++;
}
console.log(`LOOP DURATION: ${Date.now() - before}ms`);

const firstStar = cups.get(1);
const secondStar = cups.get(firstStar);

console.log(firstStar, secondStar, firstStar * secondStar);
