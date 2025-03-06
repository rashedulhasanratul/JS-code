// debugger 

console.log(userName);

var userName ='Hasan'


// this way function are properly hoisted

hi()

function hi(){
    console.log("hello Engineer!");
}

// but this way function ( function expression ) will give error: 

// sayHi()

const sayHi = function (){
    console.log("Hi");
}
// sayHi()
