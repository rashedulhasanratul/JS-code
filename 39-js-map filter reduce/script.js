// Topic: map(), filter()
const months = ["January", "February", "March", "April", "May", "June", "November",];
  
  console.log(months)

  months.forEach((month,index)=>{
    console.log(index,month)
  })

  console.log("**************************************");

// map()

 const capitalMonth = months.map((month,index,array)=>{
    // console.log(month)
    // console.log(array)
    // console.log(index)
    return month.toUpperCase()
  } )
  console.log(capitalMonth);

//filter()

const filteredMonth = months.filter((month,index,array)=>{
    console.log(index +1,month.length)
    if(month.length<=5){
        // return true
    } 
    return month.toLowerCase().includes('m')
    // return index>3

  } )
  console.log(filteredMonth);


//   practice example:

const studentList = [
    {
        name: 'Hasan',
        age: 20
    },
    {
        name: 'Ratul',
        age: 19
    },
    {
        name: 'Rashedul',
        age: 18
    },
    {
        name: 'Arif',
        age: 16
    },
    {
        name: 'Hamid',
        age: 21
    },
    {
        name: 'Nafis',
        age: 15
    }
]

// we can multiple method like this :
const adultStudent = studentList.filter((student)=>{
    return student.age>=18
}).map((student)=>{
    return student.name
}).filter((student)=>{
    return student.includes("H")
})
console.log(adultStudent);

console.log("**************************************");


