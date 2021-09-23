/* JavaScript Notes
Number/Integer- numbers (e.g. your age).
String- words (e.g. your name).
Boolean- true or false (you are alive?).
Date- dates (your birthday).
Array- a collection of objects (your pets).
Function- a reusable block of code (yes, even a function is an object).
Object- (your turkey sandwich)
Increment `++` The increment operator increments the numeric value of its operand by one. If placed before the operand, it returns the incremented value. If placed after the operand, it returns the original value and then increments the operand.
Decrement `--` The decrement operator decrements the numeric value of its operand by one. If placed before the operand, it returns the decremented value. If placed after the operand, it returns the original value and then decrements the operand.
*/


// Functions
function greeting(phrase) {
  console.log(phrase)
}

let sentence = "Hello, first argument"

greeting(sentence)

// Loops with Arrays
let people = [
  {
    name: "Jake",
    email: "jake@gmail.com",
    female: false
  },
  {
    name: "Kyle",
    email: "Kyle@gmail.com",

  },
  {
    name: "Kylee",
    email: "kylee@gmail.com"
  }
]

for (let i = 0; i < people.length; i++) {
  let person = people[i]
  console.log("Name: ", person.name, "\nEmail", person.email, person.female)
}

// For Loops
for (let count = 0; count <= 10; count++) {
  console.log(count)
}

let number = 0
while (number <= 10) {
  console.log(number)
  number++
}

let counter = 0
do {
  console.log(counter)
  counter++
} while (counter <= 10)



let person = {
  name: "Kylee"
}

document.getElementById('name').innerText = person.name

console.log("Hello World")

let fruits = []
fruits.push("apple") //["apple"]
fruits.push("orange") //["apple", "orange"]

let num1 = 10
let num2 = 20

if (num1 < num2) {
  console.log("Number 1 is less than number 2")
} else {
  console.log("Number 1 is not less than number 2")
}

let letter = "n"
switch (letter) {
  case "n":
    console.log("n")
    break;
  case "N":
    console.log("N")
    break;
  case "a":
    console.log("a")
    break;
}

