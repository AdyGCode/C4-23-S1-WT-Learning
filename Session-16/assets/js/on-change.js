/**
 * Drop Downs and Change Events
 *
 * Filename:  Session-16/assets/js/on-change.js
 * Author:
 * Version:   1.0
 */

// DOM = Document Object Model
// I use a variable to hold the DOM when working on it
let doc = document;
const output = doc.getElementById('outputArea');
const selectBox = document.getElementById('select');

function plurals(animal, value) {
  let value_plural = animal

  if (value>1) {
    switch (animal) {
      case 'wolf':
        value_plural = 'wolves';
        break;
      case 'horse':
        value_plural = animal + 's';
        break;
      case 'fox':
        value_plural = animal + 'es';
        break;
      default:
        value_plural = animal;
    }
  }
  return value_plural;
}

function handleChange(event) {
  let text = '';

  // 👉️ get selected VALUE
  const animal = selectBox.options[selectBox.selectedIndex].value;
  // 👇️ get selected VALUE even outside event handler
  // text += `<p>${selectBox.options[selectBox.selectedIndex].value}</p>`;
  // 👇️ get selected TEXT in or outside event handler
  // text += `<p>${selectBox.options[selectBox.selectedIndex].text}</p>`;


  for (let i = 10; i > 0; i--) {
    let value_plural = plurals(animal,i);
    let value = value_plural
    if (i !== 1){
      value = value_plural
    }
    text += `
                <div class="flex flex-row gap-4 ">
                    <p class="">How many ${value} can you see?</p>
                    <p class="">${i}</p>
                    <p class="">${value_plural}</p>
                </div>
        `;
  }

  output.innerHTML = text;
}

selectBox.addEventListener('change', handleChange);
