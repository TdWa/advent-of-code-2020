const input = [
  "...#..#.",
  "#..#...#",
  ".....###",
  "##....##",
  "......##",
  "........",
  ".#......",
  "##...#..",
];

const test = [".#.", "..#", "###"];

const firstSlice = input.map((row) => [
  ..."......".split(""),
  ...row.split(""),
  ..."......".split(""),
]);

const padder = (".".repeat(firstSlice[0].length) + " ")
  .repeat(6)
  .split(" ")
  .slice(0, 6)
  .map((row) => row.split(""));

firstSlice.unshift(...padder);
firstSlice.push(...padder);

const emptyslice = firstSlice.map((row) => row.map((cube) => "."));

const matrix = [firstSlice];

for (let i = 0; i < 6; i++) {
  matrix.unshift(emptyslice);
}
for (let i = 0; i < 6; i++) {
  matrix.push(emptyslice);
}

const runCycle = (matrix) =>
  matrix.map((slice, zIndex) =>
    slice.map((row, yIndex) =>
      row.map((cube, xIndex) => {
        const surrounders = [];

        // left & right
        surrounders.push(row[xIndex - 1], row[xIndex + 1]);
        // front and back
        slice[yIndex - 1] &&
          surrounders.push(
            ...slice[yIndex - 1].slice(
              xIndex === 0 ? 0 : xIndex - 1,
              xIndex + 2
            )
          );
        slice[yIndex + 1] &&
          surrounders.push(
            ...slice[yIndex + 1].slice(
              xIndex === 0 ? 0 : xIndex - 1,
              xIndex + 2
            )
          );

        // under
        if (matrix[zIndex - 1]) {
          matrix[zIndex - 1][yIndex - 1] &&
            surrounders.push(
              ...matrix[zIndex - 1][yIndex - 1].slice(
                xIndex === 0 ? 0 : xIndex - 1,
                xIndex + 2
              )
            );
          matrix[zIndex - 1][yIndex] &&
            surrounders.push(
              ...matrix[zIndex - 1][yIndex].slice(
                xIndex === 0 ? 0 : xIndex - 1,
                xIndex + 2
              )
            );
          matrix[zIndex - 1][yIndex + 1] &&
            surrounders.push(
              ...matrix[zIndex - 1][yIndex + 1].slice(
                xIndex === 0 ? 0 : xIndex - 1,
                xIndex + 2
              )
            );
        }
        // above
        if (matrix[zIndex + 1]) {
          matrix[zIndex + 1][yIndex - 1] &&
            surrounders.push(
              ...matrix[zIndex + 1][yIndex - 1].slice(
                xIndex === 0 ? 0 : xIndex - 1,
                xIndex + 2
              )
            );
          matrix[zIndex + 1][yIndex] &&
            surrounders.push(
              ...matrix[zIndex + 1][yIndex].slice(
                xIndex === 0 ? 0 : xIndex - 1,
                xIndex + 2
              )
            );
          matrix[zIndex + 1][yIndex + 1] &&
            surrounders.push(
              ...matrix[zIndex + 1][yIndex + 1].slice(
                xIndex === 0 ? 0 : xIndex - 1,
                xIndex + 2
              )
            );
        }

        const activeNeighbors = surrounders.reduce(
          (acc, cur) => (cur === "#" ? acc + 1 : acc),
          0
        );

        if (cube === ".") {
          return activeNeighbors === 3 ? "#" : ".";
        } else {
          return activeNeighbors === 3 || activeNeighbors === 2 ? "#" : ".";
        }
      })
    )
  );

const runCyclesTimesN = (matrix, n) =>
  n === 0 ? matrix : runCyclesTimesN(runCycle(matrix), n - 1);

const countActive = (matrix) =>
  matrix.reduce((sliceAcc, sliceCur) => {
    return (
      sliceAcc +
      sliceCur.reduce((rowAcc, rowCur) => {
        return (
          rowAcc +
          rowCur.reduce(
            (cubeAcc, cubeCur) => (cubeCur === "#" ? cubeAcc + 1 : cubeAcc),
            0
          )
        );
      }, 0)
    );
  }, 0);

const sixCycles = runCyclesTimesN(matrix, 6);

////// ANSWER ONE ///////
console.log("Answer one:", countActive(sixCycles));

////// PART TWO /////////

const matrixPadder = [];
for (let i = 0; i < 13; i++) {
  matrixPadder.push(emptyslice);
}

const matrix4D = [matrix];
for (let i = 0; i < 6; i++) {
  matrix4D.unshift(matrixPadder);
}
for (let i = 0; i < 6; i++) {
  matrix4D.push(matrixPadder);
}

