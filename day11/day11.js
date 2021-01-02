const input = require("./input11");

const rows = input.split("\n");

const seatPeople = (seatLayout) => {
  return seatLayout.map((row, rowIndex, rows) => {
    return row
      .split("")
      .map((spot, spotIndex, spots) => {
        if (spot === ".") return spot;

        const adjacents = [
          spots[spotIndex - 1],
          spots[spotIndex + 1],
          rows[rowIndex - 1] && rows[rowIndex - 1][spotIndex - 1],
          rows[rowIndex - 1] && rows[rowIndex - 1][spotIndex],
          rows[rowIndex - 1] && rows[rowIndex - 1][spotIndex + 1],
          rows[rowIndex + 1] && rows[rowIndex + 1][spotIndex - 1],
          rows[rowIndex + 1] && rows[rowIndex + 1][spotIndex],
          rows[rowIndex + 1] && rows[rowIndex + 1][spotIndex + 1],
        ];

        if (spot === "L") return adjacents.some((a) => a === "#") ? spot : "#";

        // spot === "#"
        const occupiedAdjacents = adjacents.reduce(
          (acc, cur) => (cur === "#" ? acc + 1 : acc),
          0
        );
        return occupiedAdjacents >= 4 ? "L" : "#";
      })
      .join("");
  });
};

const repeatSeating = (newLayout, previousLayout = newLayout, n = 0) => {
  if (n === 500) return "SOMETHING WENT WRONG";
  n++;
  if (n > 1 && newLayout.every((row, i) => row === previousLayout[i]))
    return newLayout;
  return repeatSeating(seatPeople(newLayout), newLayout, n);
};

const stableSeating = repeatSeating(rows);

const seatCount = stableSeating.reduce((acc, cur) => {
  return acc + cur.match(/#/g).length;
}, 0);

// ANSWER ONE:
console.log("ANSWER ONE:", seatCount);

///////// PART TWO /////////

const firstVisibleOccupied = (
  direction,
  map,
  rows,
  rowIndex,
  spots,
  spotIndex
) => {
  switch (direction) {
    case "TOP": {
      for (let i = rowIndex - 1; i >= 0; i--) {
        if (rows[i][spotIndex] === "#") return true;
        if (rows[i][spotIndex] === "L") return false;
      }
      return false;
    }
    case "BOTTOM": {
      for (let i = rowIndex + 1; i < rows.length; i++) {
        if (rows[i][spotIndex] === "#") return true;
        if (rows[i][spotIndex] === "L") return false;
      }
      return false;
    }
    case "LEFT": {
      for (let i = spotIndex - 1; i >= 0; i--) {
        if (spots[i] === "#") return true;
        if (spots[i] === "L") return false;
      }
      return false;
    }
    case "RIGHT": {
      for (let i = spotIndex + 1; i < spots.length; i++) {
        if (spots[i] === "#") return true;
        if (spots[i] === "L") return false;
      }
      return false;
    }
    case "TOP_LEFT": {
      for (
        let i = rowIndex - 1, j = spotIndex - 1;
        i >= 0 && j >= 0;
        i--, j--
      ) {
        if (map[i][j] === "#") return true;
        if (map[i][j] === "L") return false;
      }
      return false;
    }
    case "TOP_RIGHT": {
      for (
        let i = rowIndex - 1, j = spotIndex + 1;
        i >= 0 && j < spots.length;
        i--, j++
      ) {
        if (map[i][j] === "#") return true;
        if (map[i][j] === "L") return false;
      }
      return false;
    }
    case "BOTTOM_LEFT": {
      for (
        let i = rowIndex + 1, j = spotIndex - 1;
        i < rows.length && j >= 0;
        i++, j--
      ) {
        if (map[i][j] === "#") return true;
        if (map[i][j] === "L") return false;
      }
      return false;
    }
    case "BOTTOM_RIGHT": {
      for (
        let i = rowIndex + 1, j = spotIndex + 1;
        i < rows.length && j < spots.length;
        i++, j++
      ) {
        if (map[i][j] === "#") return true;
        if (map[i][j] === "L") return false;
      }
      return false;
    }
    default: {
      console.log("DEFAULT CASE, Something went wrong...");
    }
  }
};

const seatPeople2 = (seatLayout) => {
  return seatLayout.map((row, rowIndex, rows) => {
    return row
      .split("")
      .map((spot, spotIndex, spots) => {
        if (spot === ".") return spot;

        const firstVisibles = [
          firstVisibleOccupied(
            "TOP_LEFT",
            seatLayout,
            rows,
            rowIndex,
            spots,
            spotIndex
          ),
          firstVisibleOccupied(
            "TOP",
            seatLayout,
            rows,
            rowIndex,
            spots,
            spotIndex
          ),
          firstVisibleOccupied(
            "TOP_RIGHT",
            seatLayout,
            rows,
            rowIndex,
            spots,
            spotIndex
          ),
          firstVisibleOccupied(
            "LEFT",
            seatLayout,
            rows,
            rowIndex,
            spots,
            spotIndex
          ),
          firstVisibleOccupied(
            "RIGHT",
            seatLayout,
            rows,
            rowIndex,
            spots,
            spotIndex
          ),
          firstVisibleOccupied(
            "BOTTOM_LEFT",
            seatLayout,
            rows,
            rowIndex,
            spots,
            spotIndex
          ),
          firstVisibleOccupied(
            "BOTTOM",
            seatLayout,
            rows,
            rowIndex,
            spots,
            spotIndex
          ),
          firstVisibleOccupied(
            "BOTTOM_RIGHT",
            seatLayout,
            rows,
            rowIndex,
            spots,
            spotIndex
          ),
        ];

        if (spot === "L")
          return firstVisibles.some((f) => f === true) ? spot : "#";

        // spot === "#"
        const occupiedVisibles = firstVisibles.reduce(
          (acc, cur) => (cur === true ? acc + 1 : acc),
          0
        );
        return occupiedVisibles >= 5 ? "L" : "#";
      })
      .join("");
  });
};

const repeatSeating2 = (newLayout, previousLayout = newLayout, n = 0) => {
  if (n === 500) return "SOMETHING WENT WRONG";
  n++;
  if (n > 1 && newLayout.every((row, i) => row === previousLayout[i]))
    return newLayout;
  return repeatSeating2(seatPeople2(newLayout), newLayout, n);
};

const stableSeating2 = repeatSeating2(rows);

const seatCount2 = stableSeating2.reduce((acc, cur) => {
  return acc + cur.match(/#/g).length;
}, 0);

// ANSWER TWO:
console.log("ANSWER TWO:", seatCount2);

// const test = [
//   "L.LL.LL.LL",
//   "LLLLLLL.LL",
//   "L.L.L..L..",
//   "LLLL.LL.LL",
//   "L.LL.LL.LL",
//   "L.LLLLL.LL",
//   "..L.L.....",
//   "LLLLLLLLLL",
//   "L.LLLLLL.L",
//   "L.LLLLL.LL",
// ];

// const stableTest = repeatSeating2(test);
// testCount = stableTest.reduce((acc, cur) => {
//   return acc + cur.match(/#/g).length;
// }, 0);

// console.log(testCount);
