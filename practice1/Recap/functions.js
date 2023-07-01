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

laugh(2);

/* Take 2 */
function laugh2(num2) {
    start = ""
    for (i = 1; i <=num2; i++){
        start += "ha";
    }
    console.log(start)
}
laugh2(20)


/* Write a named function expression that stores the function in a variable called cry and returns "boohoo!". Don't forget to call the function using the variable name, not the function name: */

const cry = ()=> console.log ("boohoo")

cry()



function emotions (mood, laugh2){
    console.log(`im ${mood}, ${laugh2(3)}`)

}