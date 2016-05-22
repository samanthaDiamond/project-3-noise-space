var hourlyData;

var y_pos = {
  "Monday" : 1,
  "Tuesday" : 2,
  "Wednesday" : 3,
  "Thursday" : 4,
  "Friday" : 5,
  "Saturday" : 6,
  "Sunday" :7
};

var drawHourlyData = function (hourlyData) {

  var w = 1300,
      h = 400,
      top_pad = 100,
      left_pad = 100,
      margin = 50;

  var x = d3.scale.linear()
      .domain([-1, 23]) // scale for max and min data value
      .range([left_pad, w - left_pad * 4]); // scale for max and min svg values

  var minRadius = 4;
  var maxRadius = 14;
  var noise_extent = d3.extent(hourlyData, function(d){
    return d.noise;
  });

  // radius = k * noise + b
  var circle_radius = function (noise) {
    var k = (maxRadius - minRadius)/(noise_extent[1] - noise_extent[0]); // k = rise / run (slope)
    var b = minRadius - k * noise_extent[0]; // y-offset
    return k * noise + b;
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
      .enter()
      .append("circle")
        .attr("class", "dot")
        .attr("cx", function (d) {
          return x(d.time);
        })
        .attr("cy", function (d) {
          return y(y_pos[d.day] + "");
        })
        .attr("r", function (d) {
          return circle_radius(d.noise);
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
       var color = {
         "Monday" : "#FF079B",
         "Tuesday" : "#FF26C6",
         "Wednesday" : "#DB1DE8",
         "Thursday" : "#C72CFF",
         "Friday" : "#C617E8",
         "Saturday" : "#881DE8",
         "Sunday" : "#6615E8"
       };
       return color[d.day];
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
