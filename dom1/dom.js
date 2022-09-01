const title = document.querySelector('#items');
// console.log(title.parentElement);

// console.log(title.parentNode);

// title.lastElementChild.style.color ="blue";

// console.log(title.firstChild);
// console.log(title.firstElementChild.style.color ="red");

// console.log(title.firstChild);

// console.log(title.lastElementChild.style.color = "green");

// console.log(title.nextElementSibling);

// console.log(title.previousElementSibling);
// title.previousElementSibling.backgroundColor = "yellow"

const newDiv = document.createElement('div');
// console.log(newDiv);
newDiv.className = "hello";
newDiv.id ="hel12";
// newDiv.textContent ="hi";

newDiv.setAttribute("class" , "web");
let divText = document.createTextNode("HEllo word");
newDiv.appendChild(divText);
// console.log(newDiv);

let con = document.querySelector("header .container");
let h1 = document.querySelector("header h1");


con.insertBefore(newDiv , h1);


const newItem = document.createElement('li');
newItem.className = "list-group-item";
const textItem = document.createTextNode("HEllo word");
newItem.appendChild(textItem);

console.log(newItem);

let ul = document.querySelector('.list-group');
let firstItem = document.querySelector('ul .list-group-item');

ul.insertBefore(newItem , firstItem);