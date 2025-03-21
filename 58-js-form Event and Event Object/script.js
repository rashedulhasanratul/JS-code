const usernameInput = document.querySelector('#username')
const paragraph =document.querySelector('p')
const form = document.querySelector('form')
// function hi(){
//     console.log('input clicked');
// }
// usernameInput.addEventListener('click',hi)
// usernameInput.addEventListener('dblclick',()=>{
//     console.log('input double clicked')
// })

let usernameValue 
// Input Event:
// usernameInput.addEventListener('input',(e)=>{
//     console.log(e);
//     console.log(e.target.value);
//     // console.log('input event fired')
//     // paragraph.innerText = e.target.value
//     usernameValue = e.target.value
// })

// Change Event:
// usernameInput.addEventListener('change',(e)=>{
//     console.log(e);
//     console.log(e.target.value);
//     // console.log('input event fired')
//     paragraph.innerText = e.target.value
//     usernameValue = e.target.value
// })

//Focus Event:
// usernameInput.addEventListener('focus',(e)=>{
//     console.log(e);
//     console.log(e.target.value);
//     // console.log('input event fired')
//     paragraph.innerText = e.target.value
//     usernameValue = e.target.value
// })

//Blur Event:
// usernameInput.addEventListener('blur',(e)=>{
//     console.log(e);
//     console.log(e.target.value);
//     // console.log('input event fired')
//     paragraph.innerText = e.target.value
//     usernameValue = e.target.value
// })


// form.addEventListener('submit',()=>{
//     e.preventDefault()
//     const myFormData = new FormData(form)

//     for(const p of myFormData.entries()){
//         console.log(p)
//     }
// })


// form.addEventListener('submit',(e)=>{
//     e.preventDefault()
//     console.log(e.target);
//     // console.log('form submitted');
// })
form.addEventListener('click',(e)=>{
    e.preventDefault()
    // console.log(e.target);
    console.log(e.currentTarget);
    // console.log('form submitted');
})