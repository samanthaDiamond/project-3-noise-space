var ws = require('nodejs-websocket');
// var led = require('tessel-led');
// var LEDModule = require('./led_module')
var port = 8000;

var tessel = require('tessel');

var ambientlib = require('ambient-attx4');

var ambient = ambientlib.use(tessel.port['A']);

// Create the websocket server, provide connection callback
var server = ws.createServer(function(connection) {
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
      }
    });
    if (numMeasurements >= 25) {
      // calculate average of last 25 measurements taken over 5 seconds.
      var sum = measurements.reduce(function(a, b) { return a + b; });
      var average = sum / numMeasurements;
      // send average noise reading to client.
      connection.sendText(average.toString());
      // reset measurements array and counter
      measurements = [];
      numMeasurements = 0;
    }
  }, 200); // 5 noise readings per second.

  Connection.on("close", function(code, reason) {
    tessel.led[2].on();
    console.log("Connection closed");
  });
}).listen(port);

console.log('Listening on port', port);
