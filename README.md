### Here are some of the things I learnt during the course of this project
-  Control flow is a feature in a programming language that allows you to selectively run specific code based on the different conditions that may arise. There are two types of control flows commonly used in JavaScript: conditionals and loops.
Under conditional statements we have -
if...else statement
switch...case statement - The switch statement in JavaScript provides a way to execute different blocks of code based on different conditions. It's often used as an alternative to long chains of if...else if...else statements when there are multiple conditions to evaluate. 
The switch statement body is composed of three keywords:
case keyword - for starting a case block
break keyword - for stopping the switch statement from running the next case
default keyword - for running a piece of code when no matching case is found.
**Difference between if-else and switch**

| First Header  | Second Header |
| ------------- | ------------- |
| In an if statement, the expression can be any JavaScript expression that evaluates to a boolean value (true or false).  | In a switch statement, the expression is evaluated once and compared against the values of each case.  |
| if statements are more flexible and can handle complex conditions using logical operators (and, or, etc.).  | switch statements are better suited for situations where a single value needs to be compared against multiple possible values.  |
| In an if statement, you can have multiple conditions using else if blocks to handle different cases.  | In a switch statement, you can have multiple cases, but each case only handles a single value. However, you can stack cases that should execute the same block of code.  |
| In an if statement, if one condition is true, subsequent conditions are not evaluated.  | In a switch statement, if a case matches, its associated block of code is executed, and then execution continues with the next statement unless a break statement is encountered.  |
| In an if statement, there is no explicit default case. You can use an else block to handle cases not covered by the preceding conditions.  | In a switch statement, you can include a default case to handle situations where none of the cases match the expression.  |
| In if statements, values can be compared using relational operators (>, <, >=, <=, ===, !==, etc.).  | In switch statements, values are compared using strict equality (===) by default. Loose equality (==) can also be used but is less common and might lead to unexpected behavior.  |
```
let day = 3;
let dayName;

switch (day) {
  case 1:
    dayName = 'Monday';
    break;
  case 2:
    dayName = 'Tuesday';
    break;
  case 3:
    dayName = 'Wednesday';
    break;
  case 4:
    dayName = 'Thursday';
    break;
  case 5:
    dayName = 'Friday';
    break;
  case 6:
    dayName = 'Saturday';
    break;
  case 7:
    dayName = 'Sunday';
    break;
  default:
    dayName = 'Invalid day';
}

console.log(dayName); // Output: Wednesday
```
In this example:
The switch statement evaluates the value of day.
Since day is 3, it matches the case 3.
Therefore, the variable dayName is assigned the value 'Wednesday'.
The break statement exits the switch statement, preventing the execution of subsequent cases.
Finally, 'Wednesday' is logged to the console.
- Combining multiple if conditions using the logical operator AND (&&) or OR(||):
```
let myFood = "Banana";
if (myFood === "Banana" || myFood === "Apple") {
console.log("Eat fruits everyday to keep you healthy.");
}
if (myFood === "Chocolate Cake") {
console.log("Enjoy the sweet treat.");
}
```
Using switch case
```
let myFood = "Banana";
switch (myFood) {
case "Banana":
case "Apple":
console.log("Eat fruits everyday to keep you healthy.");
break;
case "Chocolate Cake":
console.log("Enjoy the sweet treat.");
break;
}
```
**NOTE** - The switch statement in JavaScript isn't suitable for replacing complex logical conditions that involve logical operators like && (AND) or || (OR). Each case in a switch statement is a strict equality comparison (===) with the expression provided in the switch statement.
- A Loop statement is another category of control flow statement used to execute a block of code multiple times until a certain condition is met. There are two loop statements used in JavaScript:
- The for statement -
```
for (let x = 0; x < 10; x++) {
console.log(x);
}
```
The for statement is followed by parentheses (()) which contain 3 expressions:
 initialization, condition , The arithmetic expression, where the variable value is either incremented or decremented by the end of each loop. These expressions are separated by a semicolon (;). The for loop is useful when you know how many times you need to execute a repetitive task.
For example, let's say you're writing a program to flip a coin. You need to find how many times the coin lands on heads when tossed 10 times. You can do it by using the Math.random method:
```
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
console.log(`Number of heads: ${heads}`);
console.log(`Number of tails: ${tails}`);
```
This code simulates flipping a coin 10 times and counting the number of heads and tails that occur. Here's a breakdown of how it works:

