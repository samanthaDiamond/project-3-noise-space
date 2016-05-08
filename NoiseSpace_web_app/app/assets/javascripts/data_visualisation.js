function draw(dataset) {
  var margin = 50;
  var width = 1000;
  var height = 450;

  d3.select("body")
    .append("svg")
      .attr("width", width)
      .attr("height", height)
    .selectAll("circle")
    .data(dataset)
    .enter()
    .append("circle");

  var x_extent = d3.extent(dataset, function(d){
    return d.datetime;
  });

  var x_scale = d3.scale.linear()
    .range([margin,width-margin])
    .domain(x_extent);

  var y_extent = d3.extent(dataset, function(d){
    return d.dB;
  });

  var y_scale = d3.scale.linear()
    .range([height-margin, margin])
    .domain(y_extent);

  d3.selectAll("circle")
    .attr("cx", function(d){return x_scale(d.datetime);})
    .attr("cy", function(d){return y_scale(d.dB);})
    .attr("r", 4);

  var x_axis = d3.svg.axis().scale(x_scale);

  d3.select("svg")
    .append("g")
      .attr("class", "x axis")
      .attr("transform", "translate(0," + (height-margin) + ")")
    .call(x_axis);

  var y_axis = d3.svg.axis().scale(y_scale).orient("left");

  d3.select("svg") .append("g")
    .attr("class", "y axis")
    .attr("transform", "translate(" + margin + ", 0 )")
  .call(y_axis);

  d3.select(".x.axis")
    .append("text")
      .attr("class", "axis_label")
    .text("datetime")
      .attr("x", (width / 2) - margin)
      .attr("y", margin / 1.5);

  d3.select(".y.axis")
    .append("text")
      .attr("class", "axis_label")
    .text("noise(dB)")
      .attr("transform", "rotate (-90, -43, 0) translate(-280)");

}






var dataset;

$.ajax({
  type: 'GET',
  url: 'measurements/data.json',
  dataType: 'json',
  success: function(response) {
    parseDatetime = d3.time.format("%Y-%m-%dT%H:%M:%S.%LZ").parse;
    dataset = response.map(function(d) {
      return {datetime: parseDatetime(d.datetime), dB: +d["dB"]}
    });
  }
});


// var dataset;
// d3.csv("assets/data/data.csv", function(data) {
//   dataset = data.map(function(d) {return {datetime: parseDatetime(d.datetime), sound: +d["sound"]}});
// });
