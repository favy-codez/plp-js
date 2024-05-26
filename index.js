console.log("Hello Wordld");

// Write a program with three variables, each with the following value:

// The first variable contains your name
// The second variable contains your age
// The third variable contains your occupation
// Then print the variables using the console.log() method.

const name = "Ezeliora Godsfavour";
let myAge;
var occupation = "web tutor";
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

// Exercise 5