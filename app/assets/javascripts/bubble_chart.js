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

  var minRadius = 6; // px of smallest circle
  var maxRadius = 16; // px of biggest circle
  // get min and max noise measuremnts
  var noise_extent = d3.extent(hourlyData, function(d){
    return d.noise;
  });

  var circle_radius = function (noise) {
    var m = (maxRadius - minRadius)/(noise_extent[1] - noise_extent[0]);
    var b = minRadius - m * minRadius;
    return m*noise+b;
  };

  var y = d3.scale.linear()
      .domain([0, 7])
      .range([h - top_pad, top_pad]);

  // var svg = d3.select(".bubble_chart")
  //     .append("svg:svg")
  //       .attr("width", w + left_pad)
  //       .attr("height", h + top_pad);

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
          return d.noise * 50; // 20, 50
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
    // .attr("cx", function(d){ return d.time * 40 + 30})
    // .attr("cy", function(d){return y_scale(y_pos(d.day));})
    // .attr("r", function(d){return d.noise * 10;})
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


//
//
//
// function drawHourlyData(hourlyData) {
//   var margin = 80;
//   var width = 1000;
//   var height = 500;
//   // var xTicks = ['12am', '1am', '2am', '3am', '4am', '5am', '6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm', '9pm', '10pm', '11pm'];
//
//   var arrOfTimeValues = [];
//   var timeValues = function(hourlyData) {
//     for (i = 0; i < hourlyData.length; i++) {
//       var time = hourlyData[i].time;
//       arrOfTimeValues.push(time);
//     }
//     return arrOfTimeValues;
//   };
//
//   var minXBubbleChart = Math.min.apply( Math, timeValues(hourlyData));
//   var maxXBubbleChart = Math.max.apply( Math, timeValues(hourlyData));
//
//   d3.select(".bubble_chart")
//       .append("svg")
//       .attr("width", width)
//       .attr("height", height)
//     .selectAll("circle")
//     .data(hourlyData)
//     .enter()
//     .append("circle");
//
//
//   $(".bubble_chart svg").css({top: 50, left: 200, position:'absolute'});
//
//     d3.select(".bubble_chart svg")
//     .append("text")
//       .attr("class","bubble-chart-title")
//     .text("Average Hourly Noise Measurements Per Day")
//       .attr("x", width / 3 - margin)
//       .attr("y", margin/ 1.5)
//       .style("fill", "white")
//       .style("font-size", "24px");
//
//   // var x_extent = [minXBubbleChart, maxXBubbleChart];
//   var x_extent = [minX, maxX];
//
//   // var x_scale = d3.time.scale()
//   //   .range([margin,width-margin])
//   //   .domain([d3.time.format("%Y-%m-%d %H:%M:%S" ).parse("2016-04-26 06:50:37"), d3.time.format("%Y-%m-%d %H:%M:%S" ).parse("2016-05-07 20:07:06")]);
//
//     // debugger;
//
//   // var x = d3.scale.ordinal()
//   //   .range([margin,width-margin])
//   //   .domain([0, 1])
//   //   .rangePoints([0, width], 1);
//
//   // var x_scale = d3.scale.linear()
//   //   .range([margin,width-margin])
//   //   .domain(x_extent);
//
//   var y_extent = [0,7];
//
//   var y_scale = d3.scale.linear()
//     .range([height-margin, margin])
//     .domain(y_extent);
//
//   var w = 960,
// 	    h = 600,
// 	    top_pad = 20,
// 	    left_pad = 20;
//
// 	var x = d3.scale.linear()
// 	    .domain([-1, 23])
// 	    .range([left_pad, w - left_pad]);
//
//   var x_scale = d3.svg.axis().scale(x).orient("bottom")
//     .ticks(24)
//     .tickFormat(function(d) {
//             var f = ["12AM", "1AM", "2AM", "3AM", "4AM", "5AM", "6AM", "7AM", "8AM", "9AM", "10AM", "11AM", "12PM", "1PM", "2PM", "3PM", "4PM", "5PM", "6PM", "7PM", "8PM", "9PM", "10PM", "11PM"];
//     return (f[d]);
//   });
//
//   var y = d3.scale.linear()
//         .domain([0, 500])
//         .range([h - top_pad, top_pad]);
//
//   var y_scale = d3.svg.axis().scale(y).orient("left");
//
//   d3.selectAll(".bubble_chart circle")
//     .attr("cx", function(d){ return d.time * 40 + 30})
//     .attr("cy", function(d){return y_scale(y_pos(d.day));})
//     .attr("r", function(d){return d.noise * 10;})
//     .style("fill", function(d) {
//        var returnColor;
//        if (y_pos(d.day) === 0) { returnColor = "green";
//      } else if (y_pos(d.day) === 1) {
//          returnColor = "purple";
//        } else if (y_pos(d.day) === 2) {
//          returnColor = "red";
//        } else {
//          returnColor = "hotpink";
//        }
//        return returnColor;
//     });
//
//
// 		// var x_axis = d3.svg.axis()
//     //   .scale(x_scale)
//     //   // .ticks(d3.time.hour, 1)
//     //   // .tickValues([new Date(), new Date()])
//     //   // .tickPadding(1)
//     //   .tickFormat(d3.time.format("%I %p"));
//     //
//     //   var xAxis = d3.svg.axis().scale(x_scale).orient("bottom")
//     //               .tickFormat(function(d) {
//     //                   var f = ["12AM", "1AM", "2AM", "3AM", "4AM", "5AM", "6AM", "7AM", "8AM", "9AM", "10AM", "11AM", "12PM", "1PM", "2PM", "3PM", "4PM", "5PM", "6PM", "7PM", "8PM", "9PM", "10PM", "11PM"];
//     //               return (f[d]);
//     //           })
//     //           .tickValues([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23]);
//     //
//     // var x = d3.scale.ordinal()
//     //     .domain([0, 1])
//     //     .rangePoints([0, width], 1);
//
//
//   // var x_axis = d3.svg.axis()
// 	// 		.scale(x_scale)
// 	// 		.ticks(24)
// 	// 		.tickValues(xTicks);
//
//   d3.select(".bubble_chart svg")
//     .append("g")
//       .attr("class", "x axis")
//       .attr("transform", "translate(0," + (height-margin) + ")")
//     .call(x_scale);
//
//   var y_axis = d3.svg.axis().scale(y_scale).orient("left");
//
//   d3.select(".bubble_chart svg")
//     .append("g")
//       .attr("class", "y axis")
//       .attr("transform", "translate(" + margin + ", 0 )")
//     .call(y_axis);
//
//   d3.select(".bubble_chart .x.axis")
//     .append("text")
//       .attr("class", "axis_label")
//     .text("Time")
//       .attr("x", (width / 2) - margin)
//       .attr("y", margin / 1.5)
//       .style("fill", "white")
//       .style("font-size", "16px");
//
//   // d3.select(".bubble_chart .y.axis")
//   //   .append("text")
//   //     .attr("class", "axis_label")
//   //   .text("Day")
//   //     .attr("transform", "rotate (-90, -43, 0) translate(-280)")
//   //     .style("fill", "white")
//   //     .style("font-size", "16px");
// }




