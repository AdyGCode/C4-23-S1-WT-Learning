let dom = document;
let dynamicContentArea = dom.querySelector('#dynamicContent');

const link = document.getElementById('secondLink');
console.log(link);
link.addEventListener('click', event => {
  // link clicked
  console.log(event);
});


