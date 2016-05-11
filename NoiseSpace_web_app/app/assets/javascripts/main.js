window.onload = function() {
  sound.play().fade(1, 0, 8000);
  refreshWhitenoise();
  fadeOutWhitenoiseFadeInHeading();
// noiseDataMessage();
};

// audio functions
var sound = new Howl({
  urls: ['/assets/whitenoise.mp3'],
});
