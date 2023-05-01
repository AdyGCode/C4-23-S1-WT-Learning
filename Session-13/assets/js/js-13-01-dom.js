/**
 * JavaScript DOM
 *
 * Demonstrations of accessing the DOM
 *
 * Filename:        assets/js/js-013-01-dom.js
 * Author:          Adrian Gould <adrian.gould@nmtafe.wa.edu.au>
 * Version:         1.0
 *
 * Dependencies:    n/a
 */

/* Getting the Document */

let dom = document;

/* Getting an element by its ID (outputArea) */
let firstSection = dom.getElementById('outputArea');
let infoArea = dom.getElementById('information');

infoArea.innerHTML += `<h4 class="text-bold text-lg pt-4 pb-2">Get Elements by ID</h4>`;

infoArea.innerHTML += `<p>Section ID: "${firstSection.id}" 
                        HTML length: ${firstSection.innerHTML.length} 
                        Text length: ${firstSection.innerText.length}</p>`;

/* Replacing the content of the element with Text */
firstSection.innerText = 'Updated with this text...';

infoArea.innerHTML += `<p>Section ID: "${firstSection.id}" 
                        HTML length: ${firstSection.innerHTML.length} 
                        Text length: ${firstSection.innerText.length}</p>`;

/* Adding to the content of the element */
firstSection.innerText += ' Adding HTML to innerText will just be seen as' +
    ' text, eg. <br>';
infoArea.innerHTML += `<p>Section ID: "${firstSection.id}" 
                        HTML length: ${firstSection.innerHTML.length} 
                        Text length: ${firstSection.innerText.length}</p>`;

/* Finding all elements with a class of text-gray-600 */
let grayTextElements = dom.getElementsByClassName('text-gray-600');

infoArea.innerHTML += `<h4 class="text-bold text-lg pt-4 pb-2">Get Elements by Class</h4>`;

infoArea.innerHTML += '<p>Elements found: ' + grayTextElements.length + '</p>';

console.log(typeof grayTextElements);

console.log('---');
let data = [].map.call(grayTextElements, elem => elem);
console.log(data);
console.log('---');

for (let elementIndex in data) {
  console.log(elementIndex);
  infoArea.innerHTML += `<p class="text-gray-700">Element #${elementIndex} Class List Before: ${grayTextElements[elementIndex].classList}</p>`;
  grayTextElements[elementIndex].classList.add('text-blue-500');
  infoArea.innerHTML += `<p>Element #${elementIndex} Class List After: ${grayTextElements[elementIndex].classList}</p>`;
  infoArea.innerHTML += `<hr>`;
}


