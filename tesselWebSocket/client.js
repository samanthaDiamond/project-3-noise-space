// The IP address of your Tessel. Find it with `tessel wifi -l` and set it here
var ipAddress = '192.168.0.8'

var ws = require('nodejs-websocket');
var port = 8000;

var fs = require("fs");
var filename = "C:\\Users\\your\\Desktop\\Tessel\\" + "measurements.csv";


fs.writeFile(filename,'',function (err) {
  if (err) return console.log(err);
});

function getDateTime() {

    var date = new Date();

    var hour = date.getHours();
    hour = (hour < 10 ? "0" : "") + hour;

    var min = date.getMinutes();
    min = (min < 10 ? "0" : "") + min;

    var sec = date.getSeconds();
    sec = (sec < 10 ? "0" : "") + sec;

    var year = date.getFullYear();

    var month = date.getMonth() + 1;
    month = (month < 10 ? "0" : "") + month;

    var day = date.getDate();
    day = (day < 10 ? "0" : "") + day;

    return year + ":" + month + ":" + day + ":" + hour + ":" + min + ":" + sec;
};

var addMeasurementToCSV = function (noise) {
  fs.appendFile(filename, getDateTime()+","+noise+"\n", function (err) {
    if (err) return console.log(err);
  });
};

var noSample = 0;

// When we get a connection
var connection = ws.connect('ws://' + ipAddress + ':' + port, function() {
  console.log('Connected to the Tessel!');
  // When we get text back
  connection.on('text', function(text) {
    // print it out
    addMeasurementToCSV(text);
    noSample += 1;
    if (noSample%1000 === 0) {
      console.log(noSample,getDateTime());
    };
  });
  connection.on('close', function() {
    db.close()
  });

});
