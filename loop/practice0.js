/* even and odd number checker */

var num = 9;

/* if (num % 2 === 0){
    console.log(`${num} is an Even number`)
}else{

    console.log(`${num } is not an even number` )
}
 */
num % 2 === 0 ? console.log(`${num} is an Even number`) : console.log(`${num} is not an even number` );



var num = 4.56;

var let = Math.round(num);
console.log(let)

/* Switch case */

var num = 5;

switch(num){

    case 1: 
        console.log('num is correct')
    break;

    case 3:
        console.log('The num is wrong')
    break;

    default :
        console.log('there is no num ')

}



/* Factorial of num */

var num = 5;
var start = 1; /* as factorial multiplies from one up to that particular value */

for(i = 1; i <= num; i++){
    start = start * i;
    console.log(start)
}

var row = 25;
var seats = 100;
var count = 0;
var count2 = 0;
/* var seats = row + col */
for (i = 0; i <= row; i++){
    count+= 1;
    console.log(count)


    for(j = 0; j < seats; j++){
        count2+= 1;
        console.log(count2)
        
    }
   
}
console.log(`the number of seats in whole theater is ${count2} seats`)


for (i = 0; i <= 4; i++){
    console.log(i)
    for(j = 0; j <= 4; j++){
        console.log(j)
    }

}


for (i = 5; i < 10; i++){
    console.log(i)
}