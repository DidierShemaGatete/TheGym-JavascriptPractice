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


// IF STATEMENTS

const age = 18;

if (age > 18) {
  console.log("you're allowed to enter!")
} else if (age === 18 ) {
  console.log("you're now allowed to enter")
} else {

  console.log("youre mot allowed to enter here")
}


// LOOPS

for (var i = 0; i < 10; i++) {
  console.log(i);
}

// RECAPS on Functions




// DOM : Document Object Model

// helps in interacting and manipulating elements on the web


// Accessing elements and modifying content
const heading = document.getElementById('myHeading');
heading.textContent = 'Hello, DOM!';

const paragraph = document.querySelector('.myParagraph');
paragraph.innerHTML = 'This is a <strong>bold</strong> statement.';

// Creating and appending elements
const list = document.createElement('ul');
const listItem1 = document.createElement('li');
listItem1.textContent = 'Item 1';
const listItem2 = document.createElement('li');
listItem2.textContent = 'Item 2';
list.appendChild(listItem1);
list.appendChild(listItem2);
document.body.appendChild(list);

// Modifying element styles
const button = document.getElementById('myButton');
button.style.backgroundColor = 'blue';
button.style.color = 'white';

// Adding event listener
button.addEventListener('click', () => {
  button.textContent = 'Clicked!';
});

// Removing elements
const listItemToRemove = document.querySelector('li');
listItemToRemove.remove();




/*Here are some key concepts related to JavaScript DOM:

Document: The root node of the DOM tree represents the entire HTML document and is referred to as the document object. It provides methods and properties to access and manipulate the content of the document.

Elements: HTML elements such as <div>, <p>, <h1>, etc., are represented as element nodes in the DOM tree. You can access these elements using various methods like getElementById, getElementsByClassName, getElementsByTagName, or querySelector.

Nodes: Nodes represent various parts of the DOM tree, including elements, text, comments, attributes, etc. Each node in the DOM tree is an object with properties and methods to interact with it. Some commonly used node types include element nodes, text nodes, and attribute nodes.

Traversing the DOM: You can navigate and traverse the DOM tree using properties and methods provided by the DOM API. For example, you can access the parent node of an element using the parentNode property, or you can access the child nodes using the childNodes property.

Manipulating elements: The DOM API allows you to dynamically modify the content and attributes of elements. You can add or remove elements, change their attributes, modify their styles, and update their text content using methods like createElement, appendChild, removeChild, setAttribute, style, and so on.

Event handling: JavaScript DOM enables you to respond to user actions or events such as clicks, mouse movements, keypresses, etc. You can register event handlers on DOM elements using methods like addEventListener to execute JavaScript code when an event occurs.

Overall, JavaScript DOM provides a powerful way to interact with and manipulate web page content dynamically. It allows you to create interactive and responsive web applications by modifying the structure, style, and behavior of HTML elements based on user actions or other events.





User
how do i learn it?

ChatGPT
To learn JavaScript DOM, you can follow these steps:

Understand the basics of JavaScript: Before diving into the DOM, it's important to have a solid foundation in JavaScript. Learn about variables, data types, control structures, functions, and object-oriented programming concepts.

Study the Document Object Model: Familiarize yourself with the structure and concepts of the DOM. Learn about nodes, elements, properties, methods, and events. Understanding how the DOM represents HTML documents will help you manipulate and interact with web page content effectively.

Experiment with browser console: Open your web browser's developer tools and explore the browser console. It allows you to execute JavaScript code directly in the context of a web page. Use it to experiment with DOM manipulation, access elements, and understand the results.

Practice with small examples: Start with simple examples and gradually build your skills. Create HTML pages with different elements and use JavaScript to modify their content, styles, and behavior. Practice accessing elements, changing attributes, adding event listeners, and performing various DOM operations.

Online tutorials and resources: There are numerous online tutorials, articles, and interactive exercises available that can help you learn JavaScript DOM. Websites like MDN Web Docs, W3Schools, and JavaScript.info have comprehensive guides and examples to get you started.

Code along with examples: Work through tutorials and examples, and try to understand the code. Experiment by modifying the code and observing the results. This hands-on practice will deepen your understanding of how the DOM works.

Build projects: As you become more comfortable with the DOM, start building small projects that involve dynamic interaction and manipulation of web page content. This practical experience will enhance your skills and problem-solving abilities.

Join developer communities: Participate in online forums, developer communities, and coding groups where you can ask questions, share knowledge, and learn from others. Engaging with the community can provide valuable insights and help you overcome challenges.

Read books and documentation: Consider reading books focused on JavaScript and DOM. They often provide in-depth explanations, real-world examples, and best practices. Additionally, refer to official documentation such as MDN Web Docs for detailed information about specific DOM methods, properties, and browser compatibility.

Continuous learning: JavaScript and web technologies evolve over time, so it's essential to stay updated with new features, standards, and best practices. Follow blogs, subscribe to newsletters, and continue exploring new concepts and techniques to enhance your skills.

Remember, learning JavaScript DOM requires practice and patience. Start small, build a strong foundation, and gradually tackle more complex concepts. With dedication and consistent effort, you'll become proficient in JavaScript DOM and be able to create dynamic and interactive web applications.





User
write me some code relating to the DOM

ChatGPT
Certainly! Here's an example of JavaScript code that demonstrates some common DOM operations:

javascript
Copy code
// Accessing elements and modifying content
const heading = document.getElementById('myHeading');
heading.textContent = 'Hello, DOM!';

const paragraph = document.querySelector('.myParagraph');
paragraph.innerHTML = 'This is a <strong>bold</strong> statement.';

// Creating and appending elements
const list = document.createElement('ul');
const listItem1 = document.createElement('li');
listItem1.textContent = 'Item 1';
const listItem2 = document.createElement('li');
listItem2.textContent = 'Item 2';
list.appendChild(listItem1);
list.appendChild(listItem2);
document.body.appendChild(list);

// Modifying element styles
const button = document.getElementById('myButton');
button.style.backgroundColor = 'blue';
button.style.color = 'white';

// Adding event listener
button.addEventListener('click', () => {
  button.textContent = 'Clicked!';
});

/* Removing elements

const listItemToRemove = document.querySelector('li');
listItemToRemove.remove();
In this code snippet:

We access elements using methods like getElementById and querySelector.


We modify the content of elements using the textContent and innerHTML properties.


We create new elements using createElement, set their content with textContent, and append them to the DOM using appendChild.


We modify element styles by accessing the style property and setting individual CSS properties.
We add an event listener to a button using addEventListener to handle the click event.

We remove an element using the remove method.
Feel free to run this code in an HTML file to see the changes reflected in the DOM. You can modify it and experiment with other DOM operations as well. */



  function name(params) {
    
  }




