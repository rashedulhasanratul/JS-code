//topic: creating element in js:

const h1 = document.querySelector('h1')
const container = document.querySelector('.container')
// const firstImage = document.querySelector('.pokemonCard')

const paragraph = document.createElement('p')
// paragraph.innerText='Hello World'
// container.append(paragraph)

// paragraph.classList.add('mypara')
// paragraph.id='myparaId'
// paragraph.id= 'paragraphID'

// for (let i = 2; i <=100; i++) {
//     const newImage = firstImage.cloneNode()
//     newImage.src= `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${i}.png`
//     container.append(newImage)
// }


// task: Using creteElement add 100 pokemon picture into container

const image = document.createElement('img')
image.src= `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png`
// container.append(image)


for(let i = 1; i<=100; i++){
    const newImage = document.createElement('img')
     newImage.src =`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${i}.png`
     container.append(newImage)
}


