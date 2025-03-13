//Topic: Spread operator

// spread operator for array and string:
const num1 = [1,2,3,4]
const num2 = [5,6,7,8]
const num3 = [9,10,11,12]
const myName = 'Hasan'

// const joinedArray = num1.concat(num2,num3)  //old way

// const joinedArray = [...num1,...num2,...num3,...myName]  //using spread operator
const joinedArray = [...num1,...num2,...num3]

// spread operator for object:
const user ={
    name: 'Rashedul',
    age: 25,
    education:{
        ssc: 'A',
        hsc: 'A+',
    }
}

//although this can copy object but it's doing shallow copy
user.education.university = 'VU'
const updatedUser = {...user,city:"Rajshahi"}
updatedUser.education.msc='RUET'

user.education.bsc = 'RU'
updatedUser.education.msc='kuet'
updatedUser.home ="shalbagan"
user.jobLocation='Dhaka'

// console.log(updatedUser);

function add(){
    console.log(arguments);
    let sum =0
    for(let i =0 ;i<arguments.length;i++){
        sum+= arguments[i]
    }
    return sum
}
//we can use spread operator to pass argument into a function. but we cannot pass object. 
// cause it needs iterable element
add(...joinedArray)