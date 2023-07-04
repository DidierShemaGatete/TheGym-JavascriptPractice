/* Splice adds, removes or replace returns new array*/


/* splice(1, 0, item1, item2) */

/* 

1=> Start;
0 => delete count (if set to 0 , no element will be removed);  (optional)

item1; (optional)
item2; */


const arr = [2, 4, 6, 7]
const splicedArr = arr.splice(1, 0, '3', 4)

console.log(arr) //changes the array



/* Slice Method */

/* slice creates a copy of an array */

const arr2 = [2, 4, 5, 6]

const slicedarr = arr2.slice(2)

console.log(slicedarr)// A slice copy  of an array


console.log(arr2)// it didnt change the array