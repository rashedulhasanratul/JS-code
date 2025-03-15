// Topic: Element vs node


//this will show all nodes in the body:
// document.body.childNodes

// we can access node using childNodes :
// document.body.childNodes[2].nodeValue

// we can update node value:
// document.body.childNodes[2].nodeValue='hasan'

// we can see nodeValue and nodeType:
//document.body.childNodes[2].nodeType
// document.body.childNodes[2].nodeValue




// Theory part:-------------------------------------------------------------- 
// note: every element is a node but not all nodes are element.

// Nodes include all DOM objects (elements, text, comments, etc.).
// Elements are a type of Node that represent HTML tags.
// Use .childNodes when you need everything (including text and comments).
// Use .children when you only need HTML elements.


// Element: An Element is a specific type of Node that represents an HTML tag (<div>, <span>, <p>, etc.).
// All elements are nodes, but not all nodes are elements.

// Node: A Node is a generic term for any object in the DOM tree.
// It can be:
// An Element (<div>, <p>, <h1>, etc.)
// A Text Node (text inside an element)
// A Comment Node (<!-- comment -->)
// A Document Node (document itself)
