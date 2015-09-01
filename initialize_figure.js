// global variable to hold data once we load it with d3.csv
var data_parsed;

// If a button is clicked more than once it won't do anything
var clickedOnce2006 = false;
var clickedOnce2007 = false;
var clickedOnce2008 = false;
var clickedOnce2009 = false;
var clickedOnce2010 = false;
var clickedOnce2011 = false;

var clickedOnceChart2 = false;
var clickedOnceChart3 = false;

var height = 600, width = 850,
    margin = 25, radius = 11;

// create the svg element that contains visualization
var svg = d3.select("#scatter-container").append("svg")
     .attr("id", "scatter")
     .attr("width", width + 2*margin)
     .attr("height", height);
     
// keep scale ranges constant
var minX = 0, minY = 0, maxX = 9000, maxY = 80;

// create two linear scales
var xlinear = d3.scale.linear()
    .domain([minX - 100, maxX])
    .range([0, width - 2*margin]);
var ylinear = d3.scale.linear()
    .domain([minY - 5, maxY + 10])
    .range([height - 2*margin, 0]);    

// a "g" element to hold axes
var axesG = svg.append("g").attr("class", "axes");

// create axis elements
var commasFormatter = d3.format(",.0f")
var xAxis = d3.svg.axis().scale(xlinear).orient("bottom")
            .tickValues([1000, 2000, 3000, 4000, 5000, 6000, 7000, 8000, 9000])
            .tickFormat(function(d) { return "$" + commasFormatter(d); });
var yAxis = d3.svg.axis().scale(ylinear).orient("left");

// helper function to create the "translate(x, y)" string
function translator(x, y) {
    return "translate(" + x + "," + y + ")";
}

// append axes elements to axesG container    
axesG.append("g")
        .attr("class", "y-axis all-axis")
        // location for the y-axis: margin, margin
        .attr("transform", translator(margin, margin))
        .call(yAxis)
      // add y-axis label
      .append("text")
        .attr("id", "y-axis")
        .attr("class", "axis-label")
        // rotate text so that it is vertical
        .attr("transform", "rotate(-90)")
        .attr("y", 6)
        .attr("dy", ".71em")
        // position text appropriately along the axis
        .style("text-anchor", "end")
        // finally, specify the actual label
        .text("Annual Combined Attendance of all Stadiums (Millions of Spectators)");
        
axesG.append("g")
        .attr("class", "x-axis all-axis")
        .attr("transform", translator(margin, height - margin))
        .call(xAxis)
      .append("text")
        .attr("id", "x-label")
        .attr("class", "axis-label")
        .attr("x", width - 2*margin)
        .attr("y", -6)
        .style("text-anchor", "end")  
        .text("Annual League Revenue from All Sources ($ Millions USD)");
        
// add grid-lines for the x-axis
d3.selectAll("g.x-axis g.tick")
        .append("line")
            .classed("grid-line", true)
            // they start at (0, 0) and go to (0, height - 2*margin)
            .attr("x1", 0)
            .attr("y1", 0)
            .attr("x2", 0)
            .attr("y2", - (height - 2*margin));


// add grid-lines for the y-axis
d3.selectAll("g.y-axis g.tick")
        .append("line")
            .classed("grid-line", true)
            // they start at (0, 0) and go to (0, height - 2*margin)
            .attr("x1", 0)
            .attr("y1", 0)
            .attr("x2", (width - 2*margin))
            .attr("y2", 0);


// container for the scatter points
var bodyG = svg.append("g")
               .attr("class", "scatter-g")
               .attr("transform", translator(margin, margin));
                             
// --------------------------------------
// Creating buttons and binding data to them

var buttonsData = [{"text": "2006", "display_year": "2006"},
                   {"text": "2007", "display_year": "2007"},
                   {"text": "2008", "display_year": "2008"},
                   {"text": "2009", "display_year": "2009"},
                   {"text": "2010", "display_year": "2010"},
                   {"text": "2011", "display_year": "2011"}];

// bind all the buttons to data
var buttons_selection = d3.selectAll(".buttons").data(buttonsData)


// --------------------------------------
// Creating graph buttons and binding data to them

var graphbuttonsData = [{"text": "graph1", "display_graph": "graph1"},
                        {"text": "graph2", "display_graph": "graph2"},
                        {"text": "graph3", "display_graph": "graph3"}];

// bind all the buttons to data

var graph_buttons_selection = d3.selectAll(".graphbuttons").data(graphbuttonsData)

var reset_button_selection = d3.select("#reset");
// make 2006 button look active (pressed)
// we are using a 1 sec (1000 ms) transition for a smooth effect
d3.select("#Y2006").transition().duration(1000).
    style("background", "steelBlue").style("color", "white");

// make Revenue and Attendance button look active (pressed)
d3.select("#graph1").transition().duration(1000).
    style("background", "steelBlue").style("color", "white");

