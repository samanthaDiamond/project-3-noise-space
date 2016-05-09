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
  $("#canvasCells").delay(4000).fadeOut(4000, function() {
    clearInterval(drawCellsInterval);
    $("#canvasCells").remove();
    fadeInHeading();
  });
}

// TODO: fix fadeIn functionality

function fadeInHeading() {
  $('.NoiseSpace-title').append('NoiseSpace.').fadeOut(0).fadeIn(4000).delay(1000).fadeOut(4000, function() {
    welcomeInfo();
  });
}

function welcomeInfo() {
  var welcomeMessage = "<span>Welcome to NoiseSpace</span>. <br><br>NoiseSpace is about raising awareness of noise pollution.<br>Do you ever feel like noise has robbed you of your privacy? <br>Do you crave an escape to nature to hear nothing but the wind and wildlife? <br>If you’re thinking yes, I hear you!!";
  $('.welcome-info').append('<p welcome-message>'+ welcomeMessage +'</p>').fadeOut(0).fadeIn(4000).delay(4000).fadeOut(4000, function () {
    healthInfo();
  });
}

function healthInfo() {
  var healthMessage = "And to make things worse noise pollution can damage your health. <br>Long-term noise exposure or acute exposure to high noise<br>levels, such as heavy traffic on a busy road, can induce: <br><br>Stress. Annoyance. High blood pressure. Cardiovascular disease.<br> Hearing impairment. Sleep disturbance.";
  $('.health-info').append('<p health-message>'+ healthMessage +'</p>').fadeOut(0).fadeIn(4000).delay(4000).fadeOut(4000, function () {
    noiseDataMessage();
  });
}

function noiseDataMessage() {
  var noiseDataMessage = "...";
  $('.noise-data-info').append('<p noise-data-message>'+ noiseDataMessage +'</p>').fadeOut(0).fadeIn(4000).delay(4000).fadeOut(4000, function () {
    $('.data-visualisation-container').fadeOut(0).fadeIn(4000, function () {
      drawHourlyData(hourlyData);
      draw(dataset);
    });
  });
}
