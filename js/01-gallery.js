import { galleryItems } from "./gallery-items.js";
// Change code below this line

const refs = {
  galleryContainer: document.querySelector(".gallery"),
};

const instance = basicLightbox.create(`
<div class="modal">
<img>
</div>`);

function makeGalleryItems(items) {
  return items
    .map(({ preview, description, original }) => {
      return `<div class="gallery__item">
      <a class="gallery__link" href="${original}">
      <img width="354" height="240" 
      class="gallery__image"
      src="${preview}" 
      data-source="${original}" 
      alt="${description}"
      />
      </a>
      </div>`;
    })
    .join("");
}

refs.galleryContainer.insertAdjacentHTML(
  "beforeend",
  makeGalleryItems(galleryItems)
);

function openModal(e) {
  e.preventDefault();

  if (e.target.nodeName !== "IMG") {
    return;
  }

  const originalImgUrl = e.target.dataset.source;
  instance.element().querySelector("img").src = originalImgUrl;
  instance.show();
  window.addEventListener("keydown", onEscCloseModal);
}

function onEscCloseModal(e) {
  if (!(instance.visible() && e.key === "Escape")) {
    return;
  }
  instance.close();
  window.removeEventListener("keydown", onEscCloseModal);
}

refs.galleryContainer.addEventListener("click", openModal);
