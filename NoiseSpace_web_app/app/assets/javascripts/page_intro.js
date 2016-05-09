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

// TODO: fix fadeIn noisespace and health info

function fadeInHeading() {
  $('.NoiseSpace-title').append('NoiseSpace.').fadeIn(1000).delay(1000).fadeOut(1000, function() {
    healthInfo();
  });
}

function healthInfo() {
  var healthMessage = "Noise pollution can damage your health. Stress.Annoyance High blood pressure. Cardiovascular disease. Hearing impairment. Sleep disturbance. These effects are triggered by long-term daily exposure to noise levels above 65 dB or with acute exposure above 80 to 85 dB as reported by the World Health Organisation (WHO).\n 85 dB is roughly equivalent to heavy traffic on a busy road.\n Is noise impacting your health?";
  $('.health-info').append(healthMessage).delay(1000).fadeIn(1000).fadeOut(1000);
}
