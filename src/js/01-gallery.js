// Add imports above this line
import { galleryItems } from './gallery-items';
// Описаний в документації
import SimpleLightbox from 'simplelightbox';
// Додатковий імпорт стилів
import 'simplelightbox/dist/simple-lightbox.min.css';
console.log(galleryItems);

const refs = {
  div: document.querySelector('.gallery'),
};

const galeryCards = creatGaleryImage(galleryItems);
refs.div.insertAdjacentHTML('beforeend', galeryCards);

function creatGaleryImage(item) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `
    <div class="gallery__item">
    <a class="gallery__link" href="${original}">
    <img
     class="gallery__image"
    src="${preview}"
    data-source="${original}"
    
    alt="${description}"
    />
    </a>
    </div>
    `;
    })
    .join('');
}

const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
  captionType: 'alt',
  scrollZoom: false,
  doubleTapZoom: 1,
});
