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

let colors = ["red", "green", "blue"];
// add black
colors.push("black");
// console.log(colors); // [ 'red', 'green', 'blue', 'black' ]

// remove red
colors.shift();
// console.log(colors); // [ 'green', 'blue', 'black' ]

// swap the position of 'green' and 'blue'. Print the array.
colors.splice(0, 2, "blue", "green");
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
if (grade === "A") {
  console.log("You will get a Chocolate");
} else if (grade === "B") {
  console.log("You will get a Cookie");
} else if (grade === "C") {
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

// for loop
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

// while loop
let i = 0;
while (i < 6) {
  //   console.log(`The value of i = ${i}`);
  i++;
}
// The value of i = 1 The value of i = 2 The value of i = 3 The value of i =4 The value of i =5

let flips = 0;
let isHeads = false;
while (!isHeads) {
  flips++;
  isHeads = Math.random() < 0.5;
}

console.log(`It took ${flips} flips to land on heads.`); // It took 1 flips to land on heads.

// Exercise #6
// Write a program that prints a half pyramid using asterisks * as shown below:
// *
// **
// ***
// ****
// *****
// Next, print a reverse half pyramid as follows:
// *****
// ****
// ***
// **
// *
// Exercise 6 solution
console.log("Exercise #6");
let rows = 5; // Number of rows in the half pyramid

for (let i = 1; i <= rows; i++) {
  let str = "";
  for (let j = 1; j <= i; j++) {
    str += "*";
  }
  //   console.log(str);
}

// *
// **
// ***
// ****
// *****

// In Reverse
for (let i = rows; i >= 1; i--) {
  let str = "";
  for (let j = 1; j <= i; j++) {
    str += "*";
  }
  //   console.log(str);
}

// *****
// ****
// ***
// **
// *

// functions
function checkAge(age) {
  if (age > 18) {
    return "You may get a car license";
  }

  return "You may not get a car license yet";
}
console.log(checkAge(20)); // You may get a car license
console.log(checkAge(15)); // You may not get a car license yet

function greet() {
  console.log("Hello!");

  return;
  console.log("Good bye!");
}
greet(); // Hello!

// Exercise #7
// Write a function named calculateSquare() that's used to calculate the area and perimeter of a square shape.
// The function accepts one parameter: the side of the square.
// The formula to calculate the area is side * side, and the formula to calculate the perimeter is 4 * side.
// The output shows the size of the size, the area, and the perimeter as follows:
// The square side is 8
// The area of the square is 64
// The perimeter of the square is 32

// solution Exercise #7
console.log("Exercise #7");
let calculateSquare = (side) => {
  let perimeter = 4 * side;
  let area = side * side;

  console.log(`The square side is ${side}`); //  The square side is 8
  console.log(` The area of the square is ${perimeter}`);
  console.log(` The perimeter of the square is ${area}`);
};
calculateSquare(8); // The square side is 8 The area of the square is 64 The perimeter of the square is 32

// Exercise #8
// Create a person object with the following properties:
// name - the person's name
// age - the person's age
// greet() - a function to greet another person
// Inside the greet() function, introduce the person, specifying the name and the age.
// Here's an example output:
// person.greet();
// Hello! My name is Alex and I'm 22 years old.

// Solution
console.log("Exercise #8");
let person = {
  name: "Ada",
  age: 20,
  greet: function () {
    console.log(`My name is ${this.name} and I'm ${this.age} years old.`);
  },
};
person.greet(); // My name is Ada and I'm 20 years old.

// Final Exercise: Build a Cash Register Machine
// Let's build a cash register machine that can add items to a shopping cart, calculate total price, 
// calculate discounts, and accept payment by cash.
// The currency is assumed in USD, so you don't need to add it to the program.
// The cash register has 3 items for sale:
// Phone for 300
// Smart TV for 220
// Gaming Console for 150
// There's a 10% discount when the total price is higher than 400.
// The cash register should have a shopping cart that starts empty.
// The cash register should provide a method called addItem that takes the name of an item as a parameter. 
// When called, it should check if the item is available for sale. If it is, the item should be added to the 
// shopping cart. If it is not available, show a message saying we don't sell that item.
// The cash register should provide a method called calculateTotalPrice that calculates the total price of all
//  the items in the shopping cart. It should iterate over the items in the shopping cart and sum up their 
//  prices.
// The cash register should provide a method called pay that takes the payment amount as a parameter.
// It should calculate the total price of the items in the shopping cart using the calculateTotalPrice method.
// If the total price is higher than 400, a 10% discount should be applied.
// The method should then compare the payment amount with the total price (after applying the discount) and 
// display an appropriate message:
// If the payment amount is equal to or greater than the total price, it should display a message thanking 
// the customer for the purchase. If there is any change, it should also display the amount of change to be 
// given.
// If the payment amount is less than the total price, it should display a message indicating that the customer
// does not have enough money to purchase the items.
// The program should include appropriate console.log() statements to display messages for adding items to the
// shopping cart, displaying the total price, and processing the payment.
// The program should handle scenarios where the customer's payment amount is exactly equal to the total 
// price, as well as cases where the payment amount is greater or less than the total price.
// To build the program, you need to use what you've learned about objects, arrays, conditionals, and loops.

console.log("Final Exercise");
// solution
const cashRegister = {
  // list of available items
  itemsForSale : {
    Phone : 200,
    Smart TV : 220,
    Gaming Console : 150
  },
  // shopping cart
  let shoppingCart = [],

  addItem : function(addItem){
    // check avialability
    
  },
}