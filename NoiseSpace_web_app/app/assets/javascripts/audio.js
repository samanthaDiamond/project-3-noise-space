var sound = new Howl({
  urls: ['/audio/whitenoise.mp3'],
  loop: true,
}).play();

sound();
