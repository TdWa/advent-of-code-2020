const input = require("./input21");

const formattedFoods = input.map((food) => {
  return food
    .slice(0, food.length - 1)
    .split(" (contains ")
    .map((list, i) => {
      if (i === 0) return list.split(" ");
      if (i === 1) return list.split(", ");
    });
});

const findOnlyCommon = (foods) =>
  foods.map((food) => {
    const newIngredients = food[0].filter((ingredient) =>
      foods.every((food) => food[0].includes(ingredient))
    );

    return [newIngredients, food[1]];
  });

const filterByAllergen = (allergen, foods) =>
  foods.filter((food) => food[1].includes(allergen));

const allAllergens = [
  ...new Set(formattedFoods.flatMap((allergen) => allergen[1])),
];

// console.log("ALL ALLERGENS:", allAllergens);

// allAllergens.forEach((allergen) => {
//   console.log("ALLERGEN:", allergen);
//   console.log(findOnlyCommon(filterByAllergen(allergen, formattedFoods)));
//   console.log();
// });

/*
I can deduce the following allergen - ingredient combos from the logs above
[
['soy', 'bvcrrfbr'],
['fish', 'xhrdsl'],
['nuts', 'vndrb'],
['sesame', 'lbnmsr'],
['dairy', 'bcdgf' ],
['wheat', 'xcgtv'],
['peanuts', 'dhbxtb' ],
['shellfish', 'scxxn'],
]
*/

const answerOne = formattedFoods
  .map((food) =>
    food[0].filter(
      (ingredient) =>
        ingredient !== "bvcrrfbr" &&
        ingredient !== "xhrdsl" &&
        ingredient !== "vndrb" &&
        ingredient !== "lbnmsr" &&
        ingredient !== "bcdgf" &&
        ingredient !== "xcgtv" &&
        ingredient !== "dhbxtb" &&
        ingredient !== "scxxn"
    )
  )
  .reduce((acc, cur) => acc + cur.length, 0);

console.log(answerOne);

// just formatted from the comment above
const answerTwo = "bcdgf,xhrdsl,vndrb,dhbxtb,lbnmsr,scxxn,bvcrrfbr,xcgtv";
