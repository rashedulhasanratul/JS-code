//Topic:Right way to copy object and array

//to understand the address :

// const userName1 = 'Anurag';

// let userName2 = userName1;
// userName2 = userName2 + 'sing';
// ---------------------------------------X---------------------

// this will change the both array 
const fruits = ['Mango','Apple','Orange'];

const myFruits = fruits;

myFruits.push('Dates','Grapes');
console.log(fruits);
console.log(myFruits);

//object: this will change the both object
const user1 = {
  firstName: 'Rashedul',
  lastName: 'Hasan'
}

// const user2 = user1;

// user2.lastName='Hossain'
// console.log(user1);
// console.log(user2);

// 2015years way to copy correctly but this is old way : for object

const user3 = {};
Object.assign(user3,user1); //here everything of user1 are copied to user3.

user3.lastName= 'molla';
user3.age=27;

//latest way (es6 version) to copy  is using "spread operator": for object

const user4 = {...user1};
// console.log(user4);
user4.age=22;
console.log(user4);

const user5 = {
  firstName: 'Mahfuz',
  lastName:'panday',
  country:'bang'
}
console.log(user5);
const mergedObj = {...user4, ...user5};
console.log(mergedObj);

// copying  array using spread operator :

const  flower = ['rose','padma','lily'];

console.log(flower);

const newFlower = [...flower];
console.log(newFlower); 
newFlower.push('hasnahena','Joba','beli');
console.log(newFlower);

const mergeFlower = [...newFlower, ...flower];
console.log(mergeFlower);


//shallow copy: is good but not best for nested work.

// Object.assign(userX,userY);
// const userX={...userY};
// copying array:
// Object.assign(userX,userY);
// const userX = [...userY]

//Deep copy: it's work perfectly for regular and nested work. here are some way of doing this:
// example
let obj1= {
  name: 'Akib',
  address:{
    country:'bangladesh',
    city:'Rajshahi',
    area:{
      postCode:456
    }
  }
}
console.log(obj1);

// using structuredClone():
let obj2 = structuredClone(obj1);
obj2.address.city='Dhaka'
obj2.address.area.postCode=123
console.log('obj2: ',obj2);
console.log(obj1);

//using JSON:

let obj3 = JSON.parse(JSON.stringify(obj1));
console.log(obj3);
obj3.address.area.postCode=369;
console.log('obj3: ',obj3);

// using lodash(_.cloneDeep):
// const _.= require("lodash")
//  let obj4 = _.cloneDeep(obj1);


//syntax of JSON and structuredClone:
// let hu= JSON.parse(JSON.stringify(mau));
// let au= structuredClone(bau);