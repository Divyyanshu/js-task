// Task 1: Add and Remove Elements Conditionally
// 1. Create an array of your favorite movies.
// 2. Add a new movie only if it doesn’t already exist in the array.
// 3. Remove the last movie if the array length exceeds 5.


let favMovies = ["ddlj", "kick", "spiderman", "msdhoni", "stree"];

// addition movie 
function addmovie(movie) {
    if (!favMovies.includes(movie)) {
        favMovies.push(movie);
        console.log(`${movie} this movie has been added in the list`)
    } else {
        console.log(`${movie} this movie is already in the list`)
    }
    // removal movie
    if (favMovies.length > 5) {
        const removeMovie = favMovies.pop(movie)
        console.log(`${removeMovie} this movie is removed in the list for exceed the list size by 6`)
    }
}


addmovie("spiderman");
console.log(favMovies)

// -----------------------------------------------------------------------
// Task 2: Find and Add Elements Based on Index
// 1. Create an array of different fruit names.
// 2. Find the index of a specific fruit (e.g., "apple") using findIndex.
// 3. If it exists, add a new fruit right before it using splice. If it doesn’t, add it to the start
// using unshift.

let fruits = ["mango", "banana", "orange", "watermallon", "gavava"];


// find the index of specific fruit 

function addFruitsBefore(targetFruit , newFruit){
const index = fruits.findIndex(fruit=>fruit === targetFruit)
if(index !== -1){
    fruits.splice(index , 0 , newFruit)
    console.log(`"${newFruit}" added before "${targetFruit}"`)
}else{
    fruits.unshift(targetFruit);
        console.log(`"${targetFruit}" added at the start of the list`)
}
}

addFruitsBefore("apple", "carrot")
console.log(fruits);
addFruitsBefore("orange" ,"strawberry")
console.log(fruits);
// -----------------------------------------------------------------------

/*Task 3: Copy and Modify an Array
1. Create an array of numbers from 1 to 10.
2. Use slice to copy the first half of the array (1-5) into a new array.
3. Add a new number to the copied array using push without affecting the original array.*/

let Number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let HalfNumber = Number.slice(0, 5)
function halfarray(addnumber) {
    return HalfNumber.push(addnumber)
}
halfarray(65)

console.log(HalfNumber)
console.log(Number)

// -----------------------------------------------------------------------
// Task 4: Search and Update Based on Condition
// 1. Create an array of products, including duplicates.
// 2. If a specific product (e.g., "phone") is found, remove it from the array using splice.
// 3. If not found, add it to the beginning using unshift.

let products = ["ac ", "tv", "phone", "washingmachine", "trimmer", "phone" , "mobile"];
const updateProductList = (product) => {
    const index = products.indexOf(product);
    if (index !== -1) {
        products.splice(index, 1)
        console.log(`"${product}" is found and remove from the list`)
    } else {
        products.unshift(product)
        console.log(`"${product}" is not found and added the products in the list`)
    }
}

console.log(products);
updateProductList("phone")
console.log(products)

updateProductList("earphone")
console.log(products)

// --------------------------------------------------------------------------

// Task 5: Count Unique Items
// 1. Create an array of random numbers with some duplicates.
// 2. Use a loop and includes to create a new array of unique numbers only.


let numbers = [12, 4, 5, 9, 74, 15, 4, 9, 5, 77, 12];
let uniqueNumber = [];

for (let number of numbers){
    if(!uniqueNumber.includes(number)){
        uniqueNumber.push(number)
    }
}

console.log("original array is :" , numbers)
console.log("uniqenumber array is :" , uniqueNumber)

// -------------------------------------------------------------------------------
// Task 6: Check and Insert Condition
// 1. Create an array of cities.
// 2. If the array doesn't include a certain city (e.g., "New York"), add it at the beginning
// with unshift.
// 3. If it’s already there, add a new city at the end using push.

let cities = ["jaipur", "bhilwara", "udaipur", "jhodpur", "chittor"];

if (!cities.includes("kota")) {
    cities.unshift("kota")
} else {
    cities.push("ajmer")
}

console.log(cities)

// --------------------------------------------------------------------------------
// task 7. 


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
  
// -----------------------------------------------------------------

/*Task 8: Remove and Check Array Length
1. Create an array with several items.
2. Remove items from the end using pop until the array has only 3 items left.*/

let items = ["Apple", "Banana", "Cherry", "Date", "Elderberry", "Fig", "Grape"];

while (items.length > 3) {
    items.pop();
}
console.log(items)
console.log(`${items.length} is array present after done the operation using pop()`)

// -----------------------------------------------------------------------------------

// Task 9: Identify and Split an Array
// 1. Create an array of scores (both high and low values).
// 2. Use findIndex to locate the first score over 80.
// 3. Use slice to separate scores before and after this index.


const Scores = [45, 67, 80, 89, 23, 92, 74, 88, 55];

let firstHighscoreIndex = Scores.findIndex(score => score > 80)
console.log(firstHighscoreIndex)

let highScores = Scores.slice(0, firstHighscoreIndex)
console.log(highScores)
let lowScores = Scores.slice(firstHighscoreIndex)
console.log(lowScores)

console.log(Scores)

// ---------------------------------------------------------------------------------

// Task 10: Extract and Combine Lists
// 1. Create two arrays of student names.
// 2. Use slice to get the first three students from each list.
// 3. Use concat to combine these slices into a new array.

const studentData1 = ["divyanshu", "harsh", "ankit", "rahul", "pratham"];
console.log(studentData1);
const studentData2 = ["mayank", "kshitij", "prakhar", "aditya", "ankush"];
console.log(studentData2);

const sliceStudent1 = studentData1.slice(0, 3);
console.log(sliceStudent1);
const sliceStudent2 = studentData2.slice(0, 3);
console.log(sliceStudent2);

const newStudentDataConcnat = sliceStudent1.concat(sliceStudent2);
// const newStudentData = sliceStudent1 + sliceStudent2   
// its give string data not in array formation dont use this type of add two array use concat() method
console.log(newStudentDataConcnat);

// ---------------------------------------------------------------------------------

// Task 11: Modify Based on Condition
// 1. Create an array of employee names.
// 2. Use a loop and includes to check if "John" exists in the array:
// ○ If he exists, use splice to replace "John" with "Jonathan."
// ○ If not, add "John" to the end using push.


const employeName = ["jai", "mayank", "divyanshu", "riya", "sahaj", "pratham", "dipti"];

if (employeName.includes("riya")) {
    let newEmploye = employeName.indexOf("riya")
    employeName.splice(newEmploye, 1, "Kshitij")
} else {
    employeName.push("riya")
}
console.log(employeName)

// ---------------------------------------------------------------------------------------