// DATA TYPES

// Boolean -True or False
// Null - No value (typeof = Object)
// Undefined - defined var with no value
//Number - 
//String - Array if characters
// Symbol - Unique Value

let b = Math.ceil(4.5);

let v = Math.floor(8.4);


console.log(b);
console.log(v);


// simple addition

function add(a, b) {
  return a + b;
}

console.log(add(2, 3)); // Output: 5

// square function


function square(x) {
  return x * x;
}

console.log(square(4)); // Output: 16

// Array sum function

function arraySum(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}

console.log(arraySum([1, 2, 3, 4, 5])); // Output: 15

// string reversal function

function reverseString(str) {
  return str.split('').reverse().join('');
}

console.log(reverseString('Hello')); // Output: 'olleH'


// factorial function

function factorial(n) {
  if (n === 0 || n === 1) {
    return 1;
  }
  return n * factorial(n - 1);
}

console.log(factorial(5)); // Output: 120

//


function multiplyBy(factor) {
  return function (number) {
    return number * factor;
  };
}

const multiplyByTwo = multiplyBy(2);
console.log(multiplyByTwo(5)); // Output: 10

/*Higher-Order Functions:
A higher-order function is a function that takes one or more functions as arguments or returns a function as its result. Here's an example:*/

/* In this example, the multiplyBy function returns an inner function that multiplies a given number by the factor passed to the outer function. It demonstrates the concept of closure in JavaScript.*/


const square = (x) => x * x;
console.log(square(3)); // Output: 9


/**Arrow Functions:
Arrow functions provide a concise syntax for writing functions. They are often used in functional programming and have an implicit return. Here's an example: */

/**The arrow function square takes a parameter x and returns its square. The (x) => x * x syntax represents the arrow function.

Immediately Invoked Function Expressions (IIFE):
An IIFE is a function that is executed immediately after it is defined. It is wrapped in parentheses to create a function expression and is followed by an additional set of parentheses to invoke it. Here's an example:
 */

(function () {
  console.log('This is an IIFE');
})();

/*The function is defined inside parentheses and is immediately invoked with an additional set of parentheses at the end. This pattern is useful for creating a separate scope and avoiding global namespace pollution.

Function Composition:
Function composition is the process of combining two or more functions to produce a new function. Here's an example: */

function add(a, b) {
    return a + b;
  }
  
  function multiply(a, b) {
    return a * b;
  }
  
  const addAndMultiply = (a, b, c) => multiply(add(a, b), c);
  console.log(addAndMultiply(2, 3, 4)); // Output: 20
/** In this example, the addAndMultiply function composes the add and multiply functions to add two numbers and then multiply the result by a third number.

These are just a few examples of advanced JavaScript functions. JavaScript provides a rich set of features for working with functions, allowing you to write more expressive and powerful code.





*/  



