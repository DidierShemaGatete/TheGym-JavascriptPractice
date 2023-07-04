var captain = "Mal";
var second = "Zoe";
var pilot = "Wash";
var companion = "Inara";
var mercenary = "Jayne";
var mechanic = "Kaylee";

 var crew = [captain, second, pilot, companion, mercenary, mechanic];
 /*
Later in the show, Mal takes on three new crew members named "Simon", "River", and "Book". Use the push() method to add the three new crew members to the crew array.
 */
var doctor = "Simon";
var sister = "River";
var shepherd = "Book";

crew.push(doctor)



/*  */

/* add 100 on these elements */

var test = [12, 929, 11, 3, 199, 1000, 7, 1, 24, 37, 4, 19, 300, 3775, 299, 36, 209, 148, 169, 299, 6, 109, 20, 58, 139, 59, 3, 1, 139];

var addedItem = test.forEach((el, index, array)=> array[index] = el + 100)

console.log(addedItem)