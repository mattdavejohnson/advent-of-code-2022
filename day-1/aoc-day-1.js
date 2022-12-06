// Identify which elf has the most calories

const fs = require('fs');

function readInputFile(file) {
  let input = fs.readFileSync(file, 'utf-8');
  let results = input.split(/\r?\n/);

  return results;
}

function elfWithMostCalories(arrOfCalories) {
  let total = 0;
  let results = [];

  arrOfCalories.forEach((entry, index) => {
    if (entry) {
      total += Number(entry);
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

let readFile = readInputFile('./calories.txt');

console.log(`Elf with the most calories: ${elfWithMostCalories(readFile)}`);
