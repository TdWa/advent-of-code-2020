const cardKey = 17773298;
const doorKey = 15530095;
// const cardKey = 5764801;
// const doorKey = 17807724;

const findLoopSize = (key) => {
  let value = 1;
  let i = 0;
  while (value !== key && i < 99999999) {
    // 2nd check is safeguard against infinite loop
    value *= 7;
    value %= 20201227;
    i++;
  }
  return i;
};

const loopTimesN = (key, n) => {
  let value = 1;
  for (let i = 0; i < n; i++) {
    value *= key;
    value %= 20201227;
  }
  return value;
};

const cardLoop = findLoopSize(cardKey);
const doorLoop = findLoopSize(doorKey);

// answer one:
const encryptionKey1 = loopTimesN(cardKey, doorLoop);
const encryptionKey2 = loopTimesN(doorKey, cardLoop);
console.log("answer one:", encryptionKey1, encryptionKey2);
