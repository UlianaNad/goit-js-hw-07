import { galleryItems } from './gallery-items.js';
// Change code below this line


const gallery = document.querySelector('.gallery');

const imageHtml = galleryItems.map((img) => {
    return `
    <li class="gallery__item">
        <a class="gallery__link" href="${img.original}">
            <img
                class="gallery__image"
                src="${img.preview}"
                data-source="${img.original}"
                alt="${img.description}"
            />
        </a>
    </li>
    `;
  });

gallery.insertAdjacentHTML("afterBegin", imageHtml.join(""));

gallery.addEventListener('click', onImageClick);

function onImageClick(e){
    e.preventDefault();
    if(e.target.nodeName !== 'IMG') return;

    const instance = basicLightbox.create(`
    <img src="${e.target.dataset.source}" width="800" height="600">`);

    instance.show();

    gallery.addEventListener('keydown', closeModalEscape)

    function closeModalEscape(e){
        if(e.code === "Escape"){
            instance.close();
            gallery.removeEventListener('keydown', closeModalEscape);
        }
    }

 
}

