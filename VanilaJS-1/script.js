function scrollAnimation() {
  var introText = document.querySelector("into__text");
  var introPosition = window.getBoundingClientRect().top;
  var screenPosition = window.innerHeight / 1.4;

  if (introPosition < screenPosition) {
    introText.classList.add("into__text__after");
  }
}

window.addEventListener("scroll", scrollAnimation);
