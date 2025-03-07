//global scope , local scope , lexical scope, block scope and ,"use strict".
"use strict"  // this is better to use to prevent bad practice of variable declaration and so on.

const b = 50;
let c = 20;
var d = 10;
var bb = 110;

function sum() {
  var j = 30;
  let cc = 90;
  console.log(d);
}
console.log(bb);
sum();
// example of different type of scope :

const userName = "Hasan";
let userAge = 26;
var a = 50;

function add() {
  const x = 5;
  const y = 8;
  console.log(x + y);
  console.log(userName);
}

function subtract() {
  // debugger

  const x = 15;
  const y = 18;
  const z = 28;
  console.log(x - y);
  console.log(userName);

  function child() {
    const childName = "golu";
    console.log(childName);
    console.log(x, z);

    //      this is a block
    {
      let num1 = 32;
      var num2 = 55;
      console.log(num1);
    }
    // console.log(num1); 
    console.log(num2);
    function grandChild() {
      const grandchildName = "holu";
      console.log(grandchildName);
      console.log(a);
    }
    grandChild();
  }

  child();
}

add();
subtract();
console.log("program ended");
