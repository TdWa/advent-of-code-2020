const nums = require("./input1");

loop1: for (let a = 0; a < nums.length; a++) {
  for (let b = a + 1; b < nums.length; b++) {
    if (nums[a] + nums[b] === 2020) {
      console.log("answer one:", nums[a] * nums[b]);
      break loop1;
    }
  }
}

loop1: for (let a = 0; a < nums.length; a++) {
  for (let b = a + 1; b < nums.length; b++) {
    for (let c = b + 1; c < nums.length; c++) {
      if (nums[a] + nums[b] + nums[c] === 2020) {
        console.log("answer two:", nums[a] * nums[b] * nums[c]);
        break loop1;
      }
    }
  }
}
