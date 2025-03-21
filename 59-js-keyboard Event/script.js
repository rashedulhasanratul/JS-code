// keyboard event:  we can implement keyboard event in any tag just it must be on the focus 

const h1 = document.querySelector('h1')
const input = document.querySelector('input')
// console.log(h1);
// window.addEventListener('keypress',(e)=>{
//     console.log('key code: ',e.code)
//     console.log('value: ',e.key)
// })

window.addEventListener('keyup',(e)=>{
    console.log('key code: ',e.code)
    console.log('value: ',e.key)
})

// window.addEventListener('keydown',(e)=>{
//     console.log('key code: ',e.code)
//     console.log('value: ',e.key)
// })