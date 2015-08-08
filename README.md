# P6-Data-Visualization-and-D3

This is the sixth project as part of the Udacity Data Analyst Nanodegee. I was tasked to create a data visualization from a data set that tells a story and allows a viewer to explore trends or patterns. I used d3.js to create the visualization. My work is a reflection of the theory and practice of data visualization, such as visual encodings, design principles, and effective communication.

I chose option 3 (hardest): I found my own data set (converted it from its original PDF form to a tidy dataset using R - see steps.md for more details), investigated it, and shared my findings in a visualization. The final graphic is mostly explanatory as the viewer clicks through the successive years, but it also has an exploratory component as the user can compare any year with the first year (2006) to see the difference.

##Original Visualization

The original dimple.js visualization I created before receiving feedback can be found [here](
http://bl.ocks.org/j450h1/d9c62059cd2c86d611c3).

##Final Visualization

The final d3.js visualization and code used to generate it can be viewed [here](http://bl.ocks.org/j450h1/4846a5a62defddb139f7).


###Summary

Each colored circle represents one of the top 4 sports leagues in North America and the x-axis shows the Annual Revenue and the y-axis shows the Annual Attendance. NHL (National Hockey League) is represented by green, NBA (National Basketball League) is represented by orange, MLB (Major League Baseball) is represented by red, and finally NFL (National Football League) is represented by green. The first observation to be taken from the visualization is that the NFL has alot more Revenue than the other leagues(this trend is consistent over these 5 years) even though its attendance has been lower than all the other leagues. The other trend can be seen as the viewer succesively clicks through the years, is that the NFL's Revenue Growth has exceeded the others and all the leagues have had pretty much flat attendence growth over this period.

###Design

I decided to allow the user to animate using buttons to allow the users to see the change over the years as I received feedback that having one chart over another was not a good idea (scrolling down). This also allowed me to use just one scale for everything. I also decided to leave the previous years on the stage (with lower opacity) so that it would be easy for the viewer to see that the NFL had the most Revenue growth over the past 5 years.

I decided to include redundant information in the plot title in case people were not familiar with all the logos (I'm assuming most would know at least one logo). I decided to let the user click so if they wanted to compare a year to 2006 they could do that by resetting and then not clicking the years in order.

###Feedback

"Nice dataset. I would suggest you to set the same scale for all your x-axis. Also, I don't know if it was your intention, but your animation are adding extra charts, not changing the existing one."

"It looks like there's a bit of a startup error on your visualization. The initial figure shows two points for the MLB series for 2006 and 2007, and the 2006 point stays in the figure even when other years are selected. In addition, there is an animation when returning to 2006 for the MLB point that is not present for the other sports.

Exploring the data, the major thing that jumps out at me is that attendance numbers stay fairly stable from year to year, but that revenue increases much quicker for the NFL compared to the other three sports plotted. However, this finding would be best observed if one could see all the data at once, with each series of points connected in a line. The relatively horizontal lines would show the steady attendance, while the segment lengths between points would show the larger proportional increases in NFL revenue compared to the other sports. For a plot of this type, we can retain interaction by allowing all points from a single year or sport be highlighted (or all other points desaturated) either on a button press or mouse-over, in case there are users who want to see a more detailed comparison."

###Resources

https://www.wrhambrecht.com/wp-content/uploads/2013/09/SportsMarketReport_2012.pdf
https://github.com/PMSI-AlignAlytics/dimple/wiki/dimple.chart
http://stackoverflow.com/questions/676324/div-background-color-to-change-onhover
http://stackoverflow.com/questions/4938716/align-div-elements-side-by-side
http://bl.ocks.org/weiglemc/6185069
http://bl.ocks.org/nikolay-shenkov/raw/3c05dd0ec4b86cdbb968/
http://bl.ocks.org/weiglemc/6185069
