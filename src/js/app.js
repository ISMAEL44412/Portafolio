const navegacion = document.querySelector(".header");
const sobreMi = document.querySelector(".hero");

document.addEventListener("scroll", function () {
  if (sobreMi.getBoundingClientRect().bottom < 1) {
    navegacion.classList.add("fixed");
  } else {
    navegacion.classList.remove("fixed");
  }
});
