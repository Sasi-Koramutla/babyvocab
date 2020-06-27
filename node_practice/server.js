/* var rect = {
    perimeter: (x,y) => 2*(x+y),
    area: (x,y) => x*y
} */

var rect = require("./rectangle")

console.log("Perimeter of 3 and 5 is >> " + rect.perimeter(3,5));