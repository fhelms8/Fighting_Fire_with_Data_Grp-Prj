

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

![original (1)](https://user-images.githubusercontent.com/82190357/137281572-0335e82c-8b80-4629-ba77-f52850a4988b.jpg)


<p align="right">(<a href="#top">back to top</a>)</p>

### Our Recommendations
Arson appears to be a consistent cause of wildfires in Texas. The current maximum penalty for arson resulting in severe injury or death is equivalent to possessing 4 to 200 grams of cocaine. (Both result in a fine of up to $10,000 and a max of 10 years in prison.) The department might consider partnering with law enforcement and lawmakers to increase the maximum sentence for arson. 

In 2015, 'equipment use' became the leading cause of wildfires in Texas. Activities under this category include the use of lawnmowers, weed-eaters, chain saws, grinders, welders, and tractors. We strongly suggest that the department educate communities in high-risk regions on how to operate equipment safely.   

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

![Screenshot_1](https://user-images.githubusercontent.com/82190357/137281183-61a99571-7f9b-44b2-a7e6-bc53a48d4028.png)


<b>
<b>


![QuickDBD-export (2)](https://user-images.githubusercontent.com/82190357/137862833-0c838645-077a-4a9a-96a5-e5932e9285ed.jpg)

<br>

### Data Sources
- U.S. DEPARTMENT OF AGRICULTURE - RDS-2013-0009.4_SQLITE
- Drought.gov
  

<p align="right">(<a href="#top">back to top</a>)</p>


<br>


![original (2)](https://user-images.githubusercontent.com/82190357/137583931-03c513ea-a48b-441b-be67-ff8462385408.jpg)

  
### The Team
[Dillon Carter](https://github.com/rb25s13) ---|--- [Felecia Helms](https://github.com/fhelms8) ---|--- [Darrell Horich](https://github.com/D11eleven) ---|--- [Taylor Lyons](https://github.com/taylorsyde)
  
<p align="right">(<a href="#top">back to top</a>)</p>
