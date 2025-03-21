const addCardBtn = document.querySelector('.card')
const container = document.querySelector('.container')
const input = document.querySelector('input')
const form = document.querySelector('form')

let count = 1

addCardBtn.addEventListener('click', () => {
    const newCard = document.createElement('div')
    newCard.classList.add('card')
    newCard.innerText = count++
    container.append(newCard)
})

// addCardBtn.addEventListener('click', () => {
//     const newCard = document.createElement('div')
//     newCard.classList.add('card')
//     newCard.innerText = count++
//     container.append(newCard)
//     for(let i=1; i<100; i++){
//         addCardBtn.click()
//     }
// })


// const setIntervalID = setInterval(()=>{
//     if(count>99){
//         clearInterval(setIntervalID)
//     }    
//     addCardBtn.click()
// },10)

// input.focus()



//  setTimeout(()=>{
//     input.focus()
//     console.log('input focused');
// },2000)

// setTimeout(()=>{
//     input.blur()
//     console.log('input blurred');
// },3000)


// setTimeout(()=>{
//     form.submit()
// },5000)

// setTimeout(()=>{
//     form.reset()
//     console.log('form reset');
// },2000)
 
// form.reset()