# Methodology

Raw Dataset: [THE U.S. PROFESSIONAL SPORTS MARKET & FRANCHISE VALUE REPORT 2012](https://www.wrhambrecht.com/wp-content/uploads/2013/09/SportsMarketReport_2012.pdf)

**Steps Taken:**

1. Download PDF report.
2. Extract Tables from PDF using [Tabula](http://tabula.technology/). Takes about 10 Minutes to extract the two tables from the PDF report.
3. Use dplyr pipelines in r to create separate dataframes for each sports league. Combine together using rbind.
4. Use ggplot2 to visualize the two datasets and see that there are two different trends.
5. Use Tableau to create the first mockup.
6. Used Rcharts to make 2nd mockup of scatterplot. (axises are flipped compared to final visualization)
7. Create visualization in dimple.js
8. Recevied feedback through the Udacity forums from other students.
9. Refined and started the visualization from scratch, incorporating the feedback, but this time in full d3.
10. Received final feedback and made final revisions.

**Raw Datasets (extracted from PDF)**

https://github.com/j450h1/P6-Data-Visualization-and-D3/blob/master/Regular_Season_Attendance_M.csv

https://github.com/j450h1/P6-Data-Visualization-and-D3/blob/master/Annual_Revenue_By_League.csv

**Tidy Dataset (after Data Munging in R):**

https://github.com/j450h1/P6-Data-Visualization-and-D3/blob/master/tidy.csv

**Final Dataset used**

https://github.com/j450h1/P6-Data-Visualization-and-D3/blob/master/dataset.csv

**D3 Visualization**

(http://bl.ocks.org/j450h1/4846a5a62defddb139f7)
