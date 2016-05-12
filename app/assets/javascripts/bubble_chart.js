var hourlyData;

function y_pos(day) {
  var pos;
  switch (day){
  case 'Monday':
    pos = 1;
    break;
  case 'Tuesday':
    pos = 2;
    break;
  case 'Wednesday':
    pos = 3;
    break;
  case 'Thursday':
    pos = 4;
    break;
  case 'Friday':
    pos = 5;
    break;
  case 'Saturday':
    pos = 6;
    break;
  case 'Sunday':
    pos = 7;
    break;
  default:
    console.log("Invalid input.");
  }
  return pos;
}

var drawHourlyData = function (hourlyData) {

  var w = 1300,
      h = 400,
      top_pad = 100,
      left_pad = 100,
      margin = 50;

  var x = d3.scale.linear()
      .domain([-1, 23])
      .range([left_pad, w - left_pad * 4]);

  var minRadius = 4; // px of smallest circle
  var maxRadius = 14; // px of biggest circle
  var noise_extent = d3.extent(hourlyData, function(d){
    return d.noise;
  });

  var circle_radius = function (noise) {
    var m = (maxRadius - minRadius)/(noise_extent[1] - noise_extent[0]);
    var b = minRadius - m * noise_extent[0];
    return m*noise+b;
  };

  var y = d3.scale.linear()
      .domain([0, 7])
      .range([h - top_pad, top_pad]);

  var svg = d3.select(".bubble_chart")
    .append("div")
    .classed("svg-container", true)
    .append("svg:svg")
      .attr("preserveAspectRatio", "xMinYMin meet")
      .attr("viewBox","0 0 " + w + " " + h)
      .classed("svg-content-responsive", true);

  svg.selectAll(".bubble_chart circle")
      .data(hourlyData)
      .enter().append("circle")
        .attr("class", "dot")
        .attr("cx", function (d) {
          return x(d.time);
        })
        .attr("cy", function (d) {
          return y(y_pos(d.day) + "");
        })
        .attr("r", function (d) {
          return circle_radius(d.noise );
        });

  var xAxis = d3.svg.axis().scale(x).orient("bottom")
      .tickFormat(function(d) {
        var f = ["12AM", "1AM", "2AM", "3AM", "4AM", "5AM", "6AM", "7AM", "8AM", "9AM", "10AM", "11AM", "12PM", "1PM", "2PM", "3PM", "4PM", "5PM", "6PM", "7PM", "8PM", "9PM", "10PM", "11PM"];
          return (f[d]);
  });

  var yAxis = d3.svg.axis().scale(y).orient("left")
      .tickFormat(function(d) {
        var f = ["", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
          return (f[d]);
  });

  svg.append("g")
      .attr("class", "axis")
      .attr("transform", "translate(0, " + (h - top_pad) + ")")
      .call(xAxis);

  svg.append("g")
      .attr("class", "axis")
      .attr("transform", "translate(" + (left_pad) + ", 0)")
      .call(yAxis);

  $(".bubble_chart svg").css({top: 50, left: 200, position:'absolute'});

  d3.select(".bubble_chart svg")
    .append("text")
      .attr("class","bubble-chart-title")
    .text("AVERAGE HOURLY NOISE MEASUREMENTS PER DAY")
      .attr("x", w / 6)
      .attr("y", margin / 1)
      .style("fill", "white")
      .style("font-size", "24px");

  d3.selectAll(".bubble_chart circle")
    .style("fill", function(d) {
       var returnColor;
       if (y_pos(d.day) === 1) {  // #FF079B
         returnColor = "#FF079B"; // #FF26C6
       } else if (y_pos(d.day) === 2) {
         returnColor = "#FF26C6"; // #DB1DE8
       } else if (y_pos(d.day) === 3) {
         returnColor = "#DB1DE8"; // #C72CFF
       } else if (y_pos(d.day) === 4) {
         returnColor = "#C72CFF"; // #881DE8
       } else if (y_pos(d.day) === 5) {
         returnColor = "#C617E8"; // #C617E8
       } else if (y_pos(d.day) === 6) {
         returnColor = "#881DE8";  // #DA14FF
       } else {
         returnColor = "#6615E8"; // #05E9FF
       }
       return returnColor;
    });

};

$.ajax({
  type: 'GET',
  url: 'measurements/avg_data.json',
  dataType: 'json',
  success: function(response) {
    hourlyData = response;
  }
});
