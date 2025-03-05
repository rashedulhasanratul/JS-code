//ARRAY IN JS:
const fruitsCollection = ['Apple','Banana','Grapes','Dates']

fruitsCollection[3]='mango'
fruitsCollection[14]='kiwi'
console.log(fruitsCollection);




const fruits=['Mango','Apple','Banana','Grapes','Dates',{name:'Hasan'},[2,3]];
console.log(fruits);

fruits[4]='water Melon';
fruits[5]='jackfruits';        //add new value into array
console.log(fruits);

//objects.freeze and object.seal property works on Array. CZ it's also an object and non primitive data type

Object.seal(fruits);
fruits[3]='guava';
console.log(fruits);
Object.freeze(fruits);
fruits[1]='naspati';

const rainbowColor=['red','orange','yellow','green','blue','indigo','violet'];
// console.log(rainbowColor);

rainbowColor[rainbowColor.length]='white'; ///way to add an element into array .

rainbowColor.push('black'); // add an element into the array
console.log(rainbowColor);

rainbowColor.push('cyan','pink','maroon');  //add multiple element into the array.
console.log(rainbowColor);

rainbowColor.pop();       //remove an element from the array.
console.log(rainbowColor);

//entering object into an array forcefully. not good practice
const newArray=[];
newArray.firstName='Ratul';
newArray.lastName='Hossain';
console.log(newArray);

const newObject={
     firstName:'Ratul',
     lastName:'Hossain'
};

console.log(newObject);