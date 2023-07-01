/* calculating Factorial of 12 */


var num = 5;
let start = 1
for (i = 1; i <= num; i++){

    start*= i;
   
}
console.log(start)
 

/* Display  */

for (i = 1; i <= num; i++){
    console.log(start)
    start = start * i;
    console.log(`after incrementing start =  ${start}`)

}
