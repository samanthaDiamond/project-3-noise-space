// intro page
window.onload = function() {
  sound.play().fade(1, 0, 8000);
  refreshWhitenoise();
  fadeOutWhitenoiseFadeInHeading();
  drawHourlyData(hourlyData);
  draw(dataset);
// noiseDataMessage();
};

// audio functions
var sound = new Howl({
  urls: ['/assets/whitenoise.mp3'],
});

// // data visualisation page
// window.onload = function() {
//   drawHourlyData(hourlyData);
//   draw(dataset);
// };
