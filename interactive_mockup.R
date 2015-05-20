library(rCharts)

#Set working directory
getwd(); setwd('./Project-5-Data-Visualization-and-D3')

df <- read.csv("tidy.csv")

### example 16 Scatter
d1 <- dPlot(
  Revenue~Attendance,
  groups = c("Year","League"),
  data = df,
  type = "bubble"
)
d1$xAxis( type = "addMeasureAxis" )
d1$yAxis( type = "addMeasureAxis" )
d1$legend(
  x = 200,
  y = 10,
  width = 500,
  height = 20,
  horizontalAlign = "right"
)
d1