'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}


/*
 * Complete the 'fizzBuzz' function below.
 *
 * The function accepts INTEGER n as parameter.
 */

function fizzBuzz(n) {
    var i = n 
    if(i <= 1){
        console.log('its less than 1')
        
    }else {
        
        if (i / 3 === 0 & i / 5 !== 0 ){
            console.log('Fizz\n')       
        }else if (i / 5 === 0 & i / 3 !== 0){
            
            console.log('Buzz\n')
        }else if (i / 5 === 0 & i / 3 === 0){
            
            console.log('FizzBuzz\n')
        }else if(i / 3 !== 0 & i / 5 !== 0){
            console.log(i + "\n")
        }
    }

}
function main() {
    const n = parseInt(readLine().trim(), 10);

    fizzBuzz(n);
}
main()