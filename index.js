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

console.log("Final Exercise");
// solution
// Define the cash register object
const cashRegister = {
  // Items available for sale and their prices
  itemsForSale: {
    Phone: 300,
    SmartTV: 220,
    GamingConsole: 150,
  },

  // Array to hold items added to the shopping cart
  shoppingCart: [],

  // Method to add an item to the shopping cart
  addItem: function (itemName) {
    // Check if the item is available for sale
    if (this.itemsForSale[itemName] !== undefined) {
      // Add the item to the shopping cart
      this.shoppingCart.push(itemName);
      console.log(`${itemName} added to the shopping cart.`);
    } else {
      // Show an error message if the item is not available
      console.log(`We don't sell that item.`);
    }
  },

  // Method to calculate the total price of items in the shopping cart
  calculateTotalPrice: function () {
    let totalPrice = 0;
    // Iterate over each item in the shopping cart
    for (const item of this.shoppingCart) {
      // Add the price of the item to the total price
      totalPrice += this.itemsForSale[item];
    }
    return totalPrice;
  },

  // Method to process the payment
  pay: function (paymentAmount) {
    // Calculate the total price of the items in the shopping cart
    let totalPrice = this.calculateTotalPrice();
    // Apply a 10% discount if the total price is more than $400
    if (totalPrice > 400) {
      totalPrice *= 0.9;
      console.log("A 10% discount has been applied.");
    }

    // Display the total price after discount
    console.log(`Total price of items: ${totalPrice.toFixed(2)}`);

    // Check if the payment amount is sufficient
    if (paymentAmount >= totalPrice) {
      const change = paymentAmount - totalPrice;
      console.log("Thank you for your purchase!");
      // Display the change if there is any
      if (change > 0) {
        console.log(`Your change is: ${change.toFixed(2)}`);
      }
    } else {
      // Display a message if the payment amount is not enough
      console.log("You do not have enough money to purchase the items.");
    }
  },
};

// Example usage:
cashRegister.addItem("Phone"); // Adds Phone to the shopping cart
cashRegister.addItem("SmartTV"); // Adds Smart TV to the shopping cart
cashRegister.addItem("GamingConsole"); // Adds Gaming Console to the shopping cart
cashRegister.addItem("Laptop"); // Shows an error message as Laptop is not available
cashRegister.pay(700); // Processes payment of $700 and displays the appropriate message
