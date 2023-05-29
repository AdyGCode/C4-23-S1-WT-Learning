# Exercises for the DOM

## Exercise 01 (ex-01.html, ex-01.js)

Create a new HTML page (Duplicate the `dom-00.html` and `dom-00.js` example files).

Name the HTML page `ex-01.html`, and name the JS `ex-01.js`

The page will have a form with TWO entry fields
- number one
- number two

The page will have an output area with no content

Write the JavaScript to:
- listen for a submit button press
- when the button pressed
- the values from number one and number two are obtained
- use the parseInt() method to convert the values to integers
- add the two number
- display the result in the output area

## Exercise 02 (ex-02.html, ex-02.js)

Duplicate ex-01.html and ex-01.js naming them ex-02.html and ex-02.js

The page will now have a SINGLE input field that will accept numbers from 1 to 20.

Use HTML to limit the range of the input field.

Now create the JavaScript to do the following:

- read the value of th input field when a submit button is pressed.
- if the inout field is empty then the output area will display "Please enter a number from 1 to 20"
- if the input field is a value from 1 to 20 inclusive, then the following happens
  - read the input value
  - convert it to an integer
  - using this integer, display in the output area a times table (eg...)
    - 1 x 11 = 11
    - 2 x 11 = 22
    - etc
- the times table should be shown using suitable formatting, such as:

<p class="grid grid-cols-5 gap-4 border border-0 border-gray-800 border-b-1">
    <span>1</span>
    <span>x</span>
    <span>11</span>
    <span>=</span>
    <span>11</span>
</p>

## Exercise 03 (ex-03.html, ex-03.js)

Duplicate ex-00.html and ex-00.js naming them ex-03.html and ex-03.js

These are the base code for the HTML and Javascript files.

In this newly 'blank' area, you will create your own two column layout.

On the left side you will:
- Create a form 
- The form has a single input field, which accepts text
- The form does not have a submit button

On the right side you will:
- create a div with an id of letterCounts

Now you will create the javascript to do the following:

- Read the input text and count the number of each letter and number entered.
- All other characters are ignored. You only want a-z and 0-9 counts.
- You will use JS Objects for the solution.
- The counts will be displayed in the letterCounts are on the right of the page.

### Hints:

#### Left/Right Columns
- Use either flexbox or grid to split the page into two columns
- that is, either contain the left and right in a single `<div class="flex flex-row gap-4">...</div>`
- or, wrap the left and right in a single `<div class="grid grid-cols-2 gap-4">...</div>`
- check the `ex-00 file.html` 😊


#### initialiseCounts function
- create a function to a JS object that will store the counts
- the object will contain the keys "a" though to "z" (lower case) and the numbers "0" to "9"
- each of these keys will have a value of null to begin with, eg:
- `counts = {"a":null, ..., "z":null, ..., "9":null, }`  
- the function will return the object ready for use

#### 
- as a new character is typed into the text field,
- read the content of the text field and save this value in a variable
- convert the variables value to LOWER CASE
- process the text and update the letters and numbers counts object
- update the displayed counts on the left side of the page


## Exercise 04 (ex-04.html, ex-04.js)

Duplicate `ex-01.html` and `ex-01.js` naming them `ex-04.html` and `ex-04.js`, and then:
- Edit the `ex-04.js` file, remove everything except the `let dom = document` line.
- Edit the `ex-04.html` file, remove the lines from `...` to `...`.

In this newly 'blank' area, you will create your own two column layout.

