/**
 * JavaScript Decisions
 *
 * Demonstrations of JS decision statements
 *
 * Filename:        assets/js/js-02-decisions.js
 * Author:          Adrian Gould <adrian.gould@nmtafe.wa.edu.au>
 * Version:         1.0
 *
 * Dependencies:    n/a
 */

console.log("--------------------------------------------")
/* plain if ... then  ... */

let totalMarks = 84
const passMark = 80
const distinctionMark = 95
const maxMark = 100

if (totalMarks >= passMark) {
    console.log(`You got ${totalMarks}/${maxMark} which is a "Pass".`)
}

console.log("--------------------------------------------")
/* plain if ... then ... else */

totalMarks = 74
if (totalMarks >= passMark) {
    console.log(`Congratulations, with ${totalMarks}/${maxMark} you have achieved a "Pass".`)
} else {
    console.log(`Unfortunately with ${totalMarks}/${maxMark} you have a "Fail".`)
}

console.log("--------------------------------------------")
/* nested if ... then ... else ... */

totalMarks = 97
if (totalMarks >= passMark) {
    if (totalMarks < distinctionMark) {
        console.log(`Congratulations, with ${totalMarks}/${maxMark} you have achieved a "Pass".`)
    } else {
        console.log(`Congratulations, with ${totalMarks}/${maxMark} you have achieved a "Distinction".`)
    }
} else {
    console.log(`Unfortunately with ${totalMarks}/${maxMark} you have a "Fail".`)
}

console.log("--------------------------------------------")
/* if ... then ... else if ... */
totalMarks = 94
if (totalMarks < passMark) {
    console.log(`Unfortunately with ${totalMarks}/${maxMark} you have a "Fail".`)
} else if (totalMarks < distinctionMark) {
    console.log(`Congratulations, with ${totalMarks}/${maxMark} you have achieved a "Pass".`)
} else {
    console.log(`Congratulations, with ${totalMarks}/${maxMark} you have achieved a "Distinction".`)
}

console.log("--------------------------------------------")
/* switch */
totalMarks10 = Math.floor(Math.random() * 11)
const maxMark10 = 10
switch (totalMarks10) {
    case 0:
    case 1:
    case 2:
    case 3:
    case 4:
    case 5:
    case 6:
        result = 'Fail'
        break
    case 7:
    case 8:
        result = 'Pass'
        break
    case 9:
    case 10:
        result = 'Distinction'
        break
    default:
        result = "ERROR in Mark"
}
console.log(`Result: ${totalMarks10}/${maxMark10} --> ${result}`)
console.log("--------------------------------------------")
