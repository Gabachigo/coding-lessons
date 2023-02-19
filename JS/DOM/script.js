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