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




1./**The DOM is primarily used in JavaScript to:

Access Elements: You can use the DOM to select elements on a web page using methods like getElementById, getElementsByClassName, or querySelector. Once you have a reference to an element, you can modify its properties, such as its text content, attributes, or styling. */


// Example: Changing the text content of an element
const element = document.getElementById('myElement');
element.textContent = 'New text content';


2./*Modify Structure: The DOM allows you to create, modify, and remove elements from the web page. You can add new elements, append them to existing elements, or remove elements from the DOM tree.*/

// Example: Creating and appending a new element
const newElement = document.createElement('div');
newElement.textContent = 'New element';
document.body.appendChild(newElement);

3./*React to Events: With the DOM, you can handle user interactions, such as clicks, mouse movements, or keyboard inputs, by attaching event listeners to elements.*/

// Example: Adding a click event listener
const button = document.getElementById('myButton');
button.addEventListener('click', function() {
  console.log('Button clicked!');
});


4./*Manipulate Styles and Classes: The DOM allows you to modify the styles and classes of elements to change their appearance dynamically.*/

// Example: Changing the background color and adding/removing classes
const element = document.getElementById('myElement');
element.style.backgroundColor = 'blue';
element.classList.add('highlight');
element.classList.remove('inactive');


5. /*Dynamically Load and Modify Content: You can use the DOM to load external content dynamically, such as fetching data from an API and updating the web page based on the retrieved data.*/

// Example: Fetching data from an API and updating the page
fetch('https://api.example.com/data')
  .then(response => response.json())
  .then(data => {
    // Process the data and update the page dynamically
  });

/*The DOM is a crucial part of web development as it enables interactive and dynamic web pages. It serves as an interface between JavaScript and the HTML document, allowing developers to manipulate the document structure, content, and behavior based on user interactions or other programmatic conditions.*/



// LOOP

for (var i = 0; i < 10; i++ ) {

  console.log(i);
}


// Logical Operators


// AND && ==> ALL OPERANDS ARE TRUE ==> TRUE

// OR || ==> Atleast one operand is True
console.log(true || false);

// NOT ! ==> Not true