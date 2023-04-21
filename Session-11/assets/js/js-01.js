/***
 * JavaScript
 *  ECMAScript 2022
 * C Style Language
 *  Look like C, C++, C#
 *
 * Typeless / Dynamically Types
 *
 */

/* Variables & constants */

let greeting = "Hello"
let name = 'Freda'
let theYear = 2023
let price = 3.67
price = price + price * 0.02

const thisYear = 2022
// const thisYear = thisYear + 1 // Not allowed

var test = true /* DO NOT USE VAR */
// Single Line Comment

theYear = "2090"

/** Console - primary debug area
 *  Use the browser developer tools
 */

console.log("Hello world")
console.log(thisYear)
console.log(theYear)
console.log(name)
console.log(greeting)

theYear++;
theYear += 3
theYear = theYear - 4;

let pi = Math.PI;
// ; are optional in most cases

let squareRoot = Math.sqrt(4)
let theFloor = Math.floor(35.7)
console.log(pi, squareRoot, theFloor)
