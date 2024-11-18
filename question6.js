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