// make graph buttons look inactive (not pressed)
d3.select("#graph2").transition().duration(1000)
  .style("background", "rgb(240, 232, 226)").style("color", "black")
  // note that it is partially transparent
  .style("opacity", 0.6);

d3.select("#graph3").transition().duration(1000)
  .style("background", "rgb(240, 232, 226)").style("color", "black")
  // note that it is partially transparent
  .style("opacity", 0.6);
    
// and the rest of the button look inactive (not pressed)
d3.select("#Y2007").transition().duration(1000)
  .style("background", "rgb(240, 232, 226)").style("color", "black")
  // note that it is partially transparent
  .style("opacity", 0.6);

d3.select("#Y2008").transition().duration(1000)
  .style("background", "rgb(240, 232, 226)").style("color", "black")
  .style("opacity", 0.6);

d3.select("#Y2009").transition().duration(1000)
  .style("background", "rgb(240, 232, 226)").style("color", "black")
  .style("opacity", 0.6);

d3.select("#Y2010").transition().duration(1000)
  .style("background", "rgb(240, 232, 226)").style("color", "black")
  .style("opacity", 0.6);

d3.select("#Y2011").transition().duration(1000)
  .style("background", "rgb(240, 232, 226)").style("color", "black")
  .style("opacity", 0.6);
      
d3.select("#reset").transition().duration(1000)
  .style("background", "rgb(240, 232, 226)").style("color", "black")
  .style("opacity", 0.6);

// declare a click handler for ALL of the buttons

buttons_selection.on("click", function(d) {
    // make all buttons look inactive
    d3.selectAll(".buttons").transition().duration(500)
      .style("background", "rgb(240, 232, 226)").style("color", "black")
      .style("opacity", 0.6);

    // make the button that is pressed ("this")look pressed
    d3.select(this).transition().duration(500)
      .style("background", "steelBlue").style("color", "white")
      .style("opacity", 1);

    if (d.display_year == "2006" && clickedOnce2006 == false){
      createScatter(null, data_parsed, d.display_year); 
    }
    else if (d.display_year == "2007" && clickedOnce2007 == false) {
      createScatter(null, data_parsed, d.display_year); 
    }
    else if (d.display_year == "2008" && clickedOnce2008 == false) {
      createScatter(null, data_parsed, d.display_year); 
    }
    else if (d.display_year == "2009" && clickedOnce2009 == false) {
      createScatter(null, data_parsed, d.display_year); 
    }
    else if (d.display_year == "2010" && clickedOnce2010 == false) {
      createScatter(null, data_parsed, d.display_year);   
    }
    else if (d.display_year == "2011" && clickedOnce2011 == false) {
      createScatter(null, data_parsed, d.display_year);  
    }
    else { 
      window.location.reload();
    }
    // finally call the createVis function to update the visualization! 
    });

reset_button_selection.on("click", function(d) {
    // make all buttons look inactive
    d3.selectAll(".buttons").transition().duration(500)
      .style("background", "rgb(240, 232, 226)").style("color", "black")
      .style("opacity", 0.6);

    // make the button that is pressed (we can access it using the this parameter)
    // look pressed
    d3.select(this).transition().duration(500)
      .style("background", "steelBlue").style("color", "white")
      .style("opacity", 1);
    
    resetVis(); 

    });

//OR REMOVE EVERYTHING WHEN GRAPHS ARE CLICKED AND REDRAW
graph_buttons_selection.on("click", function(d) {
    // make all buttons look inactive
    d3.selectAll(".graphbuttons").transition().duration(500)
      .style("background", "rgb(240, 232, 226)").style("color", "black")
      .style("opacity", 0.6);

    // make the button that is pressed (we can access it using the this parameter)
    // look pressed
    d3.select(this).transition().duration(500)
      .style("background", "steelBlue").style("color", "white")
      .style("opacity", 1);
    textVis(d.display_graph);
    if (d.display_graph == "graph2" && clickedOnceChart2 == false && clickedOnceChart3 == false){    
      //remove different stuff
      d3.select("#viz3").remove();
      d3.select("#viz4").remove();   
      initializeTreemap(data_parsed);  
    }
    if (d.display_graph == "graph2" && clickedOnceChart2 == false && clickedOnceChart3 == true){    
      //since chart 3 was already clicked need to bring back chart 2
      //d3.select("#viz3").remove();
      //d3.select("#viz4").remove(); 
      initializeTreemap(data_parsed);  
    }
    if (d.display_graph == "graph3" && clickedOnceChart3 == false && clickedOnceChart2 == false){   //Move from graph 1 to 3 right away 
      //remove different stuff
      d3.select("#viz2").remove();   
      initializeLinechart(data_parsed);
    }
    if (d.display_graph == "graph3" && clickedOnceChart3 == false && clickedOnceChart2 == true){   //Move from graph 2 to 3 
      //since chart2 was clicked already need to add the graphs back (3 and 4)
      d3.select("#viz2").remove();   
      //remove different stuff
      initializeLinechart(data_parsed); 
    }
    });