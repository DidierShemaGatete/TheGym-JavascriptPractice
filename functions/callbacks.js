
/* A function expression that takes the number of times and returns cat sounds */

function cat (times) {

    count = " "
    for (i = 0 ; i <= times; i++){
        count+= "Meauh"
    }

    console.log(count , times + " times")
}
/* 
cat(4) */

/* A function that greets and cat talks */

function greet (cat){console.log(`hello ${cat}`)  }

greet(6)