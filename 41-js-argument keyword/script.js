// ARGUMENT keyword in JS:

const allSum = function (x, y) {
  console.log(arguments);
  return x + y;
};

function add() {
  let sum = 0;
  for (let i = 0; i < arguments.length; i++) {
    // console.log(arguments[i]);
    sum += arguments[i];
  }
  return sum;
}
//note:
// arguments keyword works only in regular function. it's not work on array function.
// it behave likes an array(only have the length property) but it's not the real array.
// it contains all the argument that are passed to the function, even if it's not defined in parameter

// const add1 = () => {
//   let sum = 0;
//   for (let i = 0; i < arguments.length; i++) {
//     // console.log(arguments[i]);
//     sum += arguments[i];
//   }
//   return sum;
// };
// console.log(add1);  //this will not work because it's an arrow function.

// task: convert it into array and sum it using reduce() method
// Since arguments is not a real array, we need to convert it into an array if we want to use array methods like map, filter, or reduce.
const add3 = function () {
  let argsArray = Array.from(arguments); // here Array.form is used to converted a real array
  console.log(`converted to array: `, argsArray);

  const argsSum = argsArray.reduce((accumulator, el, i) => {
    return accumulator + el;
  }, 0);
  return argsSum;
};
