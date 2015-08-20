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