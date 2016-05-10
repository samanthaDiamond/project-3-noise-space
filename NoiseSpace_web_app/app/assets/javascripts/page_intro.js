var drawCellsInterval;

function refreshWhitenoise() {
  drawCellsInterval = setInterval(drawCells, 100);
}

// TODO: convert to jquery

function drawCells() {
  var ctx = document.getElementById('canvasCells').getContext('2d');
  for (var y = 0; y <= 200; y++) {
    for (var x = 0; x <= 200; x++) {
      var cellColor = Math.random() < 0.5 ? "white" : "black";
      ctx.fillStyle = cellColor;
      ctx.fillRect(x, y, 10, 10);
      }
    }
  }

function fadeOutWhitenoiseFadeInHeading() {
  $("#canvasCells").delay(1000).fadeOut(1000, function() {
    clearInterval(drawCellsInterval);
    $("#canvasCells").remove();
    fadeInHeading();
  });
}

function fadeInHeading() {
  $('.NoiseSpace-title').append('NoiseSpace.').fadeOut(0).fadeIn(1000).delay(1000).fadeOut(1000, function() {
    welcomeInfo();
  });
}

function welcomeInfo() {
  var welcomeMessage = "<span>Welcome to NoiseSpace</span>. <br><br>NoiseSpace is about raising awareness of noise pollution.<br>Do you ever feel like noise has robbed you of your privacy? <br>Do you crave an escape to nature to hear nothing but the wind and wildlife? <br>If you’re thinking yes, I hear you!!";
  $('.welcome-info').append('<p welcome-message>'+ welcomeMessage +'</p>').fadeOut(0).fadeIn(1000).delay(1000).fadeOut(1000, function () {
    healthInfo();
  });
}

function healthInfo() {
  var healthMessage = "To make things worse noise pollution can damage your health. <br>Long-term noise exposure or acute exposure to high noise<br>levels, such as heavy traffic on a busy road, can induce: <br><br>Stress. Annoyance. High blood pressure. Cardiovascular disease.<br> Hearing impairment. Sleep disturbance.";
  $('.health-info').append('<p health-message>'+ healthMessage +'</p>').fadeOut(0).fadeIn(1000).delay(1000).fadeOut(1000, function () {
    noiseExperience();
  });
}

function noiseExperience() {
  var noiseExperienceMessage = "I live on a somewhat busy road and the noise irritates me at times. <br>I often wonder what times of the day and days of the week are noisiest. <br>Or is the noise constant? I decided to find out...";
  $('.noise-experience').append('<p noise-experience-message>'+ noiseExperienceMessage +'</p>').fadeOut(0).fadeIn(1000).delay(1000).fadeOut(1000, function () {
    noiseDataMessage();
  });
}

function noiseDataMessage() {
  var noiseDataMessage = "I monitored the noise levels in my street for 10 days using a Tessel2<br>microcontroller. You are about to see a representation of the data <br>from my experiment along with a step-by-step guide for replicating<br>this experiment so you can give it a go yourself.<br>";
  $('.noise-data-info').append('<p noise-data-message>'+ noiseDataMessage +'</p>').fadeOut(0).fadeIn(1000).delay(1000).fadeOut(1000, function () {
    $('.data-visualisation-container').fadeOut(0).fadeIn(1000, function () {
      drawHourlyData(hourlyData);
      draw(dataset);
    });
  });
}

// function fadeInDataVisPage() {
//   $('.NoiseSpace-logo').append('NoiseSpace.').fadeOut(0).fadeIn(1000);
//   $('.DIY-link').append('DIY').fadeOut(0).fadeIn(1000);
//   drawHourlyData(hourlyData).fadeOut(0).fadeIn(1000);
//   draw(dataset).fadeOut(0).fadeIn(1000);
// }
