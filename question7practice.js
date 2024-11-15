// You are given an array of numbers representing points scored in a series of games. Write a
// function analyzeScores(scores, threshold) that performs the following tasks:
// Example usage :
// const scores = [55, 70, 85, 90, 60, 80, 100];
// const threshold = 75; const
// const result = analyzeScores(scores, threshold)
// 1. Filter out any scores below the given threshold.
// 2. Map the remaining scores to show a "double points" version (each score multiplied
// by 2).
// 3. Reduce the resulting array to find the total of all doubled scores.
// 4. FindIndex of the first score in the original array that is greater than the threshold.
// If it exists:
// ○ Use splice to insert "High Score" right before this score in the original
// array.
// ○ Otherwise, use push to add "High Score" to the end of the array.
// 5. Slice the array to return only the first 5 elements if it has more than 5 items, or return
// the entire array if it has 5 or fewer.
// 6. Pop off the last item from the sliced array and return both the modified array and the
// total of doubled scores.

const scores = [55, 70, 85, 90, 60, 80, 100];
const threshold = 75;

function analyzeScores(scores, threshold) {
    // filter out Any scores below the given threshold 
    const filteredScores = scores.filter(score => score >= threshold);

    // map the remaining scores to show a double points versions (each score multiplied by 2)
    const doubledScore = filteredScores.map(score => score * 2)

    // reduce the resukting arry to find the doubl(e pf all scores 
    const totalDoubledScores = doubledScore.reduce((acc, score) => acc + score, 0);
    // find the index of using find Index 
    const index = scores.findIndex(score => score > threshold);
    if (index !== -1) {
        scores.splice(index, 0, "High Score")
    } else {
        scores.push("High Score")
    }
    const modifiedArray = scores.length > 5 ? scores.slice(0, 5) : scores.slice()
    const lastItem = modifiedArray.pop();
    // return values 
    return { modifiedArray, totalDoubledScores }
}
const result = analyzeScores(scores, threshold)

console.log("Modified Array:", result.modifiedArray);
console.log("Total of Doubled Scores:", result.totalDoubledScores);
