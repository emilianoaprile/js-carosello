// array images
const images = [
    'img/img-carosello-1.jpg',
    'img/img-carosello-2.jpg',
    'img/img-carosello-3.jpg',
    'img/img-carosello-4.jpg',
    'img/img-carosello-5.jpg'
]

// recupero div class="images"
const imagesElement = document.querySelector('.images')
const btnDxElement = document.querySelector('.btn_right')
const btnSxElement = document.querySelector('.btn_left')

// ciclo for per aggiungere dinamicamente images
for (let i = 0; i < images.length; i++) {
    // assegno a current image l'elemento corrispondente all'inidce dell'array
    const currentImage = images[i]
    // creo elemeno img nel DOM
    const srcElement = document.createElement('img')
    // appendo img al div class="images"
    imagesElement.append(srcElement)
    // assegno all'elemento src (che corrispondere al contenuto dell'elemento corrente)
    srcElement.src = currentImage
    // add classe image per recuperare gli elementi dal DOM tramite la classe
    srcElement.classList.add('image')
}

// recupero le images tramite la classe
const imageDOMElements = document.getElementsByClassName('image')
const firstImgDOMElement = imageDOMElements[0]
firstImgDOMElement.classList.add('active') 
console.dir(imageDOMElements)
let index = 0

btnDxElement.addEventListener('click', function(){

    imageDOMElements[index].classList.remove('active')
    index++
    if(index >= imageDOMElements.length) {
        index = 0
    }
    imageDOMElements[index].classList.add('active')

})

btnSxElement.addEventListener('click', function(){

    imageDOMElements[index].classList.remove('active')

    if(index === 0) {
        index = imageDOMElements.length
    }
    index--
    imageDOMElements[index].classList.add('active')

})




