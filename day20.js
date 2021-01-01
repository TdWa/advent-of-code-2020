const testInput = `Tile 2311:
..##.#..#.
##..#.....
#...##..#.
####.#...#
##.##.###.
##...#.###
.#.#.#..##
..#....#..
###...#.#.
..###..###

Tile 1951:
#.##...##.
#.####...#
.....#..##
#...######
.##.#....#
.###.#####
###.##.##.
.###....#.
..#.#..#.#
#...##.#..

Tile 1171:
####...##.
#..##.#..#
##.#..#.#.
.###.####.
..###.####
.##....##.
.#...####.
#.##.####.
####..#...
.....##...

Tile 1427:
###.##.#..
.#..#.##..
.#.##.#..#
#.#.#.##.#
....#...##
...##..##.
...#.#####
.#.####.#.
..#..###.#
..##.#..#.

Tile 1489:
##.#.#....
..##...#..
.##..##...
..#...#...
#####...#.
#..#.#.#.#
...#.#.#..
##.#...##.
..##.##.##
###.##.#..

Tile 2473:
#....####.
#..#.##...
#.##..#...
######.#.#
.#...#.#.#
.#########
.###.#..#.
########.#
##...##.#.
..###.#.#.

Tile 2971:
..#.#....#
#...###...
#.#.###...
##.##..#..
.#####..##
.#..####.#
#..#.#..#.
..####.###
..#.#.###.
...#.#.#.#

Tile 2729:
...#.#.#.#
####.#....
..#.#.....
....#..#.#
.##..##.#.
.#.####...
####.#.#..
##.####...
##..#.##..
#.##...##.

Tile 3079:
#.#.#####.
.#..######
..#.......
######....
####.#..#.
.#...#.##.
#.#####.##
..#.###...
..#.......
..#.###...`;

const { input } = require("./day20input.js");

const tiles = input
  .split("\n\n")
  .map((tile) => {
    const splitTile = tile.split("\n");
    return { [splitTile[0].match(/[0-9]/g).join("")]: splitTile.slice(1) };
  })
  .map((tile) => {
    const possibleSides = [];
    const rows = Object.values(tile)[0];
    possibleSides.push(rows[0]); // top
    possibleSides.push(rows[9]); // bottom
    let left = "",
      right = "";
    for (let i = 0; i < 10; i++) {
      left += rows[i][0];
      right += rows[i][9];
    }
    possibleSides.push(left); // left
    possibleSides.push(right); // right
    possibleSides.forEach((side) =>
      possibleSides.push(side.split("").reverse().join(""))
    );
    tile.possibleSides = possibleSides;
    return tile;
  });

const cornerTiles = tiles.filter((tile, index, arr) => {
  const matches = arr.reduce(
    (acc, cur, i) =>
      i !== index &&
      cur.possibleSides.some((side) => tile.possibleSides.includes(side))
        ? acc + 1
        : acc,
    0
  );
  return matches === 2;
});

const cornerIds = cornerTiles.map((tile) => Object.keys(tile)[0]);
const answerOne = cornerIds.reduce((acc, cur) => acc * cur);
console.log(answerOne);
