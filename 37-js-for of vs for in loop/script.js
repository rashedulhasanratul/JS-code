//for of vs for in loop: for of use for array string and for in use for object

const fruits = ["banana", "apple", "peach", "mango", "grapes"];

for( let i = 0; i<fruits.length;i++){
    console.log(fruits[i]);
}
console.log('*****************');

//for of loop:
for(const fruit of fruits){
    console.log(fruit);
}
console.log('*****************');
// to see index number we can write code like this:
let ind = 0
for(const fruit of fruits){
    console.log(fruit,ind);
    ind++
}
console.log('*****************');
// example: 
const UserName = 'Hasan'
let index = 0
for( let letter of UserName){
    console.log(`${letter}, index: ${index}`);
    index++
}

// note: we can not print object using 'for of' loop, because normally object is not iterable thing.
// we can print object by using 'for in' loop.

console.log('*****************')
//for in loop:

const person = {
    firstName: 'john',
    lastName: 'vau',
    age:50,
    eyeColor: 'blue',
    city: 'Rajshahi'
}

for(let key in person){
    console.log(person[key]);
    // console.log(`${key}:`,person[key]);
}

// note: for in loop is time consuming so, we can use object.keys to operate loop on object

//object.keys: this is a bit fast

const personKeys = Object.keys(person)
for(const key of personKeys){
    console.log(person[key]);
}

//for information:
const personValue = Object.values(person)
console.log(personValue);
const personEntry = Object.entries(person)
console.log(personEntry);