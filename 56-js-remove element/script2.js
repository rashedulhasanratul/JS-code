// Remove Element using js:
// another task:
// const container = document.querySelector(".container");
let container = document.querySelector(".container");

for (let i = 1; i <= 100; i++) {
  const imageContainer = document.createElement("div");
  imageContainer.classList.add("img-container");

  const newImage =document.createElement('img')
  newImage.src=`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${i}.png`

  const pTag = document.createElement('p')
  pTag.innerText=`${i}`

  imageContainer.append(newImage,pTag)
  container.append(imageContainer)

  // shortcut but not good
//   const myHTML = `
//         <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${i}.png">
//         <p>${i}</p>`
//   imageContainer.innerHTML=myHTML
}


const myImg = document.querySelector("body > div > div:nth-child(5)")

// myImg.parentElement.removeChild(myImg) // this is old way
// myImg.remove()  //this in new way and we follow it
// container.remove()