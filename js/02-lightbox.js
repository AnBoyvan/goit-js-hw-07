import { galleryItems } from "./gallery-items.js";
// Change code below this line

const refs = {
  galleryContainer: document.querySelector(".gallery"),
};

function makeGalleryItems(items) {
  return items
    .map(({ preview, description, original }) => {
        return `<li><a class="gallery__item" href="${original}">
      <img class="gallery__image"
      src="${preview}" 
      alt="${description}" 
      />
      </a></li>`;
    })
    .join("");
}

refs.galleryContainer.insertAdjacentHTML(
  "beforeend",
  makeGalleryItems(galleryItems)
);

new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionDelay: 250,
});