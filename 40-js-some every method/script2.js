// Topic: some and Every method in js:

//some: if one condition is matched, it will return true
const evenNumber = [0,2,3,4,6,8]
// console.log(evenNumber);

const result = evenNumber.some((num,i)=>{
    // debugger
    if(num % 2 === 1){
        console.log(`index no: `,i);
    }
    return num % 2 === 1
})
console.log("is ODD number present: ",result);

console.log('****************************************');

// every: if one condition is not match it will return false
const oddNumber = [1,3,5,7,8,9]

const result2 = oddNumber.every((el,index)=>{
    // debugger
    if(el % 2 === 0){
        console.log(index);
    }
    return el % 2 === 1
})
console.log(result2);