Initialization:
Two variables heads and tails are initialized to 0. These variables will be used to count the number of heads and tails, respectively.
Loop:
The loop runs 10 times (for (x = 1; x <= 10; x++)). On each iteration, it simulates flipping a coin by generating a random number between 0 and 1 using Math.random().
If the randomly generated number is less than 0.5, it's considered a tail, so the tails count is incremented (tails++).
Otherwise, it's considered a head, so the heads count is incremented (heads++).
Output:
After the loop, it prints a message indicating that the coin was tossed ten times (console.log("Tossed the coin ten times")).
It then prints the number of heads and tails that were counted during the simulation using template literals:
console.log(Number of heads: ${heads});
console.log(Number of tails: ${tails});
Example Output:
The output will vary each time the code runs due to the random nature of the coin flips. 

- The while statement - A while loop in JavaScript is used to repeatedly execute a block of code as long as a specified condition is true. 
```
while (condition) {
  // Code block to be executed as long as the condition is true
}
```
How it works:
The condition is evaluated before each iteration of the loop. If it's true, the code block inside the loop is executed. If it's false, the loop terminates and program control moves to the next statement after the loop.
Inside the loop, the code block is executed, and then the condition is evaluated again. This process continues until the condition becomes false.
Example:
Let's say we want to count from 1 to 5 using a while loop:
```
let count = 1;

while (count <= 5) {
  console.log(count);
  count++;
}
```
This loop will print numbers from 1 to 5 because:
Initially, count is 1.
The condition count <= 5 is true, so the loop executes.
Inside the loop, count is printed, and then incremented by 1.
This process repeats until count becomes 6, at which point the condition becomes false, and the loop terminates.
**Infinite loops** - Be careful when using while loops to avoid creating infinite loops, where the condition is always true, causing the loop to run indefinitely. 
For example:
```
// Infinite loop
while (true) {
  // Code block that will run indefinitely
}
```
To avoid infinite loops, ensure that the condition inside the while loop eventually becomes false or include a mechanism to break out of the loop using the break statement when a certain condition is met.

