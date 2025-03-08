//setTimeout and setInterval function are two essential javaScript function used for handling time-based operation

// setTimeout(`console.log("hasan")
//     console.log('I am a delay function')`,2000)

const timer1 = setTimeout(`console.log("timer-1")`,2000)
const timer2 = setTimeout(`console.log("timer-2")`,4000)
const timer3 = setTimeout(a, 6000, 'asdf', 99, 89, 'sdf', [1,7])

// clearTimeout(timer2)


function a(){
    // console.log(arguments[4]);
    console.log("hello World");
}

//setInterval() function is also do time-based operation but it's repeat after given time:

const Interval1 = setInterval(`console.log("hi")`,2000)
const Interval2 = setInterval(`console.log("hola")`,4000)
const Interval3 = setInterval(a, 3000, 'asdf', 99, 89, 'sdf', [1,7])

// clearInterval(Interval2)


setTimeout(function(){
    console.log('HIIII-000');  //this will runs after hiiii-222 because it's asynchronous code.
},0)

console.log("hiiiii-222"); //this will run first because it's synchronous code.