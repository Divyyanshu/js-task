// 1. test
const mapArray = [2, 4, 6, 8];

const MapResult = mapArray.map((item) => {
    return (item = item * 3);
});
console.log(MapResult);

// task 2

const numbersFilter = [5, 12, 8, 20, 1];

const filterOutput = numbersFilter.filter((item) => {
    return (item = item > 10);
});

console.log(filterOutput);

const fruits = ["apple", "banana", "cherry"];

const fruitsJoinOutput = fruits.join("-");
console.log(fruitsJoinOutput);

// task3
// diffrence forEach() and map()

// forEach() does not return a value; it executes a function for each element but always returns undefined.
// map() returns a new array containing the results of applying the provided function to each element in the original array.

// task 6
const obj = {
    x: 10,
    y: 20,
    z: 30,
};

const ObjectEntry = Object.entries(obj);
console.log(ObjectEntry);

const Array = ObjectEntry.forEach((element) => {
    const [key, value] = element; //Object destructoring method
    console.log(`${key} : ${value}`);
});

// section b task
// Write a function that takes a string Hello, JavaScript! and returns it in
// uppercase using a string method. (1 mark)

const upperStr = function () {
    return "Divyanshu tailor".toUpperCase();
};
console.log(upperStr());
// console.log(key,value)

// Use the split() method to convert the string Learn,Code,Build into an array of words.

const str = "Learn,Code,Build";
console.log(str.split(""));

// Given the string "Frontend Development", use the slice() method to extract the word "Frontend".

const str1 = "Frontend Development";
console.log(str1);
console.log(str1.slice(0, 8));

// Given the object { name: 'Alice', age: 25, city: 'New York' }, use
// object destructuring to extract the name and city properties.

const object = {
    name: "Alice",
    age: 25,
    city: "New York"
};

const { name: fname, city: cityName } = object;
console.log(fname, cityName)

// Use the spread operator to combine two arrays [1, 2, 3] and [4, 5, 6] into a single array.

let arrayOne = [1, 2, 3];
let arrayTwo = [4, 5, 6];


const AddArray = [...arrayOne, ...arrayTwo]
console.log(AddArray)

// Given two objects obj1 = { a: 1, b: 2 } and obj2 = { b: 3, c: 4 },
// merge them into a new object using the spread operator, ensuring that obj2
// properties override obj1 properties. (2 marks)

let obj1 = { a: 1, b: 2 }
let obj2 = { b: 3, c: 4 }


let newObj = { ...obj1, ...obj2 }
console.log(newObj)


// Write a function that takes an object as a parameter and uses the spread operator to
// add a new property country: 'USA' to it without modifying the original object.

const OfficeData = {
    EmployName: "jai singh",
    position: "sde",
    salary: 60000,
    city: "brazil"
}
const newOfficeData = { ...OfficeData, Country: "USA", hobbies: "cricket" }
console.log(newOfficeData)
console.log(OfficeData)


const person = {
    personName: "mayank tailor",
    age: 18,
    city: "bhilwara",
    state: "Rajasthan",
    country: "Inddia",
    graduation: "Bacholars of Bussiness Management"
}

const KeysPersonObject = Object.keys(person)
console.log(KeysPersonObject)
const ValuesPersonObject = Object.values(person)
console.log(ValuesPersonObject)

// convert array to string using forEach loop 

KeysPersonObject.forEach((item) => {
    console.log(item)
})

ValuesPersonObject.forEach((value)=>{
 console.log(value)
})

// Create an Object then loop all the values of that object using Object.values()

const Collage = {
    StudentName: "dipti",
    StudentId: 1104,
    StudentAge: 21,
    StudentCity: "bhilwara"
}

const loopCollage = Object.values(Collage).forEach((collagedetails) => {
    console.log(collagedetails)
})