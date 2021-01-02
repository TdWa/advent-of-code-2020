const input = require("./input12");

const move1 = (action, facingDirection, horizontal, vertical) => {
  switch (action[0]) {
    case "N":
      vertical += action[1];
      break;
    case "S":
      vertical -= action[1];
      break;
    case "E":
      horizontal += action[1];
      break;
    case "W":
      horizontal -= action[1];
      break;
    case "L": {
      const newDirection = facingDirection - action[1];
      facingDirection = newDirection < 0 ? 360 + newDirection : newDirection;
      break;
    }
    case "R": {
      const newDirection = facingDirection + action[1];
      facingDirection = newDirection > 270 ? newDirection - 360 : newDirection;
      break;
    }
    case "F":
      if (facingDirection === 0) {
        vertical += action[1];
      } else if (facingDirection === 90) {
        horizontal += action[1];
      } else if (facingDirection === 180) {
        vertical -= action[1];
      } else if (facingDirection === 270) {
        horizontal -= action[1];
      }
      break;
    default: {
      console.log("what is action?", action);
      throw "Default case - Unexpected action!";
    }
  }

  return { facingDirection, horizontal, vertical };
};

const move2 = (
  action,
  waypointHorizontal,
  waypointVertical,
  horizontal,
  vertical
) => {
  switch (action[0]) {
    case "N":
      waypointVertical += action[1];
      break;
    case "S":
      waypointVertical -= action[1];
      break;
    case "E":
      waypointHorizontal += action[1];
      break;
    case "W":
      waypointHorizontal -= action[1];
      break;
    case "L": {
      if (action[1] === 90) {
        const temp = waypointHorizontal;
        waypointHorizontal = -waypointVertical;
        waypointVertical = temp;
      } else if (action[1] === 180) {
        waypointHorizontal = -waypointHorizontal;
        waypointVertical = -waypointVertical;
      } else if (action[1] === 270) {
        const temp = waypointHorizontal;
        waypointHorizontal = waypointVertical;
        waypointVertical = -temp;
      }
      break;
    }
    case "R": {
      if (action[1] === 90) {
        const temp = waypointHorizontal;
        waypointHorizontal = waypointVertical;
        waypointVertical = -temp;
      } else if (action[1] === 180) {
        waypointHorizontal = -waypointHorizontal;
        waypointVertical = -waypointVertical;
      } else if (action[1] === 270) {
        const temp = waypointHorizontal;
        waypointHorizontal = -waypointVertical;
        waypointVertical = temp;
      }
      break;
    }
    case "F":
      horizontal += waypointHorizontal * action[1];
      vertical += waypointVertical * action[1];
      break;
    default: {
      console.log("what is action?", action);
      throw "Default case - Unexpected action!";
    }
  }

  return { waypointHorizontal, waypointVertical, horizontal, vertical };
};

const test = ["F10", "N3", "F7", "R90", "F11"];

const actions = input.map((action) => [action[0], Number(action.slice(1))]);

const finalPosition1 = actions.reduce(
  (acc, cur) => {
    // console.log("ACC:", acc, "CUR:", cur);
    return move1(cur, acc.facingDirection, acc.horizontal, acc.vertical);
  },
  {
    facingDirection: 90,
    horizontal: 0,
    vertical: 0,
  }
);

const answerOne =
  Math.abs(finalPosition1.horizontal) + Math.abs(finalPosition1.vertical);

console.log(answerOne);

const finalPosition2 = actions.reduce(
  (acc, cur) => {
    // console.log("ACC:", acc, "CUR:", cur);
    return move2(
      cur,
      acc.waypointHorizontal,
      acc.waypointVertical,
      acc.horizontal,
      acc.vertical
    );
  },
  {
    waypointHorizontal: 10,
    waypointVertical: 1,
    horizontal: 0,
    vertical: 0,
  }
);

const answerTwo =
  Math.abs(finalPosition2.horizontal) + Math.abs(finalPosition2.vertical);

console.log(answerTwo);
