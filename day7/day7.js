const input = require("./input7");

const rules = input.split("\n").map((rule) => rule.split(" bags contain "));

const findContainers = (colorsToCheck, rules, bagsFound = new Set()) => {
  const matches = [];
  colorsToCheck.forEach((color) => {
    for (let i = 0; i < rules.length; i++) {
      if (rules[i][1].includes(color)) {
        matches.push(rules[i][0]);
        bagsFound.add(rules[i][0]);
      }
    }
  });

  if (matches.length === 0) {
    return bagsFound.size;
  }
  return findContainers(matches, rules, bagsFound);
};

// ANSWER ONE:
// console.log(findContainers(["shiny gold"], rules));

// PART TWO:
const formattedBags = rules.map((rule) => {
  const formattedItems = rule[1].split(", ").map((item) => {
    const splitItem = item.split(" ");
    return [`${splitItem[1]} ${splitItem[2]}`, Number(splitItem[0])];
  });

  const bag = {
    name: rule[0],
    items: rule[1] === "no other bags." ? [] : formattedItems,
  };

  return bag;
});

const myBag = formattedBags.find((bag) => bag.name === "shiny gold");

const formatBag = (content) => {
  return content.map((item) => {
    const itemBag = formattedBags.find((bag) => bag.name === item[0]);
    if (itemBag.items.length === 0) return item[1];
    else return [item[1], formatBag(itemBag.items)];
  });
};

const myBagFormatted = formatBag(myBag.items);

const countBags = (bagList) => {
  return bagList.map((bag) => {
    if (typeof bag === "number") return bag;
    else if (bag.length === 1) return bag[0];
    return (
      bag[0] + bag[0] * countBags(bag[1]).reduce((acc, cur) => acc + cur, 0)
    );
  });
};

const testList = [
  [2, [[2, [[2, [[2, [[2, [2]]]]]]]]]],
  [3, [[4, [1]]]],
  [1, [7]],
  [2, [11]],
  [
    2,
    [
      [1, [1, [7]]],
      [2, [11]],
    ],
  ],
];
// console.log(countBags(testList));

// ANSWER TWO:
console.log(countBags(myBagFormatted).reduce((acc, cur) => acc + cur, 0));
