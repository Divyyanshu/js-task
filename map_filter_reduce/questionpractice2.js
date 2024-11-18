// question 1. map method
const maparray = ["ram", "shyam", "mayank", "divyanshu"];

const mapOutput = maparray.map((item) => {
    return item = item + " tailor"
})

console.log(mapOutput)

// 2. filter method

const SchoolData = [
    {
        "StudentName": "Divyanshu tailor",
        "marks": 350,
        "class": 12,
        "subjects ": "pcm",
    },
    {
        "StudentName": "Divyanshu tailor",
        "marks": 460,
        "class": 12,
        "subjects ": "pcm",
    },
    {
        "StudentName": "Divyanshu tailor",
        "marks": 520,
        "class": 10,
        "subjects ": "pcm",
    },
    {
        "StudentName": "Divyanshu tailor",
        "marks": 390,
        "class": 12,
        "subjects ": "pcm",
    },
    {
        "StudentName": "Divyanshu tailor",
        "marks": 410,
        "class": 12,
        "subjects ": "pcm",
    },
    {
        "StudentName": "Divyanshu tailor",
        "marks": 450,
        "class": 12,
        "subjects ": "pcm",
    }
]

const filterOutput = SchoolData.filter((item) => {
    return item = item.marks > 400
})
console.log(filterOutput)

const totalMarks = filterOutput.reduce((acc, current) => {
    return current.marks + acc
}, 0)

console.log(totalMarks)