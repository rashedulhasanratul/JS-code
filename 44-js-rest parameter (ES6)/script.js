//Topic: Rest parameter
// rest parameter is a ES6 feature which replace the arguments keyword.by using rest param we
// can perform array method to simplify operation and so on. it collects multiple values and 
// turned into a single array
// we can not ust multiple rest parameter into a function. cause rest param always the 
// last parameter in the function definition

 const nums1 = [1,2,3,4]

function add(num,...mul){
    // console.log(arguments);
    console.log(`num: `,num);
    let sum = 0
    for(let i=0; i<num.length; i++){
        sum+=num[i]
    }
    let multiply = 1
    console.log(`mul: `,mul);

    for(let j=0; j<mul.length; j++){
        multiply *= mul[j]
    }
    return multiply
}

console.log(add(4,5,6,7));

const addNumbers = function(...number){
    // console.log(number);
    return number.reduce((acc,el)=> acc+el,0 )
    
    //we can convert arguments and then use it:
    // return [...arguments].reduce((acc,el )=> acc+el )
    // return Array.from(arguments).reduce((acc,el )=> acc+el )
}

const resultNumber = addNumbers(...nums1)
console.log(resultNumber);