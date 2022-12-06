// Identify which elf has the most calories

function elfWithMostCalories(arrOfCalories) {
  let total = 0;
  let results = [];

  arrOfCalories.forEach((entry, index) => {
    if (entry) {
      total += entry;
    } else {
      results.push(total);
      total = 0;
    }

    if (index === arrOfCalories.length - 1) {
      results.push(total);
    }
  });

  return findGreatestIndex(results) + 1;
}

function findGreatestIndex(arr) {
  let greatest = Math.max(...arr);

  return arr.indexOf(greatest);
}

const calories = [
  1000,
  2000,
  3000,
  '',
  4000,
  '',
  5000,
  6000,
  '',
  7000,
  8000,
  9000,
  '',
  10000,
];

console.log(`Elf with the most calories: ${elfWithMostCalories(calories)}`);
