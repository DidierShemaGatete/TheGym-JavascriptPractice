/* reduce changes an array based on the function */

const arr = [3, 5, 6, 1, 4]

const sum = arr.reduce((a, b)=> a + b)

console.log(sum)


/* finding Min value and Max*/

const min = arr.reduce((a, b) => Math.min(a, b))
console.log(min)

/* Finding Max value in array */

const max = arr.reduce((a, b)=> Math.max(a, b))
console.log(max)





/* We can also use it on array string on finding longest array string */

const arrStr = ['fast', 'speed', 'committment', 'efficiency', 'discipline', 'accountabilty', 'effective']

const longestWord = arrStr.reduce((a, b)=> a.length > b.length ? a : b)

console.log(longestWord)


/* Finding the smallest string in array */

const smallestWord = arrStr.reduce((a, b)=> a.length < b.length ? a : b)

console.log(smallestWord)

/* Concatinating array strings with reduce method */

const arrayString = ['hello', ' ', 'world', ' of', ' AI'];

const singleWord = arrayString.reduce((a, b)=> a+b)

console.log(singleWord)

/* we can also use join method */

const splittedArray = arrayString.join('')
console.log(splittedArray)