const memory = new Map();

memory.set(2, 1);
memory.set(20, 2);
memory.set(0, 3);
memory.set(4, 4);
memory.set(1, 5);

let lastSpoken = 17;
for (let turn = 7; turn < 30000001; turn++) {
  if (memory.has(lastSpoken)) {
    nowSpoken = turn - 1 - memory.get(lastSpoken);
    memory.set(lastSpoken, turn - 1);
    lastSpoken = nowSpoken;
  } else {
    memory.set(lastSpoken, turn - 1);
    lastSpoken = 0;
  }
}

console.log(lastSpoken);

/*
SLOW SOLUTION!

const memory = {
  2: 1,
  20: 2,
  0: 3,
  4: 4,
  1: 5,
};

let lastSpoken = 17;
for (let turn = 7; turn < 2021; turn++) {
  if (Object.keys(memory).includes(lastSpoken.toString())) {
    nowSpoken = turn - 1 - memory[lastSpoken];
    memory[lastSpoken] = turn - 1;
    lastSpoken = nowSpoken;
  } else {
    memory[lastSpoken] = turn - 1;
    lastSpoken = 0;
  }
}

console.log(lastSpoken);
*/
