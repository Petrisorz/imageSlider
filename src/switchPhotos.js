export{storeCurrentPictures,photoGalery};
import { currentImage } from ".";
let photoGalery = [];
function storeCurrentPictures(){
    let  photoAlbum = document.querySelector('#photoGalery');
    for(let i = 0 ; i < photoAlbum.children.length ; i++){
        photoGalery.push( photoAlbum.children[i]  )
        console.log(photoGalery);
    }
    photoGalery[currentImage].classList.remove('hidden')
}
