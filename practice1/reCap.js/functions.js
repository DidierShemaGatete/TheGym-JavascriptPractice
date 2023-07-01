var Hoisted = ()=>{
    trial(2, 4)

    function trial (a, b){ 
        sum = a * b
        console.log(sum)  
        return a * b
    }

    /*SO, Functions are Hoisted inside their scope as trial did*/



}

Hoisted()

/* Function Expression with function callback */


/* Write an anonymous function expression that stores a function in a variable called "laugh" and outputs the number of "ha"s that you pass in as an argument. */

const laugh = function (num){
    var count= ""
    for (i = 0; i < num; i++){
        count+= "ha"
        
        
    }

    console.log(count)
}

laugh(5);

