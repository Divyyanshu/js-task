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
