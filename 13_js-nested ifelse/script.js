const userName = "Hasan"
const userAge = 22
// const userGender = (prompt('Enter your Gender'));
// debugger;


// if (" ") {
//   console.log("hello");
// } else {
//   console.log("world!");
// }

// if(!userName){
//     UserName = 'Hasan'
// }

if(userName){
    console.log(`Name: ${userName}`);
}
if(userAge){
    console.log(`Name: ${userAge}`);
}


console.log(`Name = ${userName}`);
console.log(`Age = ${userAge}`);
// console.log(`Gender = ${userGender}`);000000000000.00000000000

// debugger

if(userAge >=0 && userAge <=7){
  console.log(`${userName} is a kid`);
  if(userGender == 'Male'){
    console.log("And he is playing");
  }
  else{
    console.log("And she is playing");
  }
}

else if (userAge >= 7 && userAge <= 17) {
  console.log(`${userName} is School student.`);
  if(userGender == 'Male'){
    console.log("And he is learning Math & Science");
  }
  else{
    console.log("And she is learning Math & Science");
  }
}

else if (userAge >= 18 && userAge <= 24) {
  console.log(`${userName} is college student.`);
  if(userGender == 'Male'){
    console.log("And he is learning Computer Science");
  }
  else{
    console.log("And she is learning Computer Science");
  }
}

else if (userAge >= 25 && userAge <= 45) {
  console.log(`${userName} is working professional.`);
  if(userGender == 'Male'){
    console.log("And he is a web Engineer");
  }
  else{
    console.log("And she is a web Engineer");
  }
}

else if (userAge > 45 && userAge < 121) {
  console.log(`${userName} is retired person`);
  console.log("you better take care of yourself !");
}

else if (userAge > 121) {
  console.log(`${userName} is really board!`);
  console.log("you better just waiting for next 100 years!");
}

else  {
  console.log("Enter valid Age!");
}

console.log("program Ended!!");