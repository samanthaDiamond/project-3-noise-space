// TODO: stop refreshWhitenoise callback once canvas removed

var drawCellsInterval = setInterval(drawCells, 100);

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
    clearInterval(drawCellsInterval);
    $("#canvasCells").remove();
    fadeInHeading();
  });
}

function fadeInHeading() {
  $('body').append('<h1 class="NoiseSpace-title">NoiseSpace.</h1>');
}


// function refreshWhitenoise() {
//   drawCells();
//   setTimeout(function(){
//     refreshWhitenoise();
//   }, 100);
// }

// function refreshWhitenoise() {
//   drawCellsInterval();
// }

// function setIntervalX(callback, delay, repetitions) {
//     var x = 0;
//     var intervalID = window.setInterval(function () {
//
//        callback();
//
//        if (++x === repetitions) {
//            window.clearInterval(intervalID);
//            fadeOutWhitenoiseFadeInheading()
//
//        }
//     }, delay);
// }

// function drawCellsInterval(callback, delay, repetitions) {
//   var reps = 0;
//   var intervalID = setInterval(function () {
//     drawCells();
//     if (++reps === repetitions) {
//       clearInterval(intervalID);
//       fadeOutWhitenoiseFadeInheading();
//     }
//   }, delay);
// }
