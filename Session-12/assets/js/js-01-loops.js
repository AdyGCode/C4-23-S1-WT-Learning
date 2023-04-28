/**
 * JavaScript Loops
 *
 * Demonstrations of JS loops
 *
 * Filename:        assets/js/js-01-loops.js
 * Author:          Adrian Gould <adrian.gould@nmtafe.wa.edu.au>
 * Version:         1.0
 *
 * Dependencies:    n/a
 */

/* basic For loop */
for (let forCounter = 0; forCounter < 10; forCounter++) {
  const text = `For loop count is ${forCounter}`;
  console.log(text);
}

console.log('--------------------------------------------');
/* While Loop */
let whileCounter = 0;
while (whileCounter < 10) {
  whileCounter++;
  const text = `While loop count is ${whileCounter}`;
  console.log(text);
}

console.log('--------------------------------------------');
/* Do while Loop */
let doCounter = 0;
do {
  doCounter++;
  const text = `Do while loop count is ${doCounter}`;
  console.log(text);
} while (doCounter < 10);

console.log('--------------------------------------------');

/* basic For loop with array */
const myForArray = [2, 3, 5, 17, 23];
for (let forCounter = 0; forCounter < myForArray.length; forCounter++) {
  const text = `At index ${forCounter} is the value ${myForArray[forCounter]}`;
  console.log(text);
}

console.log('--------------------------------------------');
/* For of loop (No index) */
const myArray = [2, 3, 5, 7, 11, 13, 17, 23];
for (const value of myArray) {
  const text = `Value from array is ${value}`;
  console.log(text);
}

console.log('--------------------------------------------');
/* For of loop (with Index) */
const myOfArray = ['z', 'b', 'a', 'c'];
for (const [index, value] of myOfArray.entries()) {
  const text = `Value at position ${index} in the array is ${value}`;
  console.log(text);
}

console.log('--------------------------------------------');
/* For in with Objects */
const person = {
  givenName: 'Paula',
  familyName: 'Fastun',
  age: 23,
};

for (let property in person) {
  const text = `Property: ${property} Value: ${person[property]}`;
  console.log(text);
}

console.log('--------------------------------------------');
/* For in with arrays */
const people = ['Paula Fastun', 'Bea Problem', 'Chad der Bocks'];

for (let index in people) {
  const text = `Index: ${index} Value: ${people[index]}`;
  console.log(text);
}
