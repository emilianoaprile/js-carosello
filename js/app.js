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
const imagesDxElement = document.querySelector('.images_list')
const btnDxElement = document.querySelector('.btn_right')
const btnSxElement = document.querySelector('.btn_left')

// ciclo for per aggiungere dinamicamente images
addImagesDynamically()

// recupero le images tramite la classe
const imageDOMElements = document.getElementsByClassName('image')
const thumbDOMElements = document.getElementsByClassName('thumb_image')
const firstImgDOMElement = imageDOMElements[0]
const firstThumbDOMElement = thumbDOMElements[0]
firstImgDOMElement.classList.add('active')
firstThumbDOMElement.classList.add('thumb_active')

// click next
btnDxElement.addEventListener('click', function () {
    getNextImage()
})

// click previous
btnSxElement.addEventListener('click', function () {
    getPrevImage()
})

/* ------------------------------------------------------------------ */

// funzioni
function addImagesDynamically() {

    for (let i = 0; i < images.length; i++) {
        // assegno a current image l'elemento corrispondente all'inidce dell'array
        const currentImage = images[i]
        // creo elemeno img nel DOM
        const srcElement = document.createElement('img')
        const thumbElement = document.createElement('img')
        // appendo img al div class="images"
        imagesElement.append(srcElement)
        imagesDxElement.append(thumbElement)
        // assegno all'elemento src (che corrispondere al contenuto dell'elemento corrente)
        srcElement.src = currentImage
        thumbElement.src = currentImage
        // add classe image per recuperare gli elementi dal DOM tramite la classe
        srcElement.classList.add('image')
        thumbElement.classList.add('thumb_image')
    }

}

// variabile di stato che imposta index = 0 per fare vedere la prima immagine dell'array imageDOMElements
let index = 0
function getNextImage() {

    imageDOMElements[index].classList.remove('active')
    thumbDOMElements[index].classList.remove('thumb_active')
    index++
    if (index >= imageDOMElements.length) {
        index = 0
    }
    imageDOMElements[index].classList.add('active')
    thumbDOMElements[index].classList.add('thumb_active')

}

function getPrevImage() {

    imageDOMElements[index].classList.remove('active')
    thumbDOMElements[index].classList.remove('thumb_active')

    if (index === 0) {
        index = imageDOMElements.length
    }
    index--
    imageDOMElements[index].classList.add('active')
    thumbDOMElements[index].classList.add('thumb_active')

}



