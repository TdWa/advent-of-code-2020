const player1 = [
  14,
  6,
  21,
  10,
  1,
  33,
  7,
  13,
  25,
  8,
  17,
  11,
  28,
  27,
  50,
  2,
  35,
  49,
  19,
  46,
  3,
  38,
  23,
  5,
  43,
  /////////// test
  // 9,
  // 2,
  // 6,
  // 3,
  // 1,
  /////////// test 2
  // 43,
  // 19,
];

const player2 = [
  18,
  9,
  12,
  39,
  48,
  24,
  32,
  45,
  47,
  41,
  40,
  15,
  22,
  36,
  30,
  26,
  42,
  34,
  20,
  16,
  4,
  31,
  37,
  44,
  29,
  /////////// test
  // 5,
  // 8,
  // 4,
  // 7,
  // 10,
  /////////// test 2
  // 2,
  // 29,
  // 14,
];

const play = (deck1, deck2) => {
  if (deck1.length === 0 || deck2.length === 0)
    return deck1.length > deck2.length ? deck1 : deck2;

  const card1 = deck1[0];
  const card2 = deck2[0];

  return card1 > card2
    ? play([...deck1.slice(1), card1, card2], deck2.slice(1))
    : play(deck1.slice(1), [...deck2.slice(1), card2, card1]);
};

const winningDeck = play(player1, player2);

const answerOne = winningDeck.reduce(
  (acc, cur, i, arr) => acc + (arr.length - i) * cur,
  0
);

console.log("answer one:", answerOne);

////// PART TWO //////

const play2 = (deck1, deck2, memory = []) => {
  if (deck1.length === 0 || deck2.length === 0)
    return deck1.length > deck2.length ? [1, deck1] : [2, deck2];

  const deck1String = `1: ${deck1.join("")}`;
  const deck2String = `2: ${deck2.join("")}`;
  if (memory.includes(deck1String) || memory.includes(deck2String))
    return [1, deck1];
  memory.push(deck1String, deck2String);

  const card1 = deck1[0];
  const card2 = deck2[0];

  if (deck1.length - 1 >= card1 && deck2.length - 1 >= card2) {
    const deck1Copy = deck1.slice(1).slice(0, card1);
    const deck2Copy = deck2.slice(1).slice(0, card2);
    const winner = play2(deck1Copy, deck2Copy);
    return winner[0] === 1
      ? play2([...deck1.slice(1), card1, card2], deck2.slice(1), memory)
      : play2(deck1.slice(1), [...deck2.slice(1), card2, card1], memory);
  } else {
    return card1 > card2
      ? play2([...deck1.slice(1), card1, card2], deck2.slice(1), memory)
      : play2(deck1.slice(1), [...deck2.slice(1), card2, card1], memory);
  }
};

const winnerTwo = play2(player1, player2);

const answerTwo = winnerTwo[1].reduce(
  (acc, cur, i, arr) => acc + (arr.length - i) * cur,
  0
);

console.log("answer two:", answerTwo);