- The logical operators are used to check whether one or more expressions result in either True or False.
- There are three logical operators that JavaScript has:
1. Logical And - &&
2. Logical Or - ||
3. Logical Not - !
These logical operators follow the laws of mathematical logic:
&& AND operator - if any expression returns false, the result is false
|| OR operator - if any expression returns true, the result is true
! NOT operator - negates the expression, returning the opposite.
- **Array** is an object data type that can be used to hold more than one value. An array can be a list of strings, numbers, booleans, objects, or a mix of them all.
- **Array manipulation methods-** 
**push()** - Adds one or more elements to the end of an array and returns the new length.
```
let arr = [1, 2, 3];
arr.push(4); // arr is now [1, 2, 3, 4]
```
**pop()** - Removes the last element from an array and returns that element.
```
let arr = [1, 2, 3];
let lastElement = arr.pop(); // lastElement is 3, arr is now [1, 2]
```
**unshift()** - Adds one or more elements to the beginning of an array and returns the new length.
```
let arr = [1, 2, 3];
arr.unshift(0); // arr is now [0, 1, 2, 3]
```
**shift()** - Removes the first element from an array and returns that element.
```
let arr = [1, 2, 3];
let firstElement = arr.shift(); // firstElement is 1, arr is now [2, 3]
```
**splice()** - Changes the contents of an array by removing or replacing existing elements and/or adding new elements in place.
```
let arr = [1, 2, 3, 4];
arr.splice(1, 2, 'a', 'b'); // arr is now [1, 'a', 'b', 4]
```
**Explanation**
**arr:** This is the array that we are modifying.
**splice():** This is the method being called on the arr array.
**Parameters:**
**1:** This is the starting index where the modification begins. In this case, it's index 1.
**2:** This is the number of elements to be removed starting from the starting index (1). In this case, it means removing two elements.
**'a', 'b':** These are the elements to be inserted into the array at the starting index (1) after the removal of elements.
**Effect**
The expression arr.splice(1, 2, 'a', 'b'); removes two elements starting from index 1 ('2' and '3') from the arr array.
It then inserts the values 'a' and 'b' at the same positions where '2' and '3' were removed, respectively.
**slice()** - Returns a shallow copy of a portion of an array into a new array object.
```
let arr = [1, 2, 3, 4];
let newArr = arr.slice(1, 3); // newArr is [2, 3], arr is still [1, 2, 3, 4]
```
**concat()** - Merges two or more arrays into a new array
```
let arr1 = [1, 2];
let arr2 = [3, 4];
let newArr = arr1.concat(arr2); // newArr is [1, 2, 3, 4]
```
**fill()** - Fills all the elements of an array from a start index to an end index with a static value.
```
let arr = [1, 2, 3];
arr.fill(0); // arr is now [0, 0, 0]
```
**copyWithin()**- Shallow copies part of an array to another location in the same array.
```
let arr = [1, 2, 3, 4, 5];
arr.copyWithin(0, 3, 4); // arr is now [4, 2, 3, 4, 5]
```
**The indexOf() method** - can be used to find and return the index of an item in the array.
```
let fishes = ['Salmon', 'Goldfish', 'Tuna'];
let pos = fishes.indexOf('Tuna');
console.log(pos); // 2
```
- To get the size of an array, you can access the length property:
```
let fishes = ['Salmon', 'Goldfish', 'Tuna'];
console.log(fishes.length); // 3
```
The method will return -1 when the item isn't found inside the array
**Note** - we don't add parentheses next to the length keyword above. This is because length is a property of the array object and not a method.
- In JavaScript, the undefined value is reserved as the default value when a variable is declared, while null means you intentionally assign an "empty" value for the variable
- Changing the data from one type to another is also known as type conversion or type casting. There are 3 functions frequently used to do type conversion:
1. Number();
2. String();
3. Boolean();
- **Type Conversion vs Coercion in Javascript-** In JavaScript, type conversion and coercion are mechanisms to convert a value from one type to another.
**Type Conversion**- also known as type casting, is an explicit way to convert a value from one type to another. You, as a programmer, control this process by using JavaScript's built-in functions.
#### Examples of Type Conversion
**String to number**
```
let str = "123";
let num = Number(str); // num is now 123 (a number)
```
**Number to String**
```
let num = 123;
let str = String(num); // str is now "123" (a string)
```
**Boolean to string**
```
let bool = true;
let str = String(bool); // str is now "true" (a string)
```
**String to Boolean**
```
let str = "true";
let bool = (str === "true"); // bool is now true (a boolean)
```
**Type Coercion-** is an implicit process where JavaScript automatically converts a value from one type to another. This usually happens when you perform operations involving different data types.
#### Examples of Type Coercion
**String and Number Addition**
```
let result = "123" + 456; // result is "123456" (a string)
```
Here, JavaScript coerces the number 456 into a string and concatenates it with "123".
**Number and Boolean Addition**
```
let result = 123 + true; // result is 124 (a number)
```
Here, JavaScript coerces the boolean true into the number 1 and adds it to 123.
**Equality Comparisons**
```
let result = "123" == 123; // result is true (boolean)
```
Here, JavaScript coerces both values to the same type before comparing them. In this case, "123" is coerced to 123.
- There are several ways to convert a string into an integer. Here are the most common methods:
1. **parseInt()-** The parseInt function parses a string and returns an integer. It can also handle different bases (radixes) for conversion.
```
let str = "123";
let num = parseInt(str, 10); // num is 123
```
You should always specify the radix (10 for decimal) to avoid unintended behavior.
2. **Unary Plus (+)-** Using the unary plus operator is a shorthand way to convert a string to a number.
```
let str = "123";
let num = +str; // num is 123
```
3. **Math.floor(), Math.ceil(), Math.round()-** If the string contains a floating-point number and you want to convert it to an integer, you can use Math.floor(), Math.ceil(), or Math.round() after converting to a number.
```
let str = "123.45";
let num = Math.floor(Number(str)); // num is 123
```
4. **~~ (Double Bitwise NOT)-** The double bitwise NOT operator is another shorthand for converting a string to an integer. This method is less common and can be confusing, but it works for integers.
```
let str = "123";
let num = ~~str; // num is 123
```
**Note**
- Type Conversion: Explicit conversion using functions like Number(), String(), etc.
- Type Coercion: Implicit conversion done by JavaScript during operations involving different types.
- Use strict equality (===) to avoid unintended coercion.
- Employ explicit conversions to ensure clarity and predictability in your code.