const runCycle4D = (matrix4D) =>
  matrix4D.map((matrix, wIndex) =>
    matrix.map((slice, zIndex) =>
      slice.map((row, yIndex) =>
        row.map((cube, xIndex) => {
          const surrounders = [];

          //current Matrix
          // left & right
          surrounders.push(row[xIndex - 1], row[xIndex + 1]);
          // front and back
          slice[yIndex - 1] &&
            surrounders.push(
              ...slice[yIndex - 1].slice(
                xIndex === 0 ? 0 : xIndex - 1,
                xIndex + 2
              )
            );
          slice[yIndex + 1] &&
            surrounders.push(
              ...slice[yIndex + 1].slice(
                xIndex === 0 ? 0 : xIndex - 1,
                xIndex + 2
              )
            );

          // under
          if (matrix[zIndex - 1]) {
            matrix[zIndex - 1][yIndex - 1] &&
              surrounders.push(
                ...matrix[zIndex - 1][yIndex - 1].slice(
                  xIndex === 0 ? 0 : xIndex - 1,
                  xIndex + 2
                )
              );
            matrix[zIndex - 1][yIndex] &&
              surrounders.push(
                ...matrix[zIndex - 1][yIndex].slice(
                  xIndex === 0 ? 0 : xIndex - 1,
                  xIndex + 2
                )
              );
            matrix[zIndex - 1][yIndex + 1] &&
              surrounders.push(
                ...matrix[zIndex - 1][yIndex + 1].slice(
                  xIndex === 0 ? 0 : xIndex - 1,
                  xIndex + 2
                )
              );
          }
          // above
          if (matrix[zIndex + 1]) {
            matrix[zIndex + 1][yIndex - 1] &&
              surrounders.push(
                ...matrix[zIndex + 1][yIndex - 1].slice(
                  xIndex === 0 ? 0 : xIndex - 1,
                  xIndex + 2
                )
              );
            matrix[zIndex + 1][yIndex] &&
              surrounders.push(
                ...matrix[zIndex + 1][yIndex].slice(
                  xIndex === 0 ? 0 : xIndex - 1,
                  xIndex + 2
                )
              );
            matrix[zIndex + 1][yIndex + 1] &&
              surrounders.push(
                ...matrix[zIndex + 1][yIndex + 1].slice(
                  xIndex === 0 ? 0 : xIndex - 1,
                  xIndex + 2
                )
              );
          }

          // previous and next Matrix:
          if (matrix4D[wIndex - 1]) {
            const matrixNeighbors = matrix4D[wIndex - 1]
              .filter((slice, sliceIndex) => Math.abs(sliceIndex - zIndex) < 2)
              .flatMap((slice) =>
                slice
                  .filter((row, rowIndex) => Math.abs(rowIndex - yIndex) < 2)
                  .flatMap((row) =>
                    row.filter(
                      (cube, cubeIndex) => Math.abs(cubeIndex - xIndex) < 2
                    )
                  )
              );
            surrounders.push(...matrixNeighbors);
          }
          if (matrix4D[wIndex + 1]) {
            const matrixNeighbors = matrix4D[wIndex + 1]
              .filter((slice, sliceIndex) => Math.abs(sliceIndex - zIndex) < 2)
              .flatMap((slice) =>
                slice
                  .filter((row, rowIndex) => Math.abs(rowIndex - yIndex) < 2)
                  .flatMap((row) =>
                    row.filter(
                      (cube, cubeIndex) => Math.abs(cubeIndex - xIndex) < 2
                    )
                  )
              );
            surrounders.push(...matrixNeighbors);
          }

          const activeNeighbors = surrounders.reduce(
            (acc, cur) => (cur === "#" ? acc + 1 : acc),
            0
          );

          if (cube === ".") {
            return activeNeighbors === 3 ? "#" : ".";
          } else {
            return activeNeighbors === 3 || activeNeighbors === 2 ? "#" : ".";
          }
        })
      )
    )
  );

const run4DCyclesTimesN = (matrix4D, n) =>
  n === 0 ? matrix4D : run4DCyclesTimesN(runCycle4D(matrix4D), n - 1);

const countActive4D = (matrix4D) =>
  matrix4D.reduce((matrixAcc, matrixCur) => {
    return (
      matrixAcc +
      matrixCur.reduce((sliceAcc, sliceCur) => {
        return (
          sliceAcc +
          sliceCur.reduce((rowAcc, rowCur) => {
            return (
              rowAcc +
              rowCur.reduce(
                (cubeAcc, cubeCur) => (cubeCur === "#" ? cubeAcc + 1 : cubeAcc),
                0
              )
            );
          }, 0)
        );
      }, 0)
    );
  }, 0);

const sixCycles4D = run4DCyclesTimesN(matrix4D, 6);

console.log("Answer two:", countActive4D(sixCycles4D));