// A block of code that performs a task

// Function Declaration (Defining a function)

function name(a, b) {
  console.log('name')

  return a+b;
}


// Function Call (calling / invoking  / executin a function)

const resultss = name(2, 3);

console.log(result);


                // TYPES OF CALLING A FUNCTION


                    // A function declaration 
                    function name(params) {
                      // Statements
                      return
                    }
                    // A function expression 
                    const name = function (params) {
                      //Statements
                    
                      return
                    }

                    // An arrow function

                    const name = (params) => {
                      // Statements
                      return 
                    }
                    



                    // Rock , paper and scissors Game
                    
var randomNumber=Math.random()

if (randomNumber >= 0 && randomNumber <= 1/3) {
  console.log("Rock")

}else if (randomNumber > 1/3 && randomNumber <= 2/3) {
  console.log("paper")

}else{

  console.log("Scissors")
}


//function with no parameters

function sayHello() {
  console.log("Hello!");
}

// Calling the function
sayHello();



// function with parameters
function greet(name) {
  console.log("Hello, " + name + "!");
}

// Calling the function
greet("John");


//function with return value:

function addNumbers(a, b) {
  return a + b;
}

// Calling the function and storing the result
var sum = addNumbers(3, 4);
console.log(sum);

//anonymous function(assigned to a variable)

var multiply = function(a, b) {
  return a * b;
};

// Calling the function
var result = multiply(5, 6);
console.log(result);


// Arrow function (ES6 syntax)

var divide = (a, b) => {
  return a / b;
};

// Calling the function
var quotient = divide(10, 2);
console.log(quotient);


// function as method
var person = {
  name: "Alice",
  greet: function() {
    console.log("Hello, " + this.name + "!");
  }
};

// Calling the method
person.greet();


// Recursive function
function factorial(n) {
  if (n === 0 || n === 1) {
    return 1;
  } else {
    return n * factorial(n - 1);
  }
}

// Calling the function
var results = factorial(5);
console.log(result);


//immediately Invoked Function Expression (IIFE)


(function() {
  console.log("I'm an IIFE!");
})();


/* ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ */

/* 
const role = func =>({console.log("kari")})  */


function role(){
  console.log("mine")
}


function add(a, z){

  return a+z
}

var sum = function add(a, z)

// Data TYPES RECAP(js has 8 types)

// 1. numbers(int, floats, infinity)

// 2. Strings

// 3. boolean

// 4. Null eg let var = Null

// 5. Undefined eg. let var; you can empty a value by assigning it to undefined .. eg(var=undefined)

// 6. Symbol

// 7. Object

// 8. Bigint (big integer) let x = BigInt

("12345678901123456780");


/*extra large or small numbers can be written using exponential notation*/


let y = 123e5; //12300000

let x = 145e3; // 0.145

Byte(8-bits), short(16-bits),  int(32-bits), longint(64-bits)

Float(32-bit), double(64-bit)



// Declaration: introduces new variables, classes or functions int js environment
var x; function sum(){}; class Gym{}

// Statement: controls flow of a program and perfoms condotional operations
if statements; loop statements

// expression: these are assigned varues and can perform in statements or independetely
ver x = 5+4;



// conditonals(another way of writting them)

//when you want to check condition before entering value in variable
let num = 23;

var condition = num >= 45 ? "Go on" : "So Sad"

num >= 18 ? console.log("ure allowed to enter") : ("ure not allowed to enter");

num >= 18 ? console.log("ure allowed to enter") : num < 16 ? console.log("ure banned to alcohol usage") : ("ure not allowed to enter");


?? //nullish coleasing operator


var names = null;

if names ?? "David"; // This means that if the variable names is not assigned a value,
//assign it a given value "David " (in this case)



// simple way to write if statement (including elseif)

console.log; root ? "34" console.log("go on") root ? "45" console.log("it's still possible"): console.log("no entrance")


//nullish and coleasing operators

let naming = null;

naming ?? "Monday" ;// this means that naming hasnt assigned a value then naming should be "Monday"

switch case, break and continue;

            // BREAK  => this breaks the code iteration when a certain condition is met

if(age > 18 && id === true ) console.log("u're allowed to enter");
  break;

          // CONTINUE => This continues and jumps the condition value it met

if(date == +15){
  console.log("it's getting ready for paycheck")

  continue;
}


      // SWITCH CASE

for(i=0, i <= 10 , i++);

switch(i){
  case 1: console.log(
    "the first digit")
    break;

  case 2: console.log(
    "the second digit")
    break;
 
  case 3: console.log(
    "the third digit")
    break;
 
  case 4: console.log(
    "the fourth digit")
    break;

  default: ("invalid num")
  }












