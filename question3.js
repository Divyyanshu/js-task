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
