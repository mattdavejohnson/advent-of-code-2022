// Identify total score following strategy guide

const fs = require('fs');

const SHAPE_SCORE = {
  A: 1,
  X: 1,
  B: 2,
  Y: 2,
  C: 3,
  Z: 3,
};

const OUTCOME_SCORE = {
  win: 6,
  draw: 3,
  lose: 0,
};

const OUTCOME = {
  AX: 'draw',
  AY: 'win',
  AZ: 'lose',
  BX: 'lose',
  BY: 'draw',
  BZ: 'win',
  CX: 'win',
  CY: 'lose',
  CZ: 'draw',
};

// let data = [
//   ['A', 'Y'],
//   ['B', 'X'],
//   ['C', 'Z'],
// ];

function formatData(arr) {
  let results = [];

  arr.forEach((subArr) => {
    let split = subArr.split(' ');
    results.push(split);
  });

  return results;
}

function playerResult(opponent, player) {
  return OUTCOME[opponent + player];
}

function singleGameScore(result, move) {
  return OUTCOME_SCORE[result] + SHAPE_SCORE[move];
}

function totalGameScore(movesArr) {
  let scores = movesArr.map((arr) => {
    let opponentMove = arr[0];
    let playerMove = arr[1];
    let outcome = playerResult(opponentMove, playerMove);
    let score = singleGameScore(outcome, playerMove);

    return score;
  });

  let finalScore = scores.reduce((acc, curr) => {
    return acc + curr;
  }, 0);

  return finalScore;
}

let inputData = fs.readFileSync('./rounds.txt', 'utf-8').split('\n');
let formattedInput = formatData(inputData);
let finalScore = totalGameScore(formattedInput);

console.log(finalScore);
