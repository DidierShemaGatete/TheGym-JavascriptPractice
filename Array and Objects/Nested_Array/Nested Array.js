/* Use a nested for loop to take the numbers array below and replace all of the values that are divisible by 2 (even numbers) with the string "even" and all other numbers with the string "odd".
 */



var numbers = [
    [243, 12, 23, 12, 45, 45, 78, 66, 223, 3],
    [34, 2, 1, 553, 23, 4, 66, 23, 4, 55],
    [67, 56, 45, 553, 44, 55, 5, 428, 452, 3],
    [12, 31, 55, 445, 79, 44, 674, 224, 4, 21],
    [4, 2, 3, 52, 13, 51, 44, 1, 67, 5],
    [5, 65, 4, 5, 5, 6, 5, 43, 23, 4424],
    [74, 532, 6, 7, 35, 17, 89, 43, 43, 66],
    [53, 6, 89, 10, 23, 52, 111, 44, 109, 80],
    [67, 6, 53, 537, 2, 168, 16, 2, 1, 8],
    [76, 7, 9, 6, 3, 73, 77, 100, 56, 100]
];

var evenCount = 0;
var oddCount = 0;

for(var i = 0; i < numbers.length; i++){
    for(var c = 0; c < numbers[i].length; c++){

        if(numbers[i][c] % 2 === 0 ){
            numbers[i][c] = "even"
            
            evenCount++;
        
         
        }else{
            numbers[i][c] = "odd"
       
            oddCount++;
        }
       
        
    }
}


console.log(`the number of even numbers are ${evenCount} and number of odd numbers are ${oddCount}`)


var arr1 = [2, 4, 5];

var arr2 = [4, 5, 6];

var concatedArray = arr1.concat(arr2)
console.log(concatedArray)

var Sum = concatedArray.reduce((a,b)=>a+b);
console.log(Sum)