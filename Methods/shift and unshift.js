/* Shift removes el at start of array and returns it that el  */

const arr = [3, 5,6 ,9 ,7]

const removeNewAtStart = arr.shift()
console.log(removeNewAtStart)
console.log(arr)


/* unshift adds el/ els at start of an array and returns the number of items*/

const addedElementAtStart = arr.unshift(3, 5, 8)

console.log(addedElementAtStart)//returns 7
console.log(arr)//returns new elments also added