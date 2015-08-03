# Methodology

Raw Dataset: [THE U.S. PROFESSIONAL SPORTS MARKET & FRANCHISE VALUE REPORT 2012](https://www.wrhambrecht.com/wp-content/uploads/2013/09/SportsMarketReport_2012.pdf)

**Steps Taken:**

1. Download PDF report.
2. Extract Tables from PDF using [Tabula](http://tabula.technology/). Takes about 10 Minutes to extract the two tables from the PDF report.
3. Use dplyr pipelines in r to create separate dataframes for each sports league. Combine together using rbind.
4. Use ggplot2 to visualize the two datasets and see that there are two different trends.
5. Use Tableau to create the first mockup.
6. Use rCharts library in R to make 2nd mockup of scatterplot
7. Create static visualization using D3 and Dimple.js.
8. Create animated visualization which is an author driven-narrative. 


**Tidy Datasets:**

[Dataset 1: Annual Revenue of each major sports league in North America (Figure 14 - Page 22)](https://github.com/j450h1/Project-5-Data-Visualization-and-D3/blob/master/attendance.csv)

[Dataset 2: Annual Attendence of each major sports league in North America (Figure 5 - Page 8)]
(https://github.com/j450h1/Project-5-Data-Visualization-and-D3/blob/master/revenue.csv)

**D3 Visualization**


