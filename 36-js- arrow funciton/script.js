// arrow function

// this is function declaration:
function square(num) {
  return num ** 2;
}
console.log(square(4));

// this is function expression:
const subtract = function (a, b) {
  return a - b;
};
console.log(subtract(10, 8));

//this is arrow function expression:
// const add = (a, b) =>{
//     return a + b;        // it will also work without return keyword
// }

const add = (a, b) => a + b;
console.log(add(5, 6));

const multiply = (x, y) => x * y;
console.log(multiply(4, 8));

setTimeout(() => {
  console.log("hi");
}, 2000);

// it will return random value in this case  between 0 to 1:

const random = () => Math.random();
console.log(random());

// it will floor the random decimal value  between 1 to 10 :

const floor = () => Math.floor(Math.random() * 10);
console.log(floor());

// area of a circle: takes user input
const r = prompt("Enter the radius: ");
const circleArea = (r) => Math.PI * r ** 2;
console.log(circleArea(r));

// example to learn details about js:
if (circleArea(r) == 78.53981633974483) {
  console.log("Result matched");
} else {
  console.log("not matched");
}
