const button = document.querySelector(".button--popup");

button.addEventListener('click', stopAnimation);

function stopAnimation() {
  button.style.animation = 'none';
}