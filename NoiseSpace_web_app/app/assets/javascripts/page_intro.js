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

// TODO: fix fadeIn functionality

function fadeInHeading() {
  $('.NoiseSpace-title').append('NoiseSpace.').fadeOut(0).fadeIn(4000).delay(1000).fadeOut(4000, function() {
    healthInfo();
  });
}

function healthInfo() {
  var healthMessage = "Noise pollution can damage your health.<br>Stress.<br>Annoyance.<br> High blood pressure.<br>Cardiovascular disease.<br>Hearing impairment.<br>Sleep disturbance.<br>These effects are triggered by long-term<br>daily exposureto noise levels above 65 dB<br>or with acute exposure above 80 to 85 dB<br>as reported by the World Health Organisation (WHO).<br> 85 dB is roughly equivalent to heavy traffic on a busy road.<br> Is noise impacting your health?";
  $('.health-info').append(healthMessage).fadeOut(0).fadeIn(4000).delay(12000).fadeOut(4000, function () {
    $('.data-visualisation-container').fadeIn(1000, function () {
      drawHourlyData(hourlyData);
      draw(dataset);
    });
  });
}
