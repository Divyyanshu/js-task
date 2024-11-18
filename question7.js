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

function analyzeScores(scores, threshold) {
    // Step 1: Filter out scores below the threshold
    const filteredScores = scores.filter(score => score >= threshold);
    
    // Step 2: Map the remaining scores to double points
    const doubledScores = filteredScores.map(score => score * 2);
    
    // Step 3: Reduce to find the total of all doubled scores
    const totalDoubledScores = doubledScores.reduce((acc, score) => acc + score, 0);
    
    // Step 4: Find index of the first score greater than threshold in original array
    const index = scores.findIndex(score => score > threshold);
    
    if (index !== -1) {
      // Insert "High Score" before the found score
      scores.splice(index, 0, "High Score");
    } else {
      // If no score is above the threshold, push "High Score" to the end
      scores.push("High Score");
    }
  
    // Step 5: Slice the array to get the first 5 elements if there are more than 5
    const modifiedArray = scores.length > 5 ? scores.slice(0, 5) : scores.slice();
    
    // Step 6: Pop off the last item from the sliced array
    const lastItem = modifiedArray.pop();
  
    // Return the modified array and the total of doubled scores
    return { modifiedArray, totalDoubledScores };
  }
  
  // Example usage
  const scores = [55, 70, 85, 90, 60, 80, 100];
  const threshold = 75;
  const result = analyzeScores(scores, threshold);
  
  console.log("Modified Array:", result.modifiedArray);
  console.log("Total of Doubled Scores:", result.totalDoubledScores);
  