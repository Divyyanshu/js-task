// Task 8: Identify and Split an Array
// 1. Create an array of scores (both high and low values).
// 2. Use findIndex to locate the first score over 80.
// 3. Use slice to separate scores before and after this index.


let scores = [45, 67, 80, 89, 23, 92, 74, 88, 55];

let firstHighscoreIndex = scores.findIndex(score => score > 80)
console.log(firstHighscoreIndex)

let highScores = scores.slice(0, firstHighscoreIndex)
console.log(highScores)
let lowScores = scores.slice(firstHighscoreIndex)
console.log(lowScores)

console.log(scores)