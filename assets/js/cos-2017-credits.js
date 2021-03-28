var shouldScroll = false;
var audio = document.getElementById("audio-last-goodbye");

function scroll() {
  if (!shouldScroll) {
    // document.getElementById("toggleScroll").style.backgroundImage =
    //   "url('../../images/icons8-pause-button-100.png')";
    audio.pause();
    return;
  }
  window.scrollBy(0, 1);
  setTimeout(scroll, 40);
}

scroll();

document.getElementById("toggleScroll").addEventListener("click", function () {
  // this.style.backgroundImage =
  //   "url('../../images/icons8-play-button-circled-100.png')";
  audio.play();
  shouldScroll = !shouldScroll;
  scroll();
});
