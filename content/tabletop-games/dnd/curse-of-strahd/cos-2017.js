var shouldScroll = false;
var audio = document.getElementById("audio-last-goodbye");
var rollCreditsButton = document.getElementById("toggleScroll");

function scroll() {
  if (!shouldScroll) {
    audio.pause();
    return;
  }

  window.scrollBy(0, 1);
  setTimeout(scroll, 30);
}

rollCreditsButton.addEventListener("click", function () {
  audio.play();

  if (!shouldScroll) {
    rollCreditsButton.textContent = "Pause the Credits";
  } else {
    rollCreditsButton.textContent = "Roll the Credits";
  }

  shouldScroll = !shouldScroll;
  scroll();
});

audio.addEventListener("ended", function () {
  shouldScroll = !shouldScroll;
  scroll();
  rollCreditsButton.textContent = "Roll the Credits";
});
