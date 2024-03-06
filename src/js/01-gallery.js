import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
// Add imports above this line

import { galleryItems } from "./gallery-items";
// Change code below this line
const galleryRef = document.querySelector("ul.gallery");

function renderImage(gallery) {
  return gallery.reduce(
    (acc, { original, preview, description }) =>
      acc +
      `
    <li class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a> `,
    ""
  );
}

galleryRef.insertAdjacentHTML("beforeend", renderImage(galleryItems));

function handleCleck(e) {
  e.preventDefault();
  let gallery = new SimpleLightbox(".gallery a", {
    captionsData: "alt",
    captionDelay: 250,
  });
  gallery.on("show.simplelightbox", function () {
    document.addEventListener("keydown", onCloseView);

    function onCloseView(event) {
      if (event.key === "Escape") {
        gallery.on("close.simplelightbox", function () {
          // Do something…
        });
      }
      document.removeEventListener("keydown", onCloseView);
    }
  });
}

galleryRef.addEventListener("click", handleCleck);
