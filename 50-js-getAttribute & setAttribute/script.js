// getAttribute and setAttribute:

document.querySelector('[developer="hasan"]')

// to fetch attribute value:
document.querySelector('[hello]').getAttribute('developer')

// to set new attribute, we use setAttribute:
document.querySelector('h1').setAttribute('title','this is example')

document.querySelector('h1').getAttribute('title')

document.querySelector('h1').setAttribute('id','heading')


//remove id using removeAttribute:
// document.querySelector('h1').removeAttribute('id')