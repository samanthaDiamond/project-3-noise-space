var dataset;
var minX;
var maxX;
var graphTimeWidth = 12*1000*60*60; // 12 hours in milliseconds

function draw(dataset) {
  var margin = 50;
  var width = 1200;
  var height = 250;
  var left_pad = 20;
  var right_pad = 20;

d3.select(".scatter_plot")
  .append("div")
  .classed("svg-container", true)
  .append("svg")
  .attr("preserveAspectRatio", "xMinYMin meet")
  .attr("viewBox","0 0 " + width + " " + height)
  .classed("svg-content-responsive", true)
  .selectAll("circle")
  .data(dataset)
  .enter()
  .append("circle");

  $(".scatter_plot svg").css({top: 450, left: 200, bottom: 0, right: 0, position: "absolute"});

  d3.select(".scatter_plot svg")
  .append("text")
    .attr("class","scatter-plot-title")
  .text("DAILY NOISE MEASUREMENTS")
    .attr("x", width / 4.3)
    .attr("y", margin/ 1.5)
    .style("fill", "white")
    .style("font-size", "22px");

  parseDatetime = d3.time.format("%Y-%m-%d %H:%M:%S").parse;

  var x_extent = [parseDatetime("2016-04-27 00:00:00"), parseDatetime("2016-05-06 23:59:59")];

  var x_scale = d3.time.scale()
    .range([0 + left_pad, width / 1.4 ])
    .domain(x_extent);

  var y_extent = [0.15, 0.3];

  var y_scale = d3.scale.linear()
    .range([height-margin, margin])
    .domain(y_extent);

  d3.selectAll(".scatter_plot circle")
    .attr("cx", function(d){return x_scale(d.datetime);})
    .attr("cy", function(d){return y_scale(d.dB);})
    .attr("r", 4);

  var x_axis = d3.svg.axis().scale(x_scale).tickFormat(d3.time.format("%a"));

  d3.select(".scatter_plot svg")
    .append("g")
      .attr("class", "x axis")
      .attr("transform", "translate(0," + (height-margin) + ")")
    .call(x_axis);

  var y_axis = d3.svg.axis().scale(y_scale).orient("left");

  d3.select(".scatter_plot .y.axis")
    .append("text")
      .attr("class", "axis_label")
    .text("Noise(dB)")
      .attr("transform", "rotate (-90, -43, 0) translate(-280)");
}

$.ajax({
  type: 'GET',
  url: 'measurements/data.json',
  dataType: 'json',
  success: function(response) {
    parseDatetime = d3.time.format("%Y-%m-%dT%H:%M:%S.%LZ").parse;
    dataset = response.map(function(d) {
      return {datetime: parseDatetime(d.datetime), dB: +d["dB"]}
    });

    minX = dataset[0].datetime;
    maxX = dataset[1].datetime;
    maxX.setTime(minX.getTime()+graphTimeWidth);
  }
});
