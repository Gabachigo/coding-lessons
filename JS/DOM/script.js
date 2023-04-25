// SELECTING ELEMENTS

// getElementById()
const element = document.getElementById('title');
console.log(element);

// getElementsByClassName()
const classes = document.getElementsByClassName('text');
console.log(classes);


// getElementsByTagName()
const tag = document.getElementsByTagName('h1');
console.log(tag);

// querySelector()
const query = document.querySelector('#title'); // css selectors(eg: .text, #title, [src])
console.log(query);

// querySelectorAll()
const queryAll = document.querySelectorAll('.text');
console.log(queryAll);
queryAll.forEach(element => console.log(element));

// Which one to use?
//
// GUIDE
// function(what it returns)
//
// getElementById (element)
// getElementsByClassName(HTMLCollection)
// getElementsByTag(HTMLCollection)
// querySelector (element)
// querySelectorAll (NodeList)


// MANIPULATING CONTENT

// textContent
const textCont = document.querySelector('h1');
textCont.textContent += " You suck";
console.log(textCont.textContent);

// innerText
const innerTxt = document.querySelector('p');
innerTxt.innerText = "You suck";

// innerText
const innerDoc = document.querySelector('.balls');
innerDoc.innerHTML = "You suck <strong>eggs</strong> <button>yousuck</button>";

// value
const value = document.querySelector('input');
value.value = "eggs";
console.log(value.value); // can also be used to see value in an element like <input value="1">

// attributes
const attributes = document.querySelector('header');
attributes.setAttribute('id', 'header'); // set
console.log(document.querySelector('#header'));

console.log(attributes.getAttribute('id')); // get

attributes.removeAttribute('id'); // remove
console.log(document.querySelector('header'));


// MANIPULANDO ESTILOS E CLASSES

// alternating styles
const style = document.querySelector('.text');
style.style.color = 'blue';
console.log(element.style.color);

// class list
const classList = document.querySelector('body');
classList.classList.add('active', 'green', 'egg');
classList.classList.toggle('active'); // toggles a class on or off(add or remove)
classList.classList.remove('egg');
console.log(classList.classList);


// NAVIGATING ELEMENTS
const child = document.querySelector('body');

// BASIC

// childNodes
console.log(child.childNodes);

// children
console.log(child.children)

// FATHER

// parentElement
console.log(child.parentElement);

// parentNode
console.log(child.parentNode);

// CHILD

// firstElementChild
console.log(child.firstElementChild);

// firstChild
console.log(child.firstChild);

// lastElementChild
console.log(child.lastElementChild); // gets children of last element

// lastChild
console.log(child.lastChild);

// SIBBLINGS

const sibling = document.querySelector('.balls')

// nextSibbling
console.log(sibling.nextSibling);

// nextElementSibbling
console.log(sibling.nextElementSibling);

// previousSibbling
console.log(sibling.previousSibling);

// previousElementSibbling
console.log(sibling.previousElementSibling);


// CREATING AND ADDING ELEMENTS

// create element
const body = document.querySelector('body');
const create = document.createElement('h2');
const createMore = document.createElement('h2');
const creatingTooMuch = document.createElement('h2');

create.innerText = "big words";
createMore.innerText = "big words";
creatingTooMuch.innerText = "big words";


// append - put after everything on the element
body.append(create);

// prepend - put before anything on the element
body.prepend(createMore);

// insertBefore
const input = document.querySelector('input')

body.insertBefore(creatingTooMuch, input);


// EVENTS

// VIA HTML
// you need a function that will be executed by an attribute in a tag (e.g. <h1 onmousehover="print">)
function print() {
  console.log('print')
}

// KEYBOARD
// reusing the value variable for the input
value.onkeydown = function() {
  console.log("down")
}

value.onkeyup = function() {
  console.log("up")
}

value.onkeypress = function() {
  console.log("pressed")
}

// VIA JS
function print() {
  console.log('you suck')
}


