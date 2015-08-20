$(document).ready(function () {

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
  




  var margin = {top: 20, right: 20, bottom: 30, left: 40},
    width = 960 - margin.left - margin.right,
    height = 500 - margin.top - margin.bottom;
    barHeight = 25;

  
  var x = d3.scale.linear()
    .range([0, width]);
  
  x.domain([0, d3.max(data, function(d) {return d.year})]);
  
  

//creating svg

var chart = d3.select(".chart")
    .attr("width", width)
    .attr("height", barHeight * data.length);


var bar = chart.selectAll("g")
    .data(data)
  .enter().append("g")
    .attr("transform", function(d, i) { return "translate(0," + i * barHeight + ")"; });

   
   
bar.append("rect")
    .attr("width", function(d){ return x(d.values.seats);})
    .attr("height", barHeight - 1);

console.log("Working here");    

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

  
 
});



