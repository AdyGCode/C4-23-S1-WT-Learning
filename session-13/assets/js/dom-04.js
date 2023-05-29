let dom = document;

let anID = dom.querySelector('#articleName');

console.log('ID:', anID);

let allOccurrences = dom.querySelectorAll('.text-green-500');

for (const item of allOccurrences) {
  console.log('Item: ', item);
}