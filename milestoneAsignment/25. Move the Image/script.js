const image = document.querySelector("#image");

document.addEventListener("keydown", function (event) {
  let currentPosition = image.getBoundingClientRect();
  let containerPosition = image.parentElement.getBoundingClientRect();
  var step = 10;


  if (event.keyCode === 37 && currentPosition.left > containerPosition.left) {
    // left arrow key
    image.style.left = currentPosition.left - step + "px";
  } else if (
    event.keyCode === 39 &&
    currentPosition.right < containerPosition.right
  ) {
    // right arrow key
    image.style.left = currentPosition.left + step + "px";
  } else if (
    event.keyCode === 38 &&
    currentPosition.top > containerPosition.top
  ) {
    // up arrow key
    image.style.top = currentPosition.top - step + "px";
  } else if (
    event.keyCode === 40 &&
    currentPosition.bottom < containerPosition.bottom
  ) {
    // down arrow key
    image.style.top = currentPosition.top + step + "px";
  }
});
