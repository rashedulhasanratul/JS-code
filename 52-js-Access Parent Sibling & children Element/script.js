// access parent sibling and children element.

const firstLink = document.querySelector('a')
firstLink.parentElement
firstLink.parentElement.parentElement

const secondHead = document.querySelector('h2')
secondHead.children.children

firstLink.nextElementSibling.nextElementSibling
firstLink.nextElementSibling.previousElementSibling


firstLink.previousSibling // it will show the previous node
firstLink.nextSibling   // it will show the next node