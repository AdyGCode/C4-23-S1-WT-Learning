let dom = document;

let anID = dom.querySelector('#articleName');
console.log('ID:', anID);

if (anID.hasChildNodes()) {
  let anIDsChildren = anID.childNodes;
  let childrenOfTheNode = [].map.call(anIDsChildren, elem => elem);

  for (aChild in childrenOfTheNode) {
    console.log('Child:', aChild, childrenOfTheNode[aChild]);
  }
}