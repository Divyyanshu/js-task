/*Task 7: Remove and Check Array Length
1. Create an array with several items.
2. Remove items from the end using pop until the array has only 3 items left.*/

let items = ["Apple", "Banana", "Cherry", "Date", "Elderberry", "Fig", "Grape"];

while (items.length > 3) {
    items.pop();
}
console.log(items)
console.log(`${items.length} is array present after done the operation using pop()`)