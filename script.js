const hamburger = document.querySelector(".nav__hamburger");
const linksContainer = document.querySelector(".nav__menu");
const links = document.querySelectorAll(".nav__menu__link");

hamburger.addEventListener("click", () => {
  linksContainer.classList.toggle("active");
  hamburger.classList.toggle("active");
});

window.addEventListener("resize", () => {
  if (window.matchMedia("(max-width: 550px)").matches) {
    linksContainer.classList.remove("active");
    hamburger.classList.remove("active");
  }
});

links.forEach((link) => {
    link.addEventListener("click", () => {
      if (window.matchMedia("(max-width: 550px)").matches) {
        linksContainer.classList.remove("active");
        hamburger.classList.remove("active");
    }
  });
});