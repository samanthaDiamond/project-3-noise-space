// TODO: stop refreshWhitenoise callback once canvas removed

function refreshWhitenoise() {
  drawCells();
  setTimeout(function(){
    refreshWhitenoise();
  }, 100);
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

function fadeOutWhitenoiseFadeInheading() {
  $("#canvasCells").delay(3000).fadeOut(5000, function() {
    // $("#canvasCells").remove();
    fadeInHeading();
  });
}

function fadeInHeading() {
  $('body').append('<h1 class="NoiseSpace-title">NoiseSpace.</h1>');
}
