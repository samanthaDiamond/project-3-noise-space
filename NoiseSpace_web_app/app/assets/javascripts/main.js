window.onload = function() {
  var sound = new Howl({
    urls: ['/audios/whitenoise'],
    loop: true,
  }).play();
  refreshWhitenoise();
  fadeOutWhitenoiseFadeInHeading();
};
