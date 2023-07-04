/* Add 100 to each el of an array */

/* forEach */

const arr = [3, 4, 5, 6, 7];

arr.forEach((element, index, array) => array[index] = element + 100)

console.log(arr) // adde 100 to each item



/* we can also use map method in such case */


arr.map((a)=> a + 100)