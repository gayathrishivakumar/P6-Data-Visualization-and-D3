# P6-Data-Visualization-and-D3

This is the sixth project of the Udacity Data Analyst Nanodegree. I was tasked to create a data visualization from a data set that tells a story and allows a viewer to explore trends or patterns. I used d3.js (including d3plus.js) to create the visualization. My work is a reflection of the theory and practice of data visualization, such as visual encodings, design principles, and effective communication.

I chose option 3 (hardest): I found my own data set (converted it from its original PDF form to a tidy dataset using R), investigated it, and shared my findings in a visualization. The final graphic is mostly explanatory as the viewer clicks through the successive years and the 3 different pages.

##Original Visualization

The Original Visualization is in the "Original" folder along with an initial mockup in Tableau as well as the R code used to wrangle the data which was extracted from a PDF.

##Previous Submission

This is my second submission so I have also included my previous submission in the "Previous Submission" folder so you can compare against that as well, which is what the third feedback is based on.

##Final Visualization

The Final Visualization is in the "Final" folder or altenatively can be found on http://bl.ocks.org/j450h1/raw/4846a5a62defddb139f7/

###Summary

The data used for this visualization spans 5 years from 2006 to 2011. Each colored circle represents one of the top 4 sports leagues in North America and the x-axis shows the Annual Revenue and the y-axis shows the Annual Attendance. NHL (National Hockey League) is represented by green, NBA (National Basketball League) is represented by orange, MLB (Major League Baseball) is represented by red, and finally NFL (National Football League) is represented by green. The first observation to be taken from the visualization is that the NFL has a lot more Revenue than the other leagues(this trend is consistent over these 5 years) even though its Attendance has been lower than all the other leagues. The other trend, which can be seen as the viewer succesively clicks through the years buttons, is that the NFL's Revenue Growth has exceeded the others; all the leagues have had pretty much flat Attendence numbers over this perio.. 

The second page shows that the NFL has more Revenue than the other 3 leagues combined (when looked at by proportion of one average sports fans budget spent on tickets) and this trend has remained steady throughout the years. 

Finally, the third page is actually showing two graphs (one for revenue growth and the other for attendence growth) in percentage terms to show that although the NFL looks like the dominant league, in terms of percentage growth it is not that much better in terms of growth.

###Design

I decided to allow the user to animate using buttons to see the change over the years as I received feedback that having one chart over another was not a good idea (scrolling down). This also allowed me to use just one scale for everything. I originally decided to leave the previous years on the stage (with lower opacity) so that it would be easy for the viewer to see that the NFL had the most Revenue growth over the past 5 years. However, after receiving additional feedback I realized opacity was not necessary and I had each year shown fully opaque. This also lead me to remove the Reset button which was no longer needed (all it did was refresh the page which was needed if viewer had pressed button multiple times to make circles fully opaque).

I decided not to include redundant information (the League Names) in the plot title as I assumed most people were familiar with at least one logo and could figure out from context what sport the league was (I'm assuming most would know at least one logo). I decided to include text to guide the user through the observations I observed and they could compare with any trends they saw.

I decided to put Revenue on the x-axis as that is the metric that had the largest movement over the years and I wanted to highlight it. I found (anecdotally) that is better to see this change from left to right instead of down to up as the years change.

After receiving feedback, I decided to add 2 additional pages of charts to give more context to the original visualization (see 3rd feedback below).

I chose a Treemap chart for the 2nd page because I wanted to show the proportion of an average sports fans dollars spent on each of the sports leagues in terms of attending games. Another alternative I considered was a Pie Chart. I also gave the user the option to either click play to automatically animate through the years or click the individual years at the bottom. I asked a question in the accompany text, before they would do this to add some mystery and allow the user to make a guess of what he/she thought would happen over the years (this same question approach was used on the 1st page).

Finally, for the 3rd page I actually had one line chart showing the attendance growth and a bar chart showing percentage growth. After seeing the values plotted it actually helped me to choose the most appropriate type of chart to choose to highlight the trend I wanted the reader to notice. For the Line Chart, I wanted to show that attendance growth was basically stagnant as it stayed around the +/- 2% growth range for most of the years and most of the leagues. I chose the bar chart because I wanted the viewer to see that the Revenue Growth Percentage for the NFL was very comparable to the other leagues for most of the years even though the absolute value was more than double as shown on the 1st page. You'll notice that I also excluded 2006 from these two charts because I didn't have any data from 2005 and therefore wasn't able to calculate a year over year change.

###Feedback

1. "Nice dataset. I would suggest you to set the same scale for all your x-axis. Also, I don't know if it was your intention, but your animation are adding extra charts, not changing the existing one."

2. "It looks like there's a bit of a startup error on your visualization. The initial figure shows two points for the MLB series for 2006 and 2007, and the 2006 point stays in the figure even when other years are selected. In addition, there is an animation when returning to 2006 for the MLB point that is not present for the other sports.

Exploring the data, the major thing that jumps out at me is that attendance numbers stay fairly stable from year to year, but that revenue increases much quicker for the NFL compared to the other three sports plotted. However, this finding would be best observed if one could see all the data at once, with each series of points connected in a line. The relatively horizontal lines would show the steady attendance, while the segment lengths between points would show the larger proportional increases in NFL revenue compared to the other sports. For a plot of this type, we can retain interaction by allowing all points from a single year or sport be highlighted (or all other points desaturated) either on a button press or mouse-over, in case there are users who want to see a more detailed comparison."

3. From previous review, 
"You've done a lot of awesome work with coding the chart in a creative and interesting way. What I like about this chart is that you've found a way to encode four variables in an uncluttered visualization that is easy to understand. The title is good, the axes are well labeled. I'm finding that the story about which team is the most lucrative and popular could be flushed out even more; I will admit that grading this part of the rubric is particular is subjective.

I like to encode information in the most straightforward and easily digestible way possible. For me, a more straightforward encoding is to put year on the x-axis and then plot the y-axis with the ratio of "annual revenue/combined attendance". It would put all of the information onto one chart. Bubble size could even be encoded to attendance or revenue if you felt those were important parts of the story.

A quick glance at the current chart makes the MLB look like the best because it's on top. But, it's ratio of revenue/attendance will probably put it as the lowest ranking sport in terms of how much money it extracts from each fan, which I think is a pretty interesting story. If I saw a chart like that, I would want to learn more about who the fan base is for each sport.

The other thing with the encodings is that the README file talks about how revenue is increasing more for the NFL than for other teams. Usually an investor will look at percent change to determine how fast revenue is increasing rather than pure dollar amounts. If you looked at the percent increase in revenue from year to year for the NFL, it might actually be lower than for the NHL or NBA. The NFL makes way more money, but a $300 change from $7000 is a much smaller increase than a $300 from $3000. If percent increase were rising from year to year, it would imply a sport still has room to grow. If percent increase were stagnant or decreasing, an investor might not be as interested.

I don't think it's possible to put all of the information I'm talking about onto one chart; there are really two different stories. 1) One story is how much faster one sport is growing over the other (% increase by year) 2) the other story is which sport extracts more money from its fans. And the over arching story might be which sport is the most lucrative (however you want to define lucrative).

It's also perfectly okay to make more than one visualization to tell the story. For example, one chart could just be a simple bar chart showing that the MLB has way more attendance. The second chart could be a chart showing that despite MLB's popularity, it doesn't make much money from its fans compared to other sports. And a third chart could show what the fastest growing sport is in terms of revenue (attendance seems stagnant for all sports, which is also interesting). The over arching story would be what's the most lucrative sport.

But the main message I want to give is that, in my opinion, it's better to make a simpler chart where all of the information can be seen at one glance. Also, if there's more than one thread in the story, I like splitting the information into various charts to create a more straightforward narrative. And it's also okay to tell the reader above a visualization what he should be looking at and what trends are interesting. I can't really say, "do this to pass this part of the rubric" because it's so subjective. But I've given some ideas of how I think this could be even more explanatory than it already is.

Let me know if all of this makes sense. You've found a really interesting data set because a lot of information can be extracted from these four variables, and there's also a lot of interesting things to say about the data."

###Resources

https://www.wrhambrecht.com/wp-content/uploads/2013/09/SportsMarketReport_2012.pdf
https://github.com/PMSI-AlignAlytics/dimple/wiki/dimple.chart
http://stackoverflow.com/questions/676324/div-background-color-to-change-onhover
http://stackoverflow.com/questions/4938716/align-div-elements-side-by-side
http://bl.ocks.org/weiglemc/6185069
http://bl.ocks.org/nikolay-shenkov/raw/3c05dd0ec4b86cdbb968/
http://bl.ocks.org/weiglemc/6185069
http://d3plus.org