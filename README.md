

<div id="top"></div>
<div align="center">
  
# Fighting Fire with Data
### [Texas Wildfire Data Dashboard](https://fightingfirewithdata.herokuapp.com/)
  
</div>

![Screenshot_1](https://user-images.githubusercontent.com/82190357/137617782-5d8d6180-0c64-4ce5-9351-4eb1abfd946e.png)

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#Overview">About The Project</a></li>
      <ul>
        <li><a href="#Considerations">Considerations</a></li>
      </ul>
    </li>
  <li><a href="#Our-Recommendations">Recommendations</a></li>
    <li><a href="#Process">Process</a></li>
      <ul>
         <li><a href="#Tools">Tools</a></li>
      </ul>
    <li><a href="#Data-Sources">Data Sources</a></li>
    <li><a href="#Team">Team</a></li>
  </ol>
</details>

## Overview

The Texas Outdoors and Nature Department have recently received an additional $10 million in state funding for wildfire prevention. The department has hired our firm to help decide where to invest their funds best.

Our goal is to develop a web application to compile and display relevant historical data for executive staff.  In addition, we will provide insights and recommendations based on the initial analysis.  

## Considerations
- **Education and Marketing:** Which audience is best suited to receive wildfire prevention education?
- **Law Enforcement:** Would an increase in penalties create positive change?
- **Area/Regions of Concern:** Which locations would benefit the most from the deployment of preventative measures?
- **Prediction:** Are there significant changes in the intensity, speed, or size of wildfires?

<p align="right">(<a href="#top">back to top</a>)</p>

## Insights 

Wildfires not only affect our environment but also affect our air quality, destorys thousands of homes, and take away lives (human and animals). <br>
Wildfires most often happen quickly and without warning. 
Below is a picture of The Rockhouse Fire from 2011 around the Fort Davis area in west Texas. This fire started from an electrical short in an abandoned building and ended up burning roughly 63 acres **per minute**! In total, this fire burned 20,800 acres in roughly 5.5 hours with an average speed of 6mph. 
The average human can run 8-10 mph but cannot keep up the pace for 5.5 hours much like this fire did.

![original (1)](https://raw.githubusercontent.com/fhelms8/Project-3/main/Unused%20files/pics/rockhousefire.png)

We all know that children can be rotten and destructive (semi-kidding), but what we didn't know is that they cause almost the same amount of wildfires as railroads do!
<img src=https://raw.githubusercontent.com/fhelms8/Project-3/main/Unused%20files/pics/campfire_children_railroads2.png>

In 2011, Texas saw a massive influx of fires due to a serious drought. Roughly 3.5 million acres were burned throughout 2011 with the leading cause being “Equipment Use” with "Arson" trailing close behind as the second leading cause.  
<img src=https://raw.githubusercontent.com/fhelms8/Project-3/main/Unused%20files/pics/arson_equip_powerlines2.png>
As you can see, in 2011, Texas had burned roughly 3.5 MILLION acres which is almost the same size as state of Connecticut (3.54 acres)!! 
- **1992-1999 (7 year span)** = 425,487 acres / 7yrs = 105,336 average acres burned per year
- **2000-2007 (7 year span)** = 2,683,265 acres / 7yrs = 383,324 average acres burned per year
- **2008-2015 (7 year span)** = 6,365,597 acres / 7yrs = 909,371 average acres burned per year
<img src=https://raw.githubusercontent.com/fhelms8/Project-3/main/Unused%20files/pics/acres_by_year.png>
From the graph, you can definitely see a coorelation between the amount of precipitation (or lack there of) and the amount of wildfires. 
<img src=https://raw.githubusercontent.com/fhelms8/Project-3/main/Unused%20files/pics/droughts.png>
There is a mass count of miscellaneous and unidentified wildfire causes (we can still blame the children), but lightening seems to be the leading cause of the amount of acres being burned in Texas with the runner up being equipment use. 
<img src=https://raw.githubusercontent.com/fhelms8/Project-3/main/Unused%20files/pics/acres_total.png>


<p align="right">(<a href="#top">back to top</a>)</p>

### Our Recommendations
- Arson appears to be a consistent cause of wildfires in Texas. The current maximum penalty for arson resulting in severe injury or death is equivalent to possessing 4 to 200 grams of cocaine. (Both result in a fine of up to $10,000 and a max of 10 years in prison.) The department might consider partnering with law enforcement and lawmakers to increase the maximum sentence for arson. 

- Since 2008, 'equipment use' has maintained the leading cause of wildfires in Texas. Activities under this category include (but not limited to) the use of lawnmowers, weed-eaters, chain saws, grinders, welders, tractors, and construction machinery.  We strongly suggest that the department educate communities in high-risk regions on how to operate equipment safely along with making annual inspections of equipement mandetory. Currently, the only inspection regulation for equipement use is from the manufacterer and no inspections are required after. 

- One last recommendation is to make a wildfire protection program that allows citizens with pilots licenses to get a tax break on planes that have a higher weight capacity and higher heat resistance. In order for a citizen to get the tax break, they would need to be trained in a wildfire program and to be notified if a wildfire outbreak is within their area. The reason being is the bigger planes that carry the retardants, take more time to load, travel back and forth, and there are limited amount of planes/trained pilots, which make the process take much longer. If we can get citizens to assist and help contain the fires between "big drops" then, there might be a chance to save acres, houses, and most importantly, lives.
<p align="right">(<a href="#top">back to top</a>)</p>

### Our Process

#### Tools
- PostgreSQL/pgAdmin/Heroku Postgres
- Python/Pandas/Flask
- Jupyter Notebook
- Javascript/Plotly/D3/Chart.js/[Bootstrap](https://getbootstrap.com)

Our original data sources contained nearly 2 million records before ETL. Our team used Pandas and Python to extract and clean data relevant to Texas. These remaining records were then imported into a local Postgres database and deployed to a Postgres Heroku cloud server. 

A Python Flask App was written to facilitate the retrieval of data in the postgres database coming from user requests via the dashboard. It was then deployed using Heroku to create a fully functional Web App.  

The final web application uses Heroku and Flask to retrieve data and Plotly, Leaflet, and Chart.js to render. 

<p align="right">(<a href="#top">back to top</a>)</p>
   
<br>
<br>
<br>
<br>
<p align="right">(<a href="#top">back to top</a>)</p>

<br>

### Data Sources
- U.S. DEPARTMENT OF AGRICULTURE - RDS-2013-0009.4_SQLITE <br>
<a href=https://www.drought.gov/states/texas>Drought.gov</a> <br>
<a href=https://www.kaggle.com/rtatman/188-million-us-wildfires>Kaggle.com</a>
<br>

<p align="right">(<a href="#top">back to top</a>)</p>
  
### The Team
[Dillon Carter](https://github.com/rb25s13) ---|--- [Felecia Helms](https://github.com/fhelms8) ---|--- [Darrell Horich](https://github.com/D11eleven) ---|--- [Taylor Lyons](https://github.com/taylorsyde)
  
<p align="right">(<a href="#top">back to top</a>)</p>
