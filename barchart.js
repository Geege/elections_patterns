$(document).ready(function () {
 
  d3.select("body").append("p").text("I work");
  
  var data = [
   {
    "year": 2015,
    "color": "#7F7758", 
    "values": [
      {
        "province": "BC",
        "seats": 42
      },
      {
        "province": "AB",
        "seats": 34
      },
      {
        "province": "SK",
        "seats": 14
      },
      {
        "province": "MB",
        "seats": 14
      },
      {
        "province": "ON",
        "seats": 121
      },
      {
        "province": "QC",
        "seats": 78
      },
      {
        "province": "NB",
        "seats": 10
      },
      {
        "province":"NS",
        "seats": 11
      },
      {
        "province": "PE",
        "seats": 4
      },
      {
        "province": "NL",
        "seats": 7
      },
      {
        "province": "YT",
        "seats": 1
      },
      {
        "province": "NT",
        "seats": 1
      },
      {
        "province": "NU",
        "seats": 1
      }
    ]
  },
 {      
    "year": 2014,
    "color": "#BFBFBF",
    "values": [
      {
        "province": "BC",
        "seats": 36
      },
      {
        "province": "AB",
        "seats": 28
      },
      {
        "province": "SK",
        "seats": 14
      },
      {
        "province": "MB",
        "seats": 14
      },
      {
        "province": "ON",
        "seats": 106
      },
      {
        "province": "QC",
        "seats": 75
      },
      {
        "province": "NB",
        "seats": 10
      },
      {
        "province":"NS",
        "seats": 11
      },
      {
        "province": "PE",
        "seats": 4
      },
      {
        "province": "NL",
        "seats": 7
      },
      {
        "province": "YT",
        "seats": 1
      },
      {
        "province": "NT",
        "seats": 1
      },
      {
        "province": "NU",
        "seats": 1
      }
    ]
  }
]


var chart = nv.models.multiBarHorizontalChart();
  chart.width(600)
  //chart.title("Electoral seats").titleOffset(-10);
  chart.height(900);
  
  
  nv.addGraph(function() {
  var chart = nv.models.multiBarHorizontalChart()
      .x(function(d) { return d.province })
      .y(function(d) { return d.seats })
      .margin({top: 30, right: 20, bottom: 50, left: 30})
      .showValues(true)
      .tooltips(false)
      .showControls(false)
      .groupSpacing(.5)
      .yDomain([1,121])
      .xRange([0, 600])
      .yRange([0, 900]);
    
    chart.yAxis
      .tickFormat(d3.format(', 5f'));
    
  
    
    d3.select("#chart svg")
        .datum(data)
      .transition().duration(250)
        .call(chart);
    
   nv.utils.windowResize(chart.update);
    // console.log("Work here");
    return chart;
 });
  
});



/**

var data = [43, 23, 16, 15, 8];

var width = 500,
    barHeight = 25;

var x = d3.scale.linear()
    .domain([0, d3.max(data)])
    .range([0, width]);

//creating svg

var chart = d3.select(".chart")
    .attr("width", width)
    .attr("height", barHeight * data.length);


var bar = chart.selectAll("g")
    .data(data)
  .enter().append("g")
    .attr("transform", function(d, i) { return "translate(0," + i * barHeight + ")"; });


bar.append("rect")
    .attr("width", "0")
    .attr("height", barHeight - 1);


//creating transition
d3.selectAll("rect")
    .transition()
    .duration(1000)
    .attr("width", x);
    
    
//appending labels
bar.append("text")
    .attr("x", function(d) { return x(d) - 3; })
    .attr("y", barHeight / 2)
    .attr("dy", ".35em")
    .text(function(d) { return d; }); 
    
**/