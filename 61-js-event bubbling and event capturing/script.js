const green = document.querySelector('.green')
const pink = document.querySelector('.pink')
const blue = document.querySelector('.blue')

//event bubbling:

window.addEventListener('click',()=>{
    console.log('6. Window event listener');
})

document.addEventListener('click',()=>{
    console.log('5. Document event listener');
})

document.body.addEventListener('click',()=>{
    console.log('4. Body event listener');
})

green.addEventListener('click',(e)=>{
    console.log('3. Green event listener');
})

pink.addEventListener('click',(e)=>{
    console.log('2. Pink event listener');
})

blue.addEventListener('click',(e)=>{
    console.log('1. Blue event listener');
        // e.stopPropagation()   // this is for stop bubbling
})


//event capturing:

// window.addEventListener('click',(e)=>{
//     console.log('6. Window event listener');
// },true)

// document.addEventListener('click',(e)=>{
//     console.log('5. Document event listener');
// },true)

// document.body.addEventListener('click',(e)=>{
//     console.log('4. Body event listener');
// },true)

// green.addEventListener('click',(e)=>{
//     console.log('3. Green event listener');
// },true)

// pink.addEventListener('click',(e)=>{
//     // e.stopPropagation()  
//     console.log('2. Pink event listener');
// },true)

// blue.addEventListener('click',(e)=>{
//     console.log('1. Blue event listener');
//     // e.stopPropagation()   // this is for stop bubbling
// },{capture:true})

// blue.addEventListener('click',(e)=>{
//     console.log('1. Blue event listener');
//         // e.stopPropagation()   // this is for stop bubbling
// },{once:true}) 