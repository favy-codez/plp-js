console.log("Hello Wordld");

// Write a program with three variables, each with the following value:

// The first variable contains your name
// The second variable contains your age
// The third variable contains your occupation
// Then print the variables using the console.log() method.

const name = "Ezeliora Godsfavour";
let myAge;
var occupation = "corper";
console.log(name, myAge, occupation);

// Hello Wordld
// Ezeliora Godsfavour undefined web tutor

// console.log( true && false); //false
// console.log(false || false); //false
// console.log(!true); // false

// Exercise 3
// console.log(19%3); //1
// console.log(10 == 3); //false
// console.log(10 !== "10"); //true
// console.log(2 < "10"); //true
// console.log("5" > 2); //true
// console.log(false && false); //false

// Exercise #4
// Create an array named colors that include the 'red', 'green, and 'blue' colors.
// First, add a 'black' color after the last index of the array. Then print the array.
// Next, remove the value 'red' and swap the position of 'green' and 'blue'. Print the array.
// Finally, add the color 'yellow' on the first index of the array, then print the array.
// The result output is as follows:
// [ 'red', 'green', 'blue', 'black' ]
// [ 'blue', 'green', 'black' ]
// [ 'yellow', 'blue', 'green', 'black' ]
// You need to modify the original array using the methods explained in this section.

let colors = ['red', 'green', 'blue'];
// add black
colors.push("black");
// console.log(colors); // [ 'red', 'green', 'blue', 'black' ]

// remove red
colors.shift();
// console.log(colors); // [ 'green', 'blue', 'black' ]

// swap the position of 'green' and 'blue'. Print the array.
colors.splice(0, 2, 'blue', 'green'); 
// console.log(colors); // [ 'blue', 'green', 'black' ]

// Finally, add the color 'yellow' on the first index of the array, then print the array.
colors.unshift("yellow");
console.log(colors); //[ 'yellow', 'blue', 'green', 'black' ]

let age = 15;
switch (age) {
  case 10:
    console.log("Age is 10");
    break;
  case 20:
    console.log("Age is 20");
    break;
  default:
    console.log("Age is neither 10 or 20"); // Age is neither 10 or 20
}

// Exercise #5
// A primary school is giving different rewards based on the student's grade:
// Students that got an A will get a Chocolate
// Students that got a B will get a Cookie
// Students that got a C will get a Candy
// For any other value, print "No reward to give."
// Create a variable named grade that will store the student's grade.
// Example output:
// You got an A, so here's a Chocolate for you!
// You got a B, here's a Cookie for you!
// You got a C, there's room for improvement and here's your Candy!
// You can use either the if...else or the switch...case statement.

// Using if..else statement
let grade = "A";
if(grade === "A"){
    console.log("You will get a Chocolate");
}else if(grade === "B"){
    console.log("You will get a Cookie");
}else if (grade === "C") {
    console.log("there's room for improvement and here's your Candy!");
} else {
    console.log("No reward to give");
}

// Using switch case
let grades = "B";
switch (grades) {
  case "A":
    console.log("You will get a Chocolate");
    break;
  case "B":
    console.log("You will get a Cookie");
    break;
  case "C":
    console.log("there's room for improvement and here's your Candy!");
    break;
  default:
    console.log("No reward to give");
}

let heads = 0;
let tails = 0;
for (x = 1; x <= 10; x++) {
  if (Math.random() < 0.5) {
    tails++;
  } else {
    heads++;
  }
}
console.log("Tossed the coin ten times");
console.log(`Number of heads: ${heads}`); //6
console.log(`Number of tails: ${tails}`); //4

for (let x = 10; x >= 1; x--) {
//   console.log(x); // 10 9 8 7 6 5 4 3 2 1
}

for (let x = 1; x < 20; x += 3) {
//   console.log(x); // 1 4 7 10 13 16 19
}

for (let x = 1; x < 2; x++) {
  console.log(x); // 1
}

console.log("The for loop has ended"); // The for loop has ended
console.log("Continue code execution"); // Continue code execution