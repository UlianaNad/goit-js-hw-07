import { galleryItems } from './gallery-items.js';
// Change code below this line

const gallery = document.querySelector(".gallery");

const imageHtml = galleryItems.map((img) => { 
    return `<li class="gallery__item">
                <a class="gallery__link" href="${img.original}">
                    <img class="gallery__image" src="${img.preview}" alt="${img.description}" />
                </a>
            </li>
        `}).join("");

gallery.insertAdjacentHTML("afterBegin", imageHtml);


new SimpleLightbox('.gallery a', {
    captionsData: 'alt',
    captionDelay: 250,
 });

