document.addEventListener("DOMContentLoaded", () => {
    const hamburger = document.querySelector(".nav__hamburger");
    const linksContainer = document.querySelector(".nav__menu");
    const links = document.querySelectorAll(".nav__menu__link");
  
    // Hamburger toggle
    hamburger.addEventListener("click", () => {
        console.log("Hamburger clicked"); // This will show in the console when clicked
        linksContainer.classList.toggle("active");
        hamburger.classList.toggle("active");
      });
  
    // Resize event to remove active class
    window.addEventListener("resize", () => {
      if (window.matchMedia("(max-width: 550px)").matches) {
        linksContainer.classList.remove("active");
        hamburger.classList.remove("active");
      }
    });
  
    // Close menu on link click for small screens
    links.forEach((link) => {
      link.addEventListener("click", () => {
        if (window.matchMedia("(max-width: 550px)").matches) {
          linksContainer.classList.remove("active");
          hamburger.classList.remove("active");
        }
      });
    });
  });