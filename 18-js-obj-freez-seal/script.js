// object.freeze() , object.seal() and "in" keyword details.

const user = {
    firstName: 'Akash',
    lastName: 'Singh',
  
    location : {
      city:'Bangalore',
      pinCode: 620013,
      state: 'karnataka',
      moreDetails:{
        population: 124569873,
        area: '789456 sq'
      },
    },
    age:15,
    isGraduate: false
  }

  user.home = "shalbagan";       // add a key and value to the object.
  delete user.home              //delete a key and value from the Object.
delete user.age
console.log(user);

//object.seal(): means we can not update or delete any information from this object but we can only modify the existing key's value.
Object.seal(user);
delete user.isGraduate
console.log(user);

//object.freeze(): means we can not modify, update or delete any information from this object

Object.freeze(user);
console.log(user);

// we can use in keu word to check the key in an object.
'lastName' in user; // only in the console otherwise no output will be visible.