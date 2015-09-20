
function initializeTreemap(data) {

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
}

function initializeLinechart(data) {

	data = data.filter(function(d){
    	return d.Year != "2006";
  	})
	
	clickedOnceChart3 = true;

	var height = 600, width = 850,
	margin = 25, radius = 11;

	  var attributes = [
    {"League": "NFL", "hex": "#95b8d1"},
    {"League": "MLB", "hex": "#ebbbb5"},
    {"League": "NBA", "hex": "#ebb980"},
    {"League": "NHL", "hex": "#c2e487"}
  	]
 
    //Left Chart - half the width of visualization 1 and 2.
  var visualization3 = d3plus.viz()
    .container("#viz3")
    .data(data)
    .type("bar")
    .id("League")
    .y({"value": "RGrowth", "label": "Yearly Revenue Growth (Percentage)"})
    .x("Year")
    .attrs(attributes)
    .color("hex")
    .height(height + margin)
    .width(width/2)
    .draw()

     //Right Chart - half the width of visualization 1 and 2.
  var visualization4 = d3plus.viz()
    .container("#viz4")
    .data(data)
    .type("line")
    .id("League")
    .y({"value": "AGrowth", "label": "Yearly Attendance Growth (Percentage)"})
    .x("Year")
    .attrs(attributes)
    .color("hex")
    .height(height + margin)
    .width(width/2)
    .draw()
}

