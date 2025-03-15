//  selecting element in js:
// const allImages = document.getElementsByTagName("img");

const cssImage = document.getElementsByClassName('css-image')
const imageID = document.getElementById("asap"); // return single element
// const query = document.querySelectorAll('.css-image')  // use when need multiple element
const query = document.querySelector("#asap"); // it return single element means which one 1st
const jsImage = document.querySelector('[alt="js image"]');
// jsImage.src ="https://cdn.pixabay.com/photo/2023/06/07/14/21/mountain-8047293_1280.jpg"
const ul = document.querySelector("ul");
const imageInsideUl = ul.querySelector('.css-image') // we can use querySelector on any element

// const allImages = document.images
const allImages = document.querySelectorAll('img')

const imagesUrl = [
    'https://media.istockphoto.com/id/1419930438/photo/mountain-hiking.jpg?s=1024x1024&w=is&k=20&c=Si3wPvWsw1kDsihmbBACZxTVuAw8Mx6UaSRK9QlDZDQ=',
    'https://media.istockphoto.com/id/1181315370/photo/colorful-sunset.jpg?s=1024x1024&w=is&k=20&c=fyMSMsNNhGPiFfRHhIrAKswkEZHddJD1GNc10BHzz7k=',
    'https://media.istockphoto.com/id/848431846/photo/frosty-sunrise-in-carpathians.jpg?s=1024x1024&w=is&k=20&c=7GHkNOWhTQSINGniT1wgoHzZBEnJJiAisZvrd6HUq6Y='
]

// allImages[0].src = imagesUrl[0]
// allImages[1].src = imagesUrl[1]
// allImages[2].src = imagesUrl[2]

// we have to do this by using loop:
// for(let i=0; i<allImages.length; i++){
//     allImages[i].src =imagesUrl[i]
// }

//forEach method:
allImages.forEach((image,i)=>{
    image.src = imagesUrl[i]
})