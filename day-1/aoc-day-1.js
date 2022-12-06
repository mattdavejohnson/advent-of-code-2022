// Identify which elf has the most calories

const fs = require('fs');

function readInputFile(file) {
  let input = fs.readFileSync(file, 'utf-8');
  let results = input.split(/\r?\n/);

  return results;
}

function splitElves(arrOfCalories) {
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

  return results;
}

function findGreatestElfIndex(arr) {
  let greatest = Math.max(...arr);

  return arr.indexOf(greatest) + 1;
}

function findGreatestAmount(arr) {
  return Math.max(...arr);
}

function findTopThreeAmount(arr) {
  let sortedArr = arr.sort((a, b) => b - a);
  let topThree = sortedArr.slice(0, 3);

  return topThree.reduce((prev, curr) => prev + curr);
}

let readFile = readInputFile('./calories.txt');
let elvesArray = splitElves(readFile);
let mostCalories = findGreatestAmount(elvesArray);
let indexOfElf = findGreatestElfIndex(elvesArray);
let topThree = findTopThreeAmount(elvesArray);

console.log(`Elf with the most calories: ${indexOfElf}`);
console.log(`Amount of calories: ${mostCalories}`);
console.log(`Top three calories: ${topThree}`);
