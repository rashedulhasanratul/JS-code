// ---------------------------------object creating in JS---------------------------
// object always compare with the address

const username1 = ''
const username2 = ''

const myName = 'jack'

const user1 = {
  firstName: "Rashedul",
  lastName: "Hasan",
  age: 26,
  education: 'B.sc in CSE',
  address: {
    city: 'Raj',
    pinCode: 1234,
    state: 'nohata',
    moreDetails: {
      jobLocation:'USA',
      university: 'VU'
    }
  }
};

const user2 = {
  firstName: "Hamid",
  lastName: "Hossain",
  age: 26,
  education: 'B.sc in CSE',
  'current-location': 'BD',
  jack: 'developer'
};

//two way of accessing objects key :
// i) dot notation ii) bracket notation

console.log(user1.lastName);                                  // this is dot notation
console.log(`Last Name:`,user2['lastName']);                 // this is bracket notation

console.log(user2['current-location']);
console.log(user2[myName]);                               // we can pass variable into this
console.log(user2['first'+'Name']);


// normal  variable are compare with value and data type.
const h= 20;
const g= '20';

//we can add value into the obj by this way:

user1.Country='Norway';
console.log(user1);
user1['is-student'] = true;
console.log(user1['is-student']);

console.log(user1.address);