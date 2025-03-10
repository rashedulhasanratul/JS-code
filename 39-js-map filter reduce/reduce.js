// reduce() method

const nums = [1,2,3,4,5]
const sum = nums.reduce((accumulator, currentValue, index, array)=>{
    // console.log(index,currentValue);
    // console.log(currentValue)
    // console.log(accumulator);
    // console.log(accumulator,currentValue)
    // debugger
    return accumulator + currentValue
},0)
console.log("sum is : ",sum);



/*note: if i don't declare the initial value then the first element of the array will not
 print because accumulator assign the value for himself. and here the output will be : 2 3 4 5
 note: if we don't return accumulator value the we can assign anything as a initial value.
 */