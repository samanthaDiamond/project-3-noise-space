function draw(dataset) {
  var margin = 50;
  var width = 700;
  var height = 300;

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
}

parseDatetime = d3.time.format("%Y:%m:%d:%H:%M:%S").parse;

var dataset;

$.ajax({
  type: 'GET',
  url: 'measurements/data.json',
  dataType: 'json',
  success: function(response) {
    dataset = response;
  }
});


// var dataset;
// d3.csv("assets/data/data.csv", function(data) {
//   dataset = data.map(function(d) {return {datetime: parseDatetime(d.datetime), sound: +d["sound"]}});
// });
