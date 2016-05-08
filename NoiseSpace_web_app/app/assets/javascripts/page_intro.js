var drawCellsInterval;

function refreshWhitenoise() {
  drawCellsInterval = setInterval(drawCells, 100);
}

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
  $("#canvasCells").delay(3000).fadeOut(5000, function() {
    clearInterval(drawCellsInterval);
    $("#canvasCells").remove();
    fadeInHeading();
  });
}

function fadeInHeading() {
  var NoiseSpaceHeading = $('<h1 class="NoiseSpace-title">NoiseSpace.</h1>').fadeIn(3000);
  $('body').append(NoiseSpaceHeading).delay(4000).fadeOut(3000, function() {
    healthInfo();
  });
}

function healthInfo() {
  var healthMessage = "Noise pollution can damage your health.\n Stress.\n Annoyance.\n High blood pressure.\n Cardiovascular disease.\n Hearing impairment.\n Sleep disturbance.\n These effects are triggered by long-term daily exposure to noise levels above 65 dB or with acute exposure above 80 to 85 dB as reported by the World Health Organisation (WHO).\n 85 dB is roughly equivalent to heavy traffic on a busy road.\n Is noise impacting your health?";
  var healthInfoContent = $('<div class="health-info">'+healthMessage+'</div>').fadeIn(3000);
  $('body').append(healthInfoContent).delay(4000).fadeOut(3000);
  // $('.health-info').append('<p>Noise pollution can damage your health.\n Stress.\n Annoyance.\n High blood pressure.\n Cardiovascular disease.\n Hearing impairment.\n Sleep disturbance.\n These effects are triggered by long-term daily exposure to noise levels above 65 dB or with acute exposure above 80 to 85 dB as reported by the World Health Organisation (WHO).\n 85 dB is roughly equivalent to heavy traffic on a busy road.\n Is noise impacting your health?</p>');
}
