### Here are some of the things I learnt during the course of this project
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