/**
 * JavaScript Functions
 *
 * Examples of defining and using functions in JS
 *
 * Filename:        assets/js/js-03-functions.js
 * Author:          Adrian Gould <adrian.gould@nmtafe.wa.edu.au>
 * Version:         1.0
 *
 * Dependencies:    n/a
 */


/* Define a simple function
   No parameters, no returned values (eg. greeting) */
function simpleGreeting() {
    console.log("Hello World.")
}

// Call the function using...
simpleGreeting()
console.log("--------------------------------------------")

/* No parameters, return a value (eg. random number)
   Define a function that gives a random number between 1 and 10 inclusive */
function random1to10() {
    theRandom = 1 + Math.floor(Math.random() * 10)
    return theRandom
}

console.log(random1to10())
console.log("--------------------------------------------")

/* Parameters, return a value (eg area of triangle)
   Define a function the given height and longest side of a triangle calculates its area */
function triangleArea(longestSide, height){
    const area = longestSide * height / 2.0
    return area
}

let triangleHeight = 4
let triangleLongestSide = 5
const areaOfTriangle = triangleArea(triangleLongestSide, triangleHeight)
console.log(`A triangle with the longest side of ${triangleLongestSide} and height of ${triangleHeight}`)
console.log(`Has an area of ${areaOfTriangle}`)
console.log("--------------------------------------------")



/* Parameters, return a value (eg area of triangle)
   Define a function the given height and longest side of a triangle calculates its area
   This example has defaults of 0 and 0 */
function triangleArea2(longestSide=0, height=0){
    const area = longestSide * height / 2.0
    return area
}

let triangleHeight2 = 9
const areaOfTriangle2 = triangleArea2(height=triangleHeight2)
console.log('We are missing the longest side, so it defaults to 0')
console.log(`Has an area of ${areaOfTriangle2}`)
console.log("--------------------------------------------")
