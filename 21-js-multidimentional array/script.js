//Multidimensional array in js:
//multidimensional array are also called array  inside an array.

const nameNumber = [
  ["Adarsh", 70,[45,87]],
  ["Akash", 90],
];
console.log(nameNumber);
console.log(nameNumber[0][2][0]);

// console.log(nameNumber[0][0],nameNumber[1][0]);
console.log(nameNumber[0][0]);

nameNumber[0][3] = "Bang"; // this way we can add element into array in array

//  task: tic tac toe

const ticTacToe = [
    ['X',null,null],
    [null,null,'O'],
    ['O',null,'X']
];
console.log(`ticTacToe : `,ticTacToe);

