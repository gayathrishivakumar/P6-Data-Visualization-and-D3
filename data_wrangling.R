#Goal - Create two tables in CSV format
#1st Table - Yearly Revenue per League
#2nd Table - Yearly Attendence per League

#Set working directory
getwd(); setwd('./Project-5-Data-Visualization-and-D3')

##Import Data
list.files(getwd())
attendance_df <- read.csv('Regular_Season_Attendance_M.csv')

##Clean Data
library(dplyr)
#Transpose
df <- as.data.frame(t(attendance_df)[1:7,]) #Last row is just percent change
years <- row.names(df)[2:7] #Extract the years
years <- lapply(years, FUN = function(x) gsub("X", "", x)) #Remove X from Years
years <- as.character(years)
#Create 4 separate dataframes
NFLdf <- df %>%
         filter(V1 != "NFL ") %>%
         mutate(Year = years, League = rep(c("NFL"), each = nrow(df)-1)) %>%
         select(Year, League, Attendance = V1) 
MLBdf <- df %>%
         filter(V2 != "MLB ") %>%
         mutate(Year = years, League = rep(c("MLB"), each = nrow(df)-1)) %>%
         select(Year, League, Attendance = V2)
NBAdf <- df %>%
         filter(V3 != "NBA ") %>%
         mutate(Year = years, League = rep(c("NBA"), each = nrow(df)-1)) %>%
         select(Year, League, Attendance = V3)
NHLdf <- df %>%
         filter(V4 != "NHL ") %>%
         mutate(Year = years, League = rep(c("NHL"), each = nrow(df)-1)) %>%
         select(Year, League, Attendance = V4)
#Let's combine all 4 dataframes together
attendance_df <- rbind(NFLdf,MLBdf,NBAdf,NHLdf) #currently arranged by league

#Plot to see if there is a trend, before starting work on the D3 Visualization
library(ggplot2)
ggplot(aes(x=as.numeric(Year),y=as.numeric(Attendance)), data = attendance_df) + 
      geom_point() +
      facet_wrap(~ League)
#Can see the less profitable leagues such as NBA, MLB, and NHL actual have higher 
#attendance as opposed to the NFL which is the world's most profitable league at
#an overall profit of $984.5 million in 2005. This suggests that the lionshare of
#their profits come from non-ticket sales.
#http://ca.askmen.com/sports/business_200/218b_sports_business.html

#Write to csv file
write.csv(attendance_df,'attendance.csv',row.names=FALSE)

#Repeat Steps for Revenue Data

revenue_df <- read.csv('Annual_Revenue_By_League.csv')
df <- as.data.frame(t(revenue_df)[1:7,]) 

years <- row.names(df)[2:7] #Extract the years
years <- lapply(years, FUN = function(x) gsub("X", "", x)) #Remove X from Years
years <- as.character(years)
#Create 4 separate dataframes
NFLdf <- df %>%
  filter(V1 != "NFL ") %>%
  mutate(Year = years, League = rep(c("NFL"), each = nrow(df)-1)) %>%
  select(Year, League, Revenue = V1) 
MLBdf <- df %>%
  filter(V2 != "MLB ") %>%
  mutate(Year = years, League = rep(c("MLB"), each = nrow(df)-1)) %>%
  select(Year, League, Revenue = V2)
NBAdf <- df %>%
  filter(V3 != "NBA ") %>%
  mutate(Year = years, League = rep(c("NBA"), each = nrow(df)-1)) %>%
  select(Year, League, Revenue = V3)
NHLdf <- df %>%
  filter(V4 != "NHL ") %>%
  mutate(Year = years, League = rep(c("NHL"), each = nrow(df)-1)) %>%
  select(Year, League, Revenue = V4)
#Let's combine all 4 dataframes together
revenue_df <- rbind(NFLdf,MLBdf,NBAdf,NHLdf) #currently arranged by league
#Revenue is in millions
#Convert to numeric
revenue_df$Revenue <- as.character(revenue_df$Revenue)
#Remove '$' and ','
revenue_df$Revenue <- lapply(revenue_df$Revenue, FUN = function(x) gsub("\\$", "", x))
revenue_df$Revenue <- lapply(revenue_df$Revenue, FUN = function(x) gsub(",", "", x))
revenue_df$Revenue <- as.numeric(revenue_df$Revenue)
as.numeric(gsub("$","", as.character(revenue_df$Revenue)))

#Plot to see if there is a trend, before starting work on the D3 Visualization
library(ggplot2)
ggplot(aes(x=as.numeric(Year),y=Revenue), data = revenue_df) + 
  geom_point() +
  facet_wrap(~ League)

#Write to csv file
write.csv(revenue_df,'revenue.csv', row.names=FALSE)

df1 <- read.csv('attendance.csv') 
df2 <- read.csv('revenue.csv')
tidydf <- merge(df1,df2,by=c("Year","League"))
library(dplyr)
tidydf <- tidydf %>%
          arrange(Year, Attendance)

write.csv(tidydf,'tidy.csv', row.names=FALSE)

#Visualization Idea  
#Show a "pie-chart" like distribution for both tables
#The pie in this case will be the map of Canada and USA


