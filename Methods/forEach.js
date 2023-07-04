/* Add 100 to each el of an array */

/* forEach */

const arr = [3, 4, 5, 6, 7];

arr.forEach((element, index, array) => array[index] = element + 100)

console.log(arr) // adde 100 to each item



/* we can also use map method in such case */


arr.map((a)=> a + 100)

/* SECOND TASK */


var donuts = [
    { type: "Jelly", cost: 1.22 },
    { type: "Chocolate", cost: 2.45 },
    { type: "Cider", cost: 1.59 },
    { type: "Boston Cream", cost: 5.99 }
  ];

/* Use the forEach() method to loop over the array and print out the following donut summaries using console.log.

Jelly donuts cost $1.22 each
Chocolate donuts cost $2.45 each
Cider donuts cost $1.59 each
Boston Cream donuts cost $5.99 each
 */

/* 
donuts.forEach((element, index, array) => console.log(`${donuts.type}`) ) */

donuts.forEach(function(donut){
    
    // donut represents a single element of donuts array
    // donut is an object, therefore you can access its properties using a dot notation
    console.log(donut.type+" donuts cost $"+donut.cost+" each");
});

