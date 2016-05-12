window.onload = function() {
  // sound.play().fade(1, 0, 8000);
  sound.play().fade(0.6, 0, 8000, function () {
      sound2.play().fade(0, 0.5, 0);
  });
  refreshWhitenoise();
  fadeOutWhitenoiseFadeInHeading();
// noiseDataMessage();
};

// audio functions
var sound = new Howl({
  urls: ['/assets/whitenoise.mp3'],
});

var sound2 = new Howl({
  urls: ['/assets/Interstellar.mp3'],
  loop: true,
});
