//Event Listener:

const h1 = document.querySelector('h1')
const card = document.querySelector('.card')
const container = document.querySelector('.container')

function sayHi(){
    console.log("Hiiii");
}
// h1.onclick = sayHi
h1.addEventListener('click',sayHi )

// card.onclick = function hello(){console.log('hasan');}
card.addEventListener('click',function(){
    console.log('card clicked');
})

// MY TRYING SECTION:


// function addNewCard(){
// const newCard = card.cloneNode(true)
//     container.append(newCard)
// }
// card.addEventListener('click',addNewCard)

// card.addEventListener('click',()=>{
//     const newCard = card.cloneNode(true)
//     container.append(newCard)
// })

// another way by using createElement:

let count = 1;

card.addEventListener('click',()=>{
    const newCard = document.createElement('div')
    newCard.classList.add('card')
    newCard.innerText = count++
    // count++
    container.append(newCard)
})