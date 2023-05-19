/**
 * Dates Times and Timers
 *
 * Filename:  Session-15/assets/js/dates-times-timers.js
 * Author:
 * Version:   1.0
 */

// dom = Document Object Model
// I use a variable to hold the dom when working on it
let dom = document;

/* Time out */
function myTimeout() {
  alert('Hello World!');
}

/*         Callback function, time in milliseconds */
// setTimeout(myTimeout, 2000);

/* Timers */
/* Create a counter that updates every 2.5 seconds */
/* Exercise - get it to update every second */
let count = 0;
const styles = ['text-red-500', 'text-blue-500', 'text-green-500'];

const countLocation = dom.getElementById('countLocation');

function updateCounter() {
  count++;
  const style = styles[count % 3];
  countLocation.innerHTML = `<p>Counter: <span class="${style}">${count}</span></p>`;
}

setInterval(updateCounter, 2500);

/* Dates and Times in JS */
let now = new Date();
console.log(now);

// date and time past 01/01/1970 @ 00:00:00 GMT in ms
let someDate = new Date(1000);
console.log(someDate);

// From a string
let someOtherDate = new Date('April 1 1970 13:56:23.5');
console.log(someOtherDate);

// From a string
let someOtherDate2 = new Date('1 April 1970 13:56:23.5');
console.log(someOtherDate2);

// From a string
let someOtherDate3 = new Date('2023-05-23T13:56:23Z'); // UTC
console.log(someOtherDate3);

// From a string
let someOtherDate4 = new Date('2023-05-23'); // UTC
console.log(someOtherDate4);

// Date and time based
// Month is 0 based, 0 = Jan
let yetAnotherDate = new Date(1970, 3, 1, 13, 56, 23.5);
console.log(yetAnotherDate);

// Retrieve sections using getXXXXXX
// getYear getMonth getDate (1-31) getDay (0-6, 0=Sun)
// getHour getMinutes getSeconds getMillioseconds
// getTime (milliseconds since Epoch)
// Epoch 01/01/1970 00:00:00 GMT
console.log(now.getHours());
console.log(now.getTime());
console.log(now.getTimezoneOffset());

// Set sections of a date
// setFullYear etc
yetAnotherDate.setFullYear(2001);
console.log(yetAnotherDate);

// Dates and times at UTC (GMT)
// UTC = Coordinated Universal Time
//       Temps Universal Coordonné
console.log(now.getUTCFullYear());
console.log(now.getUTCMonth());
console.log(now.getUTCDate());
console.log(now.getUTCHours());
console.log(now.getUTCMinutes());
console.log(now.getUTCSeconds());

// Formatting dates and times
console.log('formatting date time');
console.log(now.toString());
console.log(now.toDateString());
console.log(now.toLocaleString());
console.log(now.toLocaleDateString());
console.log(now.toGMTString());
console.log(now.toUTCString());
console.log(now.toISOString());

// Custom Format
const months = [
  'Jan', 'Feb', 'Mar', 'Apr',
  'May', 'Jun', 'Jul', 'Aug',
  'Sep', 'Oct', 'Nov', 'Dec',
];

let monthNumber = now.getMonth()
let monthString = months[monthNumber]

console.log(monthNumber, monthString)

/** Exercise **/
/* do the same for the days of the week */
/* Display the day of the week, and the text version of the day of the week */


/* Comparing Dates and Times */
const dateOne = new Date (2000, 1, 1) // 1st Feb 2000
const dateTwo = new Date (2000, 1, 1)
console.log(dateOne)
console.log(dateTwo)
console.log(dateOne == dateTwo) // False
console.log(dateOne === dateTwo) // False

const isSameTime = (firstDateTime, secondDateTime) => {
  return firstDateTime.getTime() === secondDateTime.getTime()
}
// Anonymous Function
const isSameDate = (firstDateTime, secondDateTime) => {
  return firstDateTime.getFullYear() === secondDateTime.getFullYear() &&
         firstDateTime.getMonth() === secondDateTime.getMonth() &&
         firstDateTime.getDate() === secondDateTime.getDate()
}
console.log(isSameDate(dateOne, dateTwo)) // True
