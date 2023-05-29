let dom = document;
let dynamicContentArea = dom.querySelector('#dynamicContent');

window.addEventListener('load', () => {
  dynamicContentArea.innerHTML += '<p>Window Loaded</p>';
});

document.querySelector('div').addEventListener('click', () => {
  dynamicContentArea.innerHTML += '<p>DIV was clicked</p>';
});

document.addEventListener('DOMContentLoaded', () => {
  dynamicContentArea.innerHTML += 'the DOM is fully loaded!';
});
