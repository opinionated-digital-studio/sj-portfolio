var overlay = document.querySelector(".overlay");
var largeLinks = document.getElementsByClassName("link--large");

Array.from(largeLinks).forEach(function (element) {
  element.addEventListener("mouseover", () => {
    overlay.classList.toggle("overlay--is-active");
  });
  element.addEventListener("mouseleave", () => {
    overlay.classList.toggle("overlay--is-active");
  });
});
