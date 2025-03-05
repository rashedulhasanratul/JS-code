// -----------Common Methods in Array---------------

const evenNumber = [0, 2, 4, 8];
console.log(evenNumber);

 // remove element from start into an array.
evenNumber.shift();
console.log(evenNumber);

 //add new element into an array but it includes from the start index.
evenNumber.unshift("hello", "hi");
console.log(evenNumber);

 //concatenation of multiple array.
const oddNumber = [1, 3, 5, 7];
const oddReverse = [9, 7, 5, 3];
const animals = ['Lion','Tiger','Wolf']
const concatArray = oddNumber.concat(oddReverse,animals);
console.log(concatArray);

//indexof()
const searchIndex = oddNumber.indexOf(5);
console.log(`index is:`,searchIndex);

//includes()
const isInclude = animals.includes('cat');
console.log("is Included: ",isInclude);

//reverse()
const reverseArray = animals.reverse()
console.log(reverseArray);

//sort: but here it will not work properly for numbers or letters. it's good with the use of function

const num = [23,10,78,5,39,11,2];
console.log(num.sort()); 

const alphabet = ['cat','elephant','avocado','dog','bird'];
console.log(alphabet.sort());

//slice()
// console.log(alphabet.slice(2,4));

//splice()
// console.log(alphabet.splice(1,2));
console.log(alphabet);
console.log(alphabet.splice(1,2,'hayna','fox','monkey')); //remove and add new element using splice 
console.log(alphabet);



//note: slice wont change the original array but splice can modify the original array.