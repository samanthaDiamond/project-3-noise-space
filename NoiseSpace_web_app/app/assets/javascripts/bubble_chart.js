var hourlyData = [
	{day: 'Mon', hour: '12am', noise: 0.2568427926382575},
	{day: 'Mon', hour: '1am', noise: 0.4287249504671484},
	{day: 'Mon', hour: '2am', noise: 0.755966989727981},
	{day: 'Mon', hour: '3am', noise: 0.9150839529488073},
	{day: 'Mon', hour: '4am', noise: 0.6781521091647772},
	{day: 'Mon', hour: '5am', noise: 0.6899219765093914},
	{day: 'Mon', hour: '6am', noise: 0.5266349020863701},
	{day: 'Mon', hour: '7am', noise: 0.7394221199388605},
	{day: 'Mon', hour: '8am', noise: 0.2938191552119199},
	{day: 'Mon', hour: '9am', noise: 0.47945563301056393},
	{day: 'Mon', hour: '10am', noise: 0.23026057273838996},
	{day: 'Mon', hour: '11am', noise: 0.7237144283472569},
	{day: 'Mon', hour: '12pm', noise: 0.9941624386550924},
	{day: 'Mon', hour: '1pm', noise: 0.6163018550358282},
	{day: 'Mon', hour: '2pm', noise: 0.690066756281876},
	{day: 'Mon', hour: '3pm', noise: 0.6091295691661192},
	{day: 'Mon', hour: '4pm', noise: 0.2620243282250815},
	{day: 'Mon', hour: '5pm', noise: 0.5157308534121983},
	{day: 'Mon', hour: '6pm', noise: 0.29556781856694014},
	{day: 'Mon', hour: '7pm', noise: 0.9884278095776815},
	{day: 'Mon', hour: '8pm', noise: 0.9649840458358572},
	{day: 'Mon', hour: '9pm', noise: 0.5847539777428156},
	{day: 'Mon', hour: '10pm', noise: 0.8580561293161976},
	{day: 'Mon', hour: '11pm', noise: 0.5392850422438156},
	{day: 'Tues', hour: '12am', noise: 0.008215690864704417},
	{day: 'Tues', hour: '1am', noise: 0.7041581787943456},
	{day: 'Tues', hour: '2am', noise: 0.9134008140036979},
	{day: 'Tues', hour: '3am', noise: 0.6634764719141655},
	{day: 'Tues', hour: '4am', noise: 0.9641990830631915},
	{day: 'Tues', hour: '5am', noise: 0.02734305740687404},
	{day: 'Tues', hour: '6am', noise: 0.6286257107284682},
	{day: 'Tues', hour: '7am', noise: 0.02577030892494203},
	{day: 'Tues', hour: '8am', noise: 0.8226093788495299},
	{day: 'Tues', hour: '9am', noise: 0.25780130900270193},
	{day: 'Tues', hour: '10am', noise: 0.3787456637497576},
	{day: 'Tues', hour: '11am', noise: 0.009655932271200318},
	{day: 'Tues', hour: '12pm', noise: 0.5305850966006556},
	{day: 'Tues', hour: '1pm', noise: 0.643160841994761},
	{day: 'Tues', hour: '2pm', noise: 0.45229479297014596},
	{day: 'Tues', hour: '3pm', noise: 0.41948093463495995},
	{day: 'Tues', hour: '4pm', noise: 0.34009562110143976},
	{day: 'Tues', hour: '5pm', noise: 0.0694150961910438},
	{day: 'Tues', hour: '6pm', noise: 0.6488264056761409},
	{day: 'Tues', hour: '7pm', noise: 0.76339206465124},
	{day: 'Tues', hour: '8pm', noise: 0.17149017912655695},
	{day: 'Tues', hour: '9pm', noise: 0.8706496631138134},
	{day: 'Tues', hour: '10pm', noise: 0.32969123340316975},
	{day: 'Tues', hour: '11pm', noise: 0.035287957052202557},
	{day: 'Wed', hour: '12am', noise: 0.10539993774575995},
	{day: 'Wed', hour: '1am', noise: 0.9189640974806589},
	{day: 'Wed', hour: '2am', noise: 0.40762454645192403},
	{day: 'Wed', hour: '3am', noise: 0.7056583331341088},
	{day: 'Wed', hour: '4am', noise: 0.33048373008438203},
	{day: 'Wed', hour: '5am', noise: 0.36165230487726063},
	{day: 'Wed', hour: '6am', noise: 0.41494129489576426},
	{day: 'Wed', hour: '7am', noise: 0.11285999927935575},
	{day: 'Wed', hour: '8am', noise: 0.3304482512815351},
	{day: 'Wed', hour: '9am', noise: 0.32842296211986277},
	{day: 'Wed', hour: '10am', noise: 0.42415600436153866},
	{day: 'Wed', hour: '11am', noise: 0.6262005243208444},
	{day: 'Wed', hour: '12pm', noise: 0.2307316082976978},
	{day: 'Wed', hour: '1pm', noise: 0.4082364337256239},
	{day: 'Wed', hour: '2pm', noise: 0.702219137130887},
	{day: 'Wed', hour: '3pm', noise: 0.7972865845216242},
	{day: 'Wed', hour: '4pm', noise: 0.6942307451151072},
	{day: 'Wed', hour: '5pm', noise: 0.042363145998838725},
	{day: 'Wed', hour: '6pm', noise: 0.3561671784897703},
	{day: 'Wed', hour: '7pm', noise: 0.15532014485968704},
	{day: 'Wed', hour: '8pm', noise: 0.8515878325237808},
	{day: 'Wed', hour: '9pm', noise: 0.6525659636014558},
	{day: 'Wed', hour: '10pm', noise: 0.3945336592756281},
	{day: 'Wed', hour: '11pm', noise: 0.9975061291981393},
	{day: 'Thur', hour: '12am', noise: 0.22896980884733198},
	{day: 'Thur', hour: '1am', noise: 0.8725663322357258},
	{day: 'Thur', hour: '2am', noise: 0.33229930232001326},
	{day: 'Thur', hour: '3am', noise: 0.8633864327827563},
	{day: 'Thur', hour: '4am', noise: 0.3148442631320485},
	{day: 'Thur', hour: '5am', noise: 0.4725903278972736},
	{day: 'Thur', hour: '6am', noise: 0.6377747356803066},
	{day: 'Thur', hour: '7am', noise: 0.9969325696386605},
	{day: 'Thur', hour: '8am', noise: 0.4370503187857452},
	{day: 'Thur', hour: '9am', noise: 0.723119143335748},
	{day: 'Thur', hour: '10am', noise: 0.11301628237382855},
	{day: 'Thur', hour: '11am', noise: 0.4901974979198147},
	{day: 'Thur', hour: '12pm', noise: 0.2591257941212186},
	{day: 'Thur', hour: '1pm', noise: 0.055802115167082444},
	{day: 'Thur', hour: '2pm', noise: 0.7133616590549985},
	{day: 'Thur', hour: '3pm', noise: 0.5237464754042552},
	{day: 'Thur', hour: '4pm', noise: 0.21896693133688283},
	{day: 'Thur', hour: '5pm', noise: 0.7678161569651044},
	{day: 'Thur', hour: '6pm', noise: 0.7412753607254339},
	{day: 'Thur', hour: '7pm', noise: 0.35977105377284435},
	{day: 'Thur', hour: '8pm', noise: 0.1054272909946905},
	{day: 'Thur', hour: '9pm', noise: 0.5456585577033976},
	{day: 'Thur', hour: '10pm', noise: 0.1814348603047914},
	{day: 'Thur', hour: '11pm', noise: 0.2276417245987722},
	{day: 'Fri', hour: '12am', noise: 0.5102252264302486},
	{day: 'Fri', hour: '1am', noise: 0.602506840831563},
	{day: 'Fri', hour: '2am', noise: 0.8742390960777306},
	{day: 'Fri', hour: '3am', noise: 0.6803339739529152},
	{day: 'Fri', hour: '4am', noise: 0.5098382874536317},
	{day: 'Fri', hour: '5am', noise: 0.8426465727682666},
	{day: 'Fri', hour: '6am', noise: 0.9698377361871638},
	{day: 'Fri', hour: '7am', noise: 0.3861259314799901},
	{day: 'Fri', hour: '8am', noise: 0.6035445134567412},
	{day: 'Fri', hour: '9am', noise: 0.7825190289073899},
	{day: 'Fri', hour: '10am', noise: 0.17267119505379325},
	{day: 'Fri', hour: '11am', noise: 0.08850866088724008},
	{day: 'Fri', hour: '12pm', noise: 0.3969435224453819},
	{day: 'Fri', hour: '1pm', noise: 0.34238138926909567},
	{day: 'Fri', hour: '2pm', noise: 0.2864969978963182},
	{day: 'Fri', hour: '3pm', noise: 0.833064960366771},
	{day: 'Fri', hour: '4pm', noise: 0.5650733219390911},
	{day: 'Fri', hour: '5pm', noise: 0.6545898782840746},
	{day: 'Fri', hour: '6pm', noise: 0.838333530145885},
	{day: 'Fri', hour: '7pm', noise: 0.36337036867827255},
	{day: 'Fri', hour: '8pm', noise: 0.9128013854937795},
	{day: 'Fri', hour: '9pm', noise: 0.3374335133215437},
	{day: 'Fri', hour: '10pm', noise: 0.048974261131968344},
	{day: 'Fri', hour: '11pm', noise: 0.3429518072581901},
	{day: 'Sat', hour: '12am', noise: 0.5277932456764894},
	{day: 'Sat', hour: '1am', noise: 0.6590886608090347},
	{day: 'Sat', hour: '2am', noise: 0.697256531726657},
	{day: 'Sat', hour: '3am', noise: 0.2871308169392568},
	{day: 'Sat', hour: '4am', noise: 0.08916118951358865},
	{day: 'Sat', hour: '5am', noise: 0.05225672255169467},
	{day: 'Sat', hour: '6am', noise: 0.8068955144560453},
	{day: 'Sat', hour: '7am', noise: 0.7162640038943094},
	{day: 'Sat', hour: '8am', noise: 0.7861826666456952},
	{day: 'Sat', hour: '9am', noise: 0.8081379154815084},
	{day: 'Sat', hour: '10am', noise: 0.4336083191000254},
	{day: 'Sat', hour: '11am', noise: 0.4334882303026154},
	{day: 'Sat', hour: '12pm', noise: 0.6393246096362395},
	{day: 'Sat', hour: '1pm', noise: 0.7227879485373495},
	{day: 'Sat', hour: '2pm', noise: 0.1707182570553719},
	{day: 'Sat', hour: '3pm', noise: 0.9521469274443968},
	{day: 'Sat', hour: '4pm', noise: 0.6200523322438448},
	{day: 'Sat', hour: '5pm', noise: 0.9947307191366582},
	{day: 'Sat', hour: '6pm', noise: 0.5632760282344688},
	{day: 'Sat', hour: '7pm', noise: 0.8905738988178242},
	{day: 'Sat', hour: '8pm', noise: 0.8532503614651472},
	{day: 'Sat', hour: '9pm', noise: 0.3210658946117224},
	{day: 'Sat', hour: '10pm', noise: 0.9957728941926424},
	{day: 'Sat', hour: '11pm', noise: 0.5518461532853878},
	{day: 'Sun', hour: '12am', noise: 0.3586653383292032},
	{day: 'Sun', hour: '1am', noise: 0.25030424363802517},
	{day: 'Sun', hour: '2am', noise: 0.05962617328880315},
	{day: 'Sun', hour: '3am', noise: 0.6881263368671835},
	{day: 'Sun', hour: '4am', noise: 0.5756135369214137},
	{day: 'Sun', hour: '5am', noise: 0.06560271999997302},
	{day: 'Sun', hour: '6am', noise: 0.7172904148071655},
	{day: 'Sun', hour: '7am', noise: 0.4107680773799507},
	{day: 'Sun', hour: '8am', noise: 0.5438928349802468},
	{day: 'Sun', hour: '9am', noise: 0.9620535856911028},
	{day: 'Sun', hour: '10am', noise: 0.8461735724060268},
	{day: 'Sun', hour: '11am', noise: 0.20076392712682312},
	{day: 'Sun', hour: '12pm', noise: 0.41646070486976583},
	{day: 'Sun', hour: '1pm', noise: 0.0068504212680919885},
	{day: 'Sun', hour: '2pm', noise: 0.700008655179169},
	{day: 'Sun', hour: '3pm', noise: 0.3843706238973592},
	{day: 'Sun', hour: '4pm', noise: 0.9205517324718372},
	{day: 'Sun', hour: '5pm', noise: 0.7831065791009334},
	{day: 'Sun', hour: '6pm', noise: 0.6740790855890811},
	{day: 'Sun', hour: '7pm', noise: 0.3110114500909311},
	{day: 'Sun', hour: '8pm', noise: 0.6965426437237305},
	{day: 'Sun', hour: '9pm', noise: 0.710416660250932},
	{day: 'Sun', hour: '10pm', noise: 0.419402628916541},
	{day: 'Sun', hour: '11pm', noise: 0.1425433975289544}
]


