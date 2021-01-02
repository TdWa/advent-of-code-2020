const input = require("./input24");

const test = [
  "sesenwnenenewseeswwswswwnenewsewsw",
  "neeenesenwnwwswnenewnwwsewnenwseswesw",
  "seswneswswsenwwnwse",
  "nwnwneseeswswnenewneswwnewseswneseene",
  "swweswneswnenwsewnwneneseenw",
  "eesenwseswswnenwswnwnwsewwnwsene",
  "sewnenenenesenwsewnenwwwse",
  "wenwwweseeeweswwwnwwe",
  "wsweesenenewnwwnwsenewsenwwsesesenwne",
  "neeswseenwwswnwswswnw",
  "nenwswwsewswnenenewsenwsenwnesesenew",
  "enewnwewneswsewnwswenweswnenwsenwsw",
  "sweneswneswneneenwnewenewwneswswnese",
  "swwesenesewenwneswnwwneseswwne",
  "enesenwswwswneneswsenwnewswseenwsese",
  "wnwnesenesenenwwnenwsewesewsesesew",
  "nenewswnwewswnenesenwnesewesw",
  "eneswnwswnwsenenwnwnwwseeswneewsenese",
  "neswnwewnwnwseenwseesewsenwsweewe",
  "wseweeenwnesenwwwswnew",
];

const tiles = input.map((tile) =>
  tile.replace(/w/g, "w ").replace(/e/g, "e ").replace(/ $/, "").split(" ")
);

const destinations = tiles.map((tile) => {
  const position = { x: 0, y: 0 };
  tile.forEach((direction) => {
    switch (direction) {
      case "e":
        position.x++;
        break;
      case "se":
        position.x += 0.5;
        position.y--;
        break;
      case "sw":
        position.x -= 0.5;
        position.y--;
        break;
      case "w":
        position.x--;
        break;
      case "nw":
        position.x -= 0.5;
        position.y++;
        break;
      case "ne":
        position.x += 0.5;
        position.y++;
        break;
      default:
        throw new Error("default case reached");
    }
  });
  return position;
});

const floor = destinations.map((destination) => {
  const count = destinations.reduce(
    (acc, cur) =>
      JSON.stringify(cur) === JSON.stringify(destination) ? acc + 1 : acc,
    0
  );
  return count % 2 === 1
    ? { ...destination, color: "black" }
    : { ...destination, color: "white" };
});

const countBlackTiles = (floor) =>
  floor.reduce((acc, cur) => (cur.color === "black" ? acc + 1 : acc), 0);

const answerOne = countBlackTiles(floor);
console.log("answer one:", answerOne);

///// PART TWO /////

const uniqueTiles = [...new Set(floor.map((t) => JSON.stringify(t)))].map((t) =>
  JSON.parse(t)
);

// insert missing tiles (floor size was a bit of a guess..):
for (
  let y = -100, x = -100;
  y < 101;
  y++, y % 2 === 0 ? (x = -100) : (x = -100.5)
) {
  for (x; x < 101; x++) {
    const newTile = { x, y, color: "white" };
    if (
      !uniqueTiles.some((tile) => tile.x === newTile.x && tile.y === newTile.y)
    ) {
      uniqueTiles.push(newTile);
    }
  }
}

const tilesWithTheirNeighbors = uniqueTiles.map((tile) => {
  const neighbors = [];
  for (let i = 0; i < uniqueTiles.length; i++) {
    if (
      (uniqueTiles[i].x === tile.x + 1 && uniqueTiles[i].y === tile.y) || // e
      (uniqueTiles[i].x === tile.x - 1 && uniqueTiles[i].y === tile.y) || // w
      (uniqueTiles[i].x === tile.x + 0.5 && // ne
        uniqueTiles[i].y === tile.y + 1) ||
      (uniqueTiles[i].x === tile.x + 0.5 && // se
        uniqueTiles[i].y === tile.y - 1) ||
      (uniqueTiles[i].x === tile.x - 0.5 && // nw
        uniqueTiles[i].y === tile.y + 1) ||
      (uniqueTiles[i].x === tile.x - 0.5 && uniqueTiles[i].y === tile.y - 1) // sw
    ) {
      neighbors.push(i);
    }
  }
  return { ...tile, neighbors };
});

const getNextTiles = (floor) =>
  floor.map((tile) => {
    const blackNeighbors = countBlackTiles(tile.neighbors.map((n) => floor[n]));
    if (tile.color === "black") {
      return blackNeighbors === 1 || blackNeighbors === 2
        ? { ...tile, color: "black" }
        : { ...tile, color: "white" };
    }
    return blackNeighbors === 2
      ? { ...tile, color: "black" }
      : { ...tile, color: "white" };
  });

const hundredDays = (floor, i = 0) => {
  if (i === 100) return floor;
  const nextFloor = getNextTiles(floor);
  return hundredDays(nextFloor, i + 1);
};

const finalFloor = hundredDays(tilesWithTheirNeighbors);
const answerTwo = countBlackTiles(finalFloor);
console.log("answer two:", answerTwo);
