let dom = document;

/* Find the main page header and change the text to DOM 07*/
let pageHeader = dom.querySelector('header>h1');
console.log(pageHeader);
pageHeader.textContent = 'DOM 07';

/* Find the article's body content and append a new paragraph */
let articleBody = dom.querySelector('article#article-01 div');
console.log(articleBody);
let newNode = dom.createElement('p');
const paragraphContent = 'This is a paragraph added by JS';
newNode.appendChild(document.createTextNode(paragraphContent));
articleBody.appendChild(newNode);