// var hourlyData;
//
// function y_pos(day) {
//   var pos;
//   switch (day){
//   case 'Monday':
//     pos = 1;
//     break;
//   case 'Tuesday':
//     pos = 2;
//     break;
//   case 'Wednesday':
//     pos = 3;
//     break;
//   case 'Thursday':
//     pos = 4;
//     break;
//   case 'Friday':
//     pos = 5;
//     break;
//   case 'Saturday':
//     pos = 6;
//     break;
//   case 'Sunday':
//     pos = 7;
//     break;
//   default:
//     console.log("Invalid input.");
//   }
//   return pos;
// }
//
// var drawHourlyData = function (hourlyData) {
//
//   var w = 1300,
//       h = 400,
//       top_pad = 100,
//       left_pad = 100,
//       margin = 50;
//
//   var x = d3.scale.linear()
//       .domain([-1, 23])
//       .range([left_pad, w - left_pad * 4]);
//
//   var y = d3.scale.linear()
//       .domain([0, 7])
//       .range([h - top_pad, top_pad]);
//
//   // var svg = d3.select(".bubble_chart")
//   //     .append("svg:svg")
//   //       .attr("width", w + left_pad)
//   //       .attr("height", h + top_pad);
//
//   var svg = d3.select(".bubble_chart")
//     .append("div")
//     .classed("svg-container", true)
//     .append("svg:svg")
//       .attr("preserveAspectRatio", "xMinYMin meet")
//       .attr("viewBox","0 0 " + w + " " + h)
//       .classed("svg-content-responsive", true);
//
//   svg.selectAll(".bubble_chart circle")
//       .data(hourlyData)
//       .enter().append("circle")
//         .attr("class", "dot")
//         .attr("cx", function (d) {
//           return x(d.time);
//         })
//         .attr("cy", function (d) {
//           return y(y_pos(d.day) + "");
//         })
//         .attr("r", function (d) {
//           return d.noise * 50; // 20, 50
//         });
//
//   var xAxis = d3.svg.axis().scale(x).orient("bottom")
//       .tickFormat(function(d) {
//         var f = ["12AM", "1AM", "2AM", "3AM", "4AM", "5AM", "6AM", "7AM", "8AM", "9AM", "10AM", "11AM", "12PM", "1PM", "2PM", "3PM", "4PM", "5PM", "6PM", "7PM", "8PM", "9PM", "10PM", "11PM"];
//           return (f[d]);
//   });
//
//   var yAxis = d3.svg.axis().scale(y).orient("left")
//       .tickFormat(function(d) {
//         var f = ["", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
//           return (f[d]);
//   });
//
//   svg.append("g")
//       .attr("class", "axis")
//       .attr("transform", "translate(0, " + (h - top_pad) + ")")
//       .call(xAxis);
//
//   svg.append("g")
//       .attr("class", "axis")
//       .attr("transform", "translate(" + (left_pad) + ", 0)")
//       .call(yAxis);
//
//   $(".bubble_chart svg").css({top: 0, left:0, bottom: 0, position:'absolute'});
//
//   d3.select(".bubble_chart svg")
//     .append("text")
//       .attr("class","bubble-chart-title")
//     .text("AVERAGE HOURLY NOISE MEASUREMENTS PER DAY")
//       .attr("x", w / 6)
//       .attr("y", margin / 1)
//       .style("fill", "white")
//       .style("font-size", "24px");
//
//   d3.selectAll(".bubble_chart circle")
//     // .attr("cx", function(d){ return d.time * 40 + 30})
//     // .attr("cy", function(d){return y_scale(y_pos(d.day));})
//     // .attr("r", function(d){return d.noise * 10;})
//     .style("fill", function(d) {
//        var returnColor;
//        if (y_pos(d.day) === 1) {  // #FF079B
//          returnColor = "#FF079B"; // #FF26C6
//        } else if (y_pos(d.day) === 2) {
//          returnColor = "#FF26C6"; // #DB1DE8
//        } else if (y_pos(d.day) === 3) {
//          returnColor = "#DB1DE8"; // #C72CFF
//        } else if (y_pos(d.day) === 4) {
//          returnColor = "#C72CFF"; // #881DE8
//        } else if (y_pos(d.day) === 5) {
//          returnColor = "#C617E8"; // #C617E8
//        } else if (y_pos(d.day) === 6) {
//          returnColor = "#881DE8";  // #DA14FF
//        } else {
//          returnColor = "#6615E8"; // #05E9FF
//        }
//        return returnColor;
//     });
//
// };
//
//
// $.ajax({
//   type: 'GET',
//   url: 'measurements/avg_data.json',
//   dataType: 'json',
//   success: function(response) {
//     hourlyData = response;
//   }
// });
//
//
// //
// //
// //
// // function drawHourlyData(hourlyData) {
// //   var margin = 80;
// //   var width = 1000;
// //   var height = 500;
// //   // var xTicks = ['12am', '1am', '2am', '3am', '4am', '5am', '6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm', '9pm', '10pm', '11pm'];
// //
// //   var arrOfTimeValues = [];
// //   var timeValues = function(hourlyData) {
// //     for (i = 0; i < hourlyData.length; i++) {
// //       var time = hourlyData[i].time;
// //       arrOfTimeValues.push(time);
// //     }
// //     return arrOfTimeValues;
// //   };
// //
// //   var minXBubbleChart = Math.min.apply( Math, timeValues(hourlyData));
// //   var maxXBubbleChart = Math.max.apply( Math, timeValues(hourlyData));
// //
// //   d3.select(".bubble_chart")
// //       .append("svg")
// //       .attr("width", width)
// //       .attr("height", height)
// //     .selectAll("circle")
// //     .data(hourlyData)
// //     .enter()
// //     .append("circle");
// //
// //
// //   $(".bubble_chart svg").css({top: 50, left: 200, position:'absolute'});
// //
// //     d3.select(".bubble_chart svg")
// //     .append("text")
// //       .attr("class","bubble-chart-title")
// //     .text("Average Hourly Noise Measurements Per Day")
// //       .attr("x", width / 3 - margin)
// //       .attr("y", margin/ 1.5)
// //       .style("fill", "white")
// //       .style("font-size", "24px");
// //
// //   // var x_extent = [minXBubbleChart, maxXBubbleChart];
// //   var x_extent = [minX, maxX];
// //
// //   // var x_scale = d3.time.scale()
// //   //   .range([margin,width-margin])
// //   //   .domain([d3.time.format("%Y-%m-%d %H:%M:%S" ).parse("2016-04-26 06:50:37"), d3.time.format("%Y-%m-%d %H:%M:%S" ).parse("2016-05-07 20:07:06")]);
// //
// //     // debugger;
// //
// //   // var x = d3.scale.ordinal()
// //   //   .range([margin,width-margin])
// //   //   .domain([0, 1])
// //   //   .rangePoints([0, width], 1);
// //
// //   // var x_scale = d3.scale.linear()
// //   //   .range([margin,width-margin])
// //   //   .domain(x_extent);
// //
// //   var y_extent = [0,7];
// //
// //   var y_scale = d3.scale.linear()
// //     .range([height-margin, margin])
// //     .domain(y_extent);
// //
// //   var w = 960,
// // 	    h = 600,
// // 	    top_pad = 20,
// // 	    left_pad = 20;
// //
// // 	var x = d3.scale.linear()
// // 	    .domain([-1, 23])
// // 	    .range([left_pad, w - left_pad]);
// //
// //   var x_scale = d3.svg.axis().scale(x).orient("bottom")
// //     .ticks(24)
// //     .tickFormat(function(d) {
// //             var f = ["12AM", "1AM", "2AM", "3AM", "4AM", "5AM", "6AM", "7AM", "8AM", "9AM", "10AM", "11AM", "12PM", "1PM", "2PM", "3PM", "4PM", "5PM", "6PM", "7PM", "8PM", "9PM", "10PM", "11PM"];
// //     return (f[d]);
// //   });
// //
// //   var y = d3.scale.linear()
// //         .domain([0, 500])
// //         .range([h - top_pad, top_pad]);
// //
// //   var y_scale = d3.svg.axis().scale(y).orient("left");
// //
// //   d3.selectAll(".bubble_chart circle")
// //     .attr("cx", function(d){ return d.time * 40 + 30})
// //     .attr("cy", function(d){return y_scale(y_pos(d.day));})
// //     .attr("r", function(d){return d.noise * 10;})
// //     .style("fill", function(d) {
// //        var returnColor;
// //        if (y_pos(d.day) === 0) { returnColor = "green";
// //      } else if (y_pos(d.day) === 1) {
// //          returnColor = "purple";
// //        } else if (y_pos(d.day) === 2) {
// //          returnColor = "red";
// //        } else {
// //          returnColor = "hotpink";
// //        }
// //        return returnColor;
// //     });
// //
// //
// // 		// var x_axis = d3.svg.axis()
// //     //   .scale(x_scale)
// //     //   // .ticks(d3.time.hour, 1)
// //     //   // .tickValues([new Date(), new Date()])
// //     //   // .tickPadding(1)
// //     //   .tickFormat(d3.time.format("%I %p"));
// //     //
// //     //   var xAxis = d3.svg.axis().scale(x_scale).orient("bottom")
// //     //               .tickFormat(function(d) {
// //     //                   var f = ["12AM", "1AM", "2AM", "3AM", "4AM", "5AM", "6AM", "7AM", "8AM", "9AM", "10AM", "11AM", "12PM", "1PM", "2PM", "3PM", "4PM", "5PM", "6PM", "7PM", "8PM", "9PM", "10PM", "11PM"];
// //     //               return (f[d]);
// //     //           })
// //     //           .tickValues([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23]);
// //     //
// //     // var x = d3.scale.ordinal()
// //     //     .domain([0, 1])
// //     //     .rangePoints([0, width], 1);
// //
// //
// //   // var x_axis = d3.svg.axis()
// // 	// 		.scale(x_scale)
// // 	// 		.ticks(24)
// // 	// 		.tickValues(xTicks);
// //
// //   d3.select(".bubble_chart svg")
// //     .append("g")
// //       .attr("class", "x axis")
// //       .attr("transform", "translate(0," + (height-margin) + ")")
// //     .call(x_scale);
// //
// //   var y_axis = d3.svg.axis().scale(y_scale).orient("left");
// //
// //   d3.select(".bubble_chart svg")
// //     .append("g")
// //       .attr("class", "y axis")
// //       .attr("transform", "translate(" + margin + ", 0 )")
// //     .call(y_axis);
// //
// //   d3.select(".bubble_chart .x.axis")
// //     .append("text")
// //       .attr("class", "axis_label")
// //     .text("Time")
// //       .attr("x", (width / 2) - margin)
// //       .attr("y", margin / 1.5)
// //       .style("fill", "white")
// //       .style("font-size", "16px");
// //
// //   // d3.select(".bubble_chart .y.axis")
// //   //   .append("text")
// //   //     .attr("class", "axis_label")
// //   //   .text("Day")
// //   //     .attr("transform", "rotate (-90, -43, 0) translate(-280)")
// //   //     .style("fill", "white")
// //   //     .style("font-size", "16px");
// // }
