var ws = require('nodejs-websocket');
// var led = require('tessel-led');
// var LEDModule = require('./led_module')
var port = 8000;

var tessel = require('tessel');

var ambientlib = require('ambient-attx4');

var ambient = ambientlib.use(tessel.port['A']);

// Create the websocket server, provide connection callback
var server = ws.createServer(function(conn) {
  console.log('Accepted new connection...');
  // If get a binary stream is opened up
  var measurements = [];
  var numMeasurements = 0;
  setInterval(function() {
    tessel.led[2].off();
    ambient.getSoundLevel(function(err, sounddata) {
      if (err) {
        tessel.led[2].on();
      } else {
        measurements.push(sounddata);
        numMeasurements += 1;
        // console.log(numMeasurements);
      }
    });
    if (numMeasurements >= 25) {
      // console.log('calc average');
      var sum = measurements.reduce(function(a, b) { return a + b; });
      var average = sum / numMeasurements;
      conn.sendText(average.toString());
      measurements = [];
      numMeasurements = 0;
    }
  }, 200); // The readings will happen every 0.1 seconds

  conn.on("close", function(code, reason) {
    console.log("Connection closed");
  });
}).listen(port);

console.log('Listening on port', port);
