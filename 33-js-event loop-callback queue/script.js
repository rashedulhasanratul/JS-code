// JS event loop and callback queue

console.log("hi---1");

function hello(){
    console.log("hello world");
}


hello()
// debugger
setTimeout(hello, 1000)
setTimeout(hello, 2000)
setTimeout(function(){
    console.log("helooo!!!!!!!!!")
},3000)

for(let i = 1; i<=2; i++){
    console.log(i);
}

console.log('hi---2');