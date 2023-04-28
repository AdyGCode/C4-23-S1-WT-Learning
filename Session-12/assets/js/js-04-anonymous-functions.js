/**
 * JavaScript Anonymous Functions
 *
 * Examples of defining and using anonymous functions in JS
 *
 * Filename:        assets/js/js-04-anonymous-functions.js
 * Author:          Adrian Gould <adrian.gould@nmtafe.wa.edu.au>
 * Version:         1.0
 *
 * Dependencies:    n/a
 */

console.log('Anonymous Functions, or Arrow Functions');
const anonGreeting = () => {
  console.log('Hello');
};
anonGreeting();

const anonGreetingWithParam = (hello) => console.log(`${hello}`);
anonGreetingWithParam('Hi there');

const anonGreetingWithParamV2 = goodbye => console.log(`${goodbye}`);
anonGreetingWithParamV2('Güten Tag');

const anonTriangleArea = (longestSide, height) => {
  return longestSide * height * 0.5;
};
console.log(anonTriangleArea(10, 3));

/* When working with currencies, it is advised to use integers */
const grossPay = (hours = 0, rate = 15.56) => {
  return hours * rate;
};
console.log(`Gross pay - use default parameters ${grossPay()}`);
console.log(`Gross pay on 0 hours work at base rate is ${grossPay(0)}`);
console.log(`Gross pay on 10 hours work at base rate is ${grossPay(10)}`);
console.log(`Gross pay on 5 hours work at $32.91 is ${grossPay(5, 32.91)}`);
console.log(`Gross pay on 0 hours work at $23.17 is ${grossPay(0, 23.17)}`);
console.log(`Gross pay on 10 hours work at $0.00 is ${grossPay(10, 0.00)}`);


