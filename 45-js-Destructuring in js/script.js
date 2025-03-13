//Topic: Destructuring in js
// Array destructuring :
const colors = ['red','green','yellow','pink','black','white']

// const color1 = colors[0]
// const color2 = colors[1]

const [color1, color2, color3] = colors   //destructuring  and variable order matters
// const [,,color3] = colors

//we know that array is an object behind the scene so, we can access it by using index or key:
// const {4:yColor,5:xColor} = colors


//object destructuring : here orders doesn't matter
const user ={
    name: 'Anurag',
    age: 25,
    address:{
        city:'Bangalore',
        state: 'Karnataka'
    }
}

// const age = user.age
// const name = user.name
// console.log(age);

const {name,age} = user   //destructuring
//if we want to change the property name then:
// const {name:userName, age:userAge} = user  
// const {address: {city:userCity}} =user  // this is called multilevel destructuring
// const {address:{state:userState}} = user


//function destructuring:

function intro({age, name}){
    console.log(name, age);
}
intro(user)

function printColor([a,b,,d]){
    console.log(a,b,d);
}
printColor(colors)