
function initializeTreemap(data) {


	clickedOnceChart2 = true;
	
	var height = 600, width = 850,
	    margin = 25, radius = 11;

  var attributes = [
    {"League": "NFL", "hex": "#95b8d1"},
    {"League": "MLB", "hex": "#ebbbb5"},
    {"League": "NBA", "hex": "#ebb980"},
    {"League": "NHL", "hex": "#c2e487"}
  ]
 
    var visualization2 = d3plus.viz()
    .container("#viz2")
    .data(data)
    .type("tree_map")
    .id("League")
    .size("ARPF")
    .time({"value": "nYear", "solo": 2006})
    .attrs(attributes)
    .color("hex")
    .height(height + margin)
    .width(width + margin)
    .legend({"value":false})
    .draw()

    /*
	// create the svg element that contains visualization
	var svg = d3.select("#scatter-container").append("svg")
	     .attr("id", "scatter")
	     .attr("width", width + 2*margin)
	     .attr("height",height);
	     
	// keep scale ranges constant
	var minX = 2007, minY = -40, maxX = 2011, maxY = 40;
	/*
	// create two linear scales
	var xlinear = d3.scale.linear()
	    .domain([minX, maxX])
	    .range([0, width - 2*margin]);
	var ylinear = d3.scale.linear()
	    .domain([minY - 5, maxY + 10])
	    .range([height - 2*margin, 0]);    

	// a "g" element to hold axes
	var axesG = svg.append("g").attr("class", "axes");

	// create axis elements
	var commasFormatter = d3.format(",.0f")
	var xAxis = d3.svg.axis().scale(xlinear).orient("bottom")
	            .tickValues(["2007", "2008", "2009", "2010", "2011"])
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
	        .text("Percentage Year over Year Increase/Decrease");
	        
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
	        .text("Year");
	        

	// container for the scatter points
	var bodyG = svg.append("g")
	               .attr("class", "scatter-g")
	               .attr("transform", translator(margin, margin));
	*/               
}

function initializeLinechart(data) {

	clickedOnceChart3 = true;

	var height = 600, width = 850,
	margin = 25, radius = 11;

	  var attributes = [
    {"League": "NFL", "hex": "#95b8d1"},
    {"League": "MLB", "hex": "#ebbbb5"},
    {"League": "NBA", "hex": "#ebb980"},
    {"League": "NHL", "hex": "#c2e487"}
  	]
  
  var visualization3 = d3plus.viz()
    .container("#viz3")
    .data(data)
    .type("bar")
    .id("League")
    .y("AGrowth")
    .x("Year")
    .attrs(attributes)
    .color("hex")
    .height(height + margin)
    .width(width/2)
    .draw()

  var visualization4 = d3plus.viz()
    .container("#viz4")
    .data(data)
    .type("bar")
    .id("League")
    .y("RGrowth")
    .x("Year")
    .attrs(attributes)
    .color("hex")
    .height(height + margin)
    .width(width/2)
    .draw()
 
}

