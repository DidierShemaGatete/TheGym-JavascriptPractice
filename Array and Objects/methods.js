/* converting Object into an Array */


const Car = {
    color: "black",
    Model: "2023",
    Engine: "V12",
    sound : function() {console.log("Vruuhmmm")},
    works : function() {console.log(`The ${this.Engine} has a very strong and quick Engine, that sounds like ${this.sound()} once it is turned On `)}
}

Car.works()





/* Object is a global object where every objects inherit properties and methods */

const arr = Object.values(Car)
console.log(arr)

