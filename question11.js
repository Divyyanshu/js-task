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