// creating function:

function introduceMe(userName = 'procodrr', userProfession, age) {
  console.log("hi");
  console.log(`My name is ${userName}`);
  console.log(`I am a ${userProfession || 'student'}`);
  console.log(`I am ${age} years old`);
}
// const returnValue = introduceMe()

//function call with argument:
introduceMe('Anurag', 'Aeronautical Engineer',27);
introduceMe('Ratul','Mechanical Engineer',26);

// function call with no argument
introduceMe();

// function with return keyword:


function addTwoNumber(a , b){
    // console.log(5+6);    // this is not the result 
    return a + b;          // this is  the result
}
const result = addTwoNumber(22, 8)
console.log(`sum : `,result);

function subtracTwoNumber(a, b){
    return a - b;
}
const subtraction = subtracTwoNumber(7,27);
console.log(`subtraction : `,subtraction);

// a bit complex but fun to understand and apply :) 
const plusMinus = addTwoNumber(addTwoNumber(14,7), subtracTwoNumber(19,25));
console.log(plusMinus);