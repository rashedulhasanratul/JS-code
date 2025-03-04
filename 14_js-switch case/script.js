// ------------------------ TOPIC: SWITCH CASE IN JS -----------------------------

// const dayNumber = 0;

// if (dayNumber === 0) {
//   console.log('It is Sunday Today')
// } else if (dayNumber === 1) {
//   console.log('It is Monday Today')
// } else if (dayNumber === 2) {
//   console.log('It is Tuesday Today')
// } else if (dayNumber === 3) {
//   console.log('It is Wednesday Today')
// } else if (dayNumber === 4) {
//   console.log('It is Thursday Today')
// } else if (dayNumber === 5) {
//   console.log('It is Friday Today')
// } else if (dayNumber === 6) {
//   console.log('It is Saturday Today')
// } else {
//   console.log('Please Enter a Valid Day Number')
// }

//--------------------------- using switch case:---------------------------------------

// const day = parseInt(prompt("Enter a Day number: "));

// switch(day){
//     case 0:
//         console.log("Sunday");
//         break;
//     case 1:
//         console.log("Monday");
//         break;
//     case 2:
//         console.log("Tuesday");
//         break;
//     case 3:
//         console.log("Wednesday");
//         break;
//     case 4:
//         console.log("Thursday");
//         break;
//     case 5:
//         console.log("Friday");
//         break;
//     case 6:
//         console.log("Saturday");
//         break;
//     default:
//         console.log("Enter a Valid Day Number");
// }


//---------------------switch case code for student grade ------------------------------------

// const grade =prompt("Enter your grade:") 
// const grade = "c"

// switch(grade.toLocaleUpperCase()){
//     case 'A':
//         console.log("Your score is  between 85% to 100%");
//         break
//     case 'B':
//         console.log("Your score is between 75% to 84%");
//         break
//     case 'C':
//         console.log("Your score is between 65% to 74%");
//         break
//     case "D":
//         console.log("your score is between 55% to 64%");
//         break
//     default:
//         console.log("you Failed! ");
// }


// console.log("program ended");



//----------------------practice for checking student grade-----------------------------------

// const grade = +prompt("Enter your mark: ");
// console.log(`Your mark:` ,grade);

// switch(true){

//     case (grade>=80 && grade <=100):
//         console.log("You got A+ ");
//         break;
//     case (grade>=75 && grade<80):
//         console.log("You got A ");
//         break;
//     case (grade>=70 && grade<75):
//         console.log("You got A- ");
//         break;
//     case (grade>=65 && grade<70):
//         console.log("You got B+ ");
//         break;
//     case (grade>=60 && grade<65):
//         console.log("You got B ");
//         break;
//     case (grade>=55 && grade<60):
//         console.log("You got B- ");
//         break;
//     case (grade>=50 && grade<55):
//         console.log("You got C+ ");
//         break;
//     case (grade>=45 && grade<50):
//         console.log("You got C ");
//         break;
//     case (grade>=40 && grade<45):
//         console.log("You got  D");
//         break;
//     default:
//         console.log('congratulations,You failed !, Bring your Guardian tomorrow'); 
// }
