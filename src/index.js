import _ from 'lodash';
import './main.css';
import { storeCurrentPictures,photoGalery} from './switchPhotos';
export {currentImage};
let currentImage = 0;
storeCurrentPictures();
console.log(photoGalery  + " this debug")
let btnLeft = document.querySelector('#leftArrow');
let btnRight = document.querySelector('#rightArrow');

btnLeft.addEventListener('click',()=>{
    if(currentImage > 0){
        photoGalery[currentImage].classList.add('hidden')
        currentImage -= 1;
        photoGalery[currentImage].classList.remove('hidden')
        console.log(currentImage +"movedLEft")
    }
})
btnRight.addEventListener('click',()=>{
    if(currentImage+1 < photoGalery.length){
    photoGalery[currentImage].classList.add('hidden')
    currentImage += 1;
    photoGalery[currentImage].classList.remove('hidden')
    console.log(currentImage +"movedright")
}
})