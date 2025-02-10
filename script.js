function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

window.addEventListener("scroll", function () {
  let backToTop = document.getElementById("back-to-top");
  if (window.scrollY > 300) {
    backToTop.style.opacity = "1";
  } else {
    backToTop.style.opacity = "0";
  }
});

