function set_legend(){
		 var circleData = [
	   {"cx": 80, "cy": 80, "radius": 65, "color" : "red", "text":"Hubei","size":"27px" },
	   {"cx": 180, "cy": 80, "radius": 29, "color" : "red", "text":">5000","size":"18px"},
	   {"cx": 245, "cy": 80, "radius": 26, "color" : "red", "text":">2000","size":"16px"},
	   {"cx": 300, "cy": 80, "radius": 23, "color" : "red", "text":">1000","size":"16px"},
	   {"cx": 350, "cy": 80, "radius": 20, "color" : "red", "text":">500","size":"14px"},
	   {"cx": 395, "cy": 80, "radius": 17, "color" : "red", "text":">200","size":"14px"},
	   {"cx": 430, "cy": 80, "radius": 14, "color" : "red", "text":">100","size":"12px"},
	   {"cx": 465, "cy": 80, "radius": 11, "color" : "red", "text":">25","size":"12px"},
	   {"cx": 495, "cy": 80, "radius": 8, "color" : "red", "text":">10","size":"12px"},
	   {"cx": 520, "cy": 80, "radius": 5, "color" : "red", "text":">5","size":"12px"},
	   {"cx": 540, "cy": 80, "radius": 2, "color" : "red", "text":">1","size":"12px"}];
	 
	 //Create the SVG Viewport
	 var svgContainer = d3.select("#legend").append("svg")
	                                      .attr("width",550)
	                                   .attr("height",180);

	//Add circles to the svgContainer
	var circles = svgContainer.selectAll("circle")
	                           .data(circleData)
	                           .enter()
	                           .append("circle");

	//Add the circle attributes
	var circleAttributes = circles
	                       .attr("cx", function (d) { return d.cx; })
	                       .attr("cy", function (d) { return d.cy; })
	                       .attr("r", function (d) { return d.radius; })
	                      .style("fill", function (d) { return d.color; })
	                      .style("fill-opacity",0.5);

	var text = svgContainer.selectAll("text")
	                        .data(circleData)
	                        .enter()
	                        .append("text");
	var textLabels = text
	               .attr("x", function(d) { return d.cx; })
	                .attr("y", function(d) { return d.cy+5; })
	                .text( function (d) { return d.text; })
	                .attr("font-family", "sans-serif")
	                .style("text-anchor","middle")
	                .attr("font-size", function (d) { return d.size; })
	                .attr("fill", "black");
}