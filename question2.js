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