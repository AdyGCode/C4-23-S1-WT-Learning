/**
 * JavaScript DOM
 *
 * Demonstrations of accessing the DOM
 *
 * Filename:        assets/js/js-013-02-dom.js
 * Author:          Adrian Gould <adrian.gould@nmtafe.wa.edu.au>
 * Version:         1.0
 *
 * Dependencies:    n/a
 */

/* Getting the Document & infoArea*/
let dom = document;
let infoArea = dom.getElementById('infoArea');

/* Finding all elements that have an active class */
let activeElements = dom.getElementsByClassName('active');

infoArea.innerHTML = `<h4 class="text-bold text-lg pt-4 pb-2">Get Elements By Class Name</h4>`;

infoArea.innerHTML += '<p>Elements found: ' + activeElements.length + '</p>';

console.log('---');
let data = [].map.call(activeElements, elem => elem);
console.log(data);
console.log('---');

for (let elementIndex in data) {
  console.log(elementIndex);
  infoArea.innerHTML += `<p class="text-gray-700">Element #${elementIndex} is changed</p>`;
  activeElements[elementIndex].classList.add('bg-blue-500');
  activeElements[elementIndex].classList.add('border-blue-500');
  // activeElements[elementIndex].classList.add('border-t-8');
  activeElements[elementIndex].classList.add('hover:bg-blue-300');
  activeElements[elementIndex].classList.add('hover:border-blue-900');
  activeElements[elementIndex].classList.add('hover:text-blue-900');
}

//---------------------------------------------------------------------

