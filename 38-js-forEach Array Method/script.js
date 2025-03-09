//Topic: forEach array Method:

const fruits = ["Apple", "Banana", "Mango", "Orange", "Grapes"];

// for(const fruit of fruits){
//     console.log(fruit);
// }

//forEach :

fruits.forEach(function(fruit) {
  console.log(fruit);
});

// fruits.forEach((fruit) => console.log(fruit));

// forEach method give undefined as a returned value. 
// because we didn't write it so we can't control the return value
//  even if we give return value it doesn't affect.
