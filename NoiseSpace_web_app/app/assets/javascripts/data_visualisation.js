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
    return d.sound;
  });

  var y_scale = d3.scale.linear()
    .range([height-margin, margin])
    .domain(y_extent);

  d3.selectAll("circle")
    .attr("cx", function(d){return x_scale(d.datetime);})
    .attr("cy", function(d){return y_scale(d.sound);})
    .attr("r", 4);
}

parseDatetime = d3.time.format("%Y:%m:%d:%H:%M:%S").parse;
var dataset = [
  {datetime: parseDatetime("2016:04:25:14:36:22"), sound: Math.random()},
  {datetime: parseDatetime("2016:04:25:14:36:23"), sound: Math.random()},
  {datetime: parseDatetime("2016:04:25:14:36:24"), sound: Math.random()},
  {datetime: parseDatetime("2016:04:25:14:36:25"), sound: Math.random()},
  {datetime: parseDatetime("2016:04:25:14:36:26"), sound: Math.random()},
  {datetime: parseDatetime("2016:04:25:14:36:27"), sound: Math.random()},
  {datetime: parseDatetime("2016:04:25:14:36:28"), sound: Math.random()},
  {datetime: parseDatetime("2016:04:25:14:36:29"), sound: Math.random()},
  {datetime: parseDatetime("2016:04:25:14:36:30"), sound: Math.random()}
];

console.log(dataset);
// var dataset;
// d3.csv("assets/data/data.csv", function(data) {
//   dataset = data.map(function(d) {return {datetime: parseDatetime(d.datetime), sound: +d["sound"]}});
// });
