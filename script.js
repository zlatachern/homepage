const button = document.querySelector(".button--popup");
const popup = document.getElementById("popup");

button.addEventListener("click", function() {
  if (popup.style.display === "block") {
    popup.style.display = "none";
  } else {
    popup.style.display = "block";
  }
});

button.addEventListener('click', stopAnimation);

function stopAnimation() {
  button.style.animation = 'none';
}