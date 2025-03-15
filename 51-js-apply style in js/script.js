// style using js:

// document.querySelector('h1').setAttribute('id','heading')

// document.querySelector('h1').style.color='blue'

// document.querySelector('h1').style.backgroundColor='aqua'

const h1 = document.querySelector('h1')

// h1.style.color='maroon'
// h1.style.backgroundColor='khaki'

const allAnchorTags =document.querySelectorAll('p a')
// console.log(allAnchorTags);

// for(let i =0; i<allAnchorTags.length; i++){
//     allAnchorTags[i].style.color='teal'
// }

for(const link of allAnchorTags){
    // link.style.color='red'
    // link.style.textDecoration = 'none'
    // link.style.fontWeight = 700 
    // link.style.fontFamily = 'cursive'

    //another better way to update multiple style at a time
    // console.log(link.style.cssText);

    // link.style.cssText = `  
    // color: violet;
    // font-size: 18px;
    // font-family: cursive;
    // font-weight: 700;
    // text-decoration-line: none;
    // `

    //another way:
    // link.className='green-link'
    // link.setAttribute('class', 'green-link')

    //another way and we are gonna use this :

    // console.log(link.classList)
    link.classList.add('green-link')   //we can add class using .add('class Name')
    link.classList.remove('my-link')  // we can remove class using .remove('class Name')
    link.classList.toggle('repeat')  // if there is no class with this name then it will create one, otherwise it will remove this class
    link.classList.toggle('repeat')  // here toggle  will remove repeat class.
}
//this is the best way to use style :
// document.querySelector('h2').classList.add('hidden')

h1.classList.add('heading-color')