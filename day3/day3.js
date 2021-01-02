const map = require("./input3");

const findTrees = (right, down) => {
  trees = 0;
  for (let y = down, x = right; y < map.length; y += down, x += right) {
    if (map[y][x] === "#") trees++;
  }
  return trees;
};

const trees1 = findTrees(3, 1);
const trees2 = findTrees(1, 1);
const trees3 = findTrees(5, 1);
const trees4 = findTrees(7, 1);
const trees5 = findTrees(1, 2);

console.log("part one:", trees1);
console.log("part two:", trees1 * trees2 * trees3 * trees4 * trees5);
