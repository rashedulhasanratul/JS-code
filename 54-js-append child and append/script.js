const h1 = document.querySelector('h1')
const container = document.querySelector(".container")
const card = document.querySelector('.card')

//appendChild:

// cut h1 and add to the container:
// container.appendChild(h1)

// copy (deep) and paste:
// h1.cloneNode(true)
// container.appendChild(h1.cloneNode(true))
// container.appendChild(card)


const newCard = card.cloneNode()
for(let i=2; i<=100;i++){
   
    container.appendChild(newCard.cloneNode(newCard.innerText=i))
}
 

// container.appendChild('haumau')  // this is error, cause appendChild only take Node.
// const newTextNode = document.createTextNode('haumau')
// container.appendChild(newTextNode)

// append:
container.append('haumau')