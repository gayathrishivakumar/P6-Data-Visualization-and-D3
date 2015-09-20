function createVis(error, data, current_year) {
    // output error message, if any:
    if (error) { console.log(error); }
    
    // use a global variable to store parsed_data
    // so that we have access to it from other functions
    data_parsed = data;
    
    // set a default year:
    // if current year is undefined, set it to 2006
    current_year = current_year || "2006";

    // -------------------------------------
    // Create a subset of the data to be used to draw scatter points
    var data_subset = [];
    
    for (var i = 0; i < data.length; i++) {
        var new_elem = {
            "uniqueid": data[i]["uniqueid"],
            "Year": data[i]["Year"],
            "League": data[i]["League"],
            "Revenue": data[i]["Revenue"],
            "Attendance": data[i]["Attendance"]
        };
        //Only going to add the data points for the selected year to the stage
        if (data[i]["Year"] == current_year) {
            data_subset.push(new_elem);
        }
    } 
    renderVis(data_subset, current_year)
}

//just simpy refreshes the page
function resetVis() {
    window.location.reload();
}

function renderVis(data, current_year) {
    // bind data to html elements - circles 
    var selection = bodyG.selectAll("circle.uniqueid")
                    .data(data, function(d) {return d.uniqueid;});

    // Function to color points based on league type 
    function colorPoints(d) {
        if (d.League == "NHL") 
            return "#c2e487";
        else if (d.League == "NBA")
            return "#ebb980";
        else if (d.League == "MLB")
            return "#ebbbb5"; 
        else //NFL
            return "#95b8d1";
    }

    //Each year has a higher opacity, when each year is clicked successively the trend is apparent
    function opacityYear(d) {
        if (d.Year == "2006") 
            return 0.17;
        else if (d.Year == "2007")
            return 0.34;
        else if (d.Year == "2008")
            return 0.51
        else if (d.Year == "2009")
            return 0.68
        else if (d.Year == "2010")
            return 0.85    
        else //2011
            return 1.0;
    }


    // enter selection
    selection.enter().append("circle")
        //.attr("class", "uniqueid") //would make only that specific years circles show if uncommented
        .attr("fill", colorPoints)
        .style("opacity",opacityYear);

    selection.exit().remove();

    // update selection handles animation so we use the duration()
    // to specify a 2 second transition
    selection.transition().duration(2000)
            // we use the linear scales to go from
            // data elements to pixel locations cx and cy
             .attr("cx", function(d) {return xlinear(d["Revenue"])})
             .attr("cy", function(d) {return ylinear(d["Attendance"])})
             .attr("r", radius)
             .attr("fill", colorPoints);
} 