function y_pos(day) {
  var pos;
  switch (day){
    case 'Mon':
      pos = 1;
      break;
    case 'Tue':
      pos = 2;
      break;
    case 'Wed':
      pos = 3;
      break;
    case 'Thur':
      pos = 4;
      break;
    case 'Fri':
      pos = 5;
      break;
    case 'Sat':
      pos = 6;
      break;
    case 'Sun':
      pos = 7;
      break;
    default:
      console.log("Invalid input. I love Alex");
  }
  return pos;
}

function drawHourlyData(hourlyData) {
  var margin = 80;
  var width = 1000;
  var height = 500;
  var xTicks = ['12am', '1am', '2am', '3am', '4am', '5am', '6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm', '9pm', '10pm', '11pm'];

  d3.select(".bubble_chart")
      .append("svg")
      .attr("width", width)
      .attr("height", height)
    .selectAll("circle")
    .data(hourlyData)
    .enter()
    .append("circle");


  $(".bubble_chart svg").css({top: 50, left: 200, position:'absolute'});

    d3.select(".bubble_chart svg")
    .append("text")
      .attr("class","bubble-chart-title")
    .text("Average Hourly Noise Measurements Per Day")
      .attr("x", width / 3 - margin)
      .attr("y", margin/ 1.5)
      .style("fill", "white")
      .style("font-size", "24px");

  var x_extent = [0, 24];

  var x_scale = d3.scale.ordinal()
    .range([margin,width-margin])
    .domain(xTicks);

    // var x_scale = d3.scale.linear()
    //   .range([margin,width-margin])
    //   .domain(x_extent);


  // var timeFormat2 = d3.time.format('%Y-%m-%dT%H:%M:%S%Z');
  // var x_scale = d3.time.scale.utc()
  //   .domain([timeFormat2.parse('2014-03-08T12:00:00+0000'), timeFormat2.parse('2014-03-10T00:00:00+0000')])
  //   .range([margin,width-margin]);



  var y_extent = [0,7];

  var y_scale = d3.scale.linear()
    .range([height-margin, margin])
    .domain(y_extent);

  d3.selectAll(".bubble_chart circle")
    .attr("cx", function(d){return x_scale(d.time+1);})
    .attr("cy", function(d){return y_scale(y_pos(d.day));})
    .attr("r", function(d){return d.noise * 10;})
    .style("fill", function(d) {
       var returnColor;
       if (y_pos(d.day) === 0) { returnColor = "green";
     } else if (y_pos(d.day) === 1) {
         returnColor = "purple";
       } else if (y_pos(d.day) === 2) {
         returnColor = "red";
       } else {
         returnColor = "hotpink";
       }
       return returnColor;
    });



  var x_axis = d3.svg.axis().scale(x_scale).ticks(24).tickValues(xTicks);

  d3.select(".bubble_chart svg")
    .append("g")
      .attr("class", "x axis")
      .attr("transform", "translate(0," + (height-margin) + ")")
    .call(x_axis);

  var y_axis = d3.svg.axis().scale(y_scale).orient("left");

  d3.select(".bubble_chart svg")
    .append("g")
      .attr("class", "y axis")
      .attr("transform", "translate(" + margin + ", 0 )")
    .call(y_axis);

  d3.select(".bubble_chart .x.axis")
    .append("text")
      .attr("class", "axis_label")
    .text("Time")
      .attr("x", (width / 2) - margin)
      .attr("y", margin / 1.5)
      .style("fill", "white")
      .style("font-size", "16px");

  // d3.select(".bubble_chart .y.axis")
  //   .append("text")
  //     .attr("class", "axis_label")
  //   .text("Day")
  //     .attr("transform", "rotate (-90, -43, 0) translate(-280)")
  //     .style("fill", "white")
  //     .style("font-size", "16px");
}
