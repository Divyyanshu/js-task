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