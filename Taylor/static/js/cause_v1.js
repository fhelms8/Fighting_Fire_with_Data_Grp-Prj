years = ['1992', '1993','1994','1995', 
        '1996', '1997', '1998', '1999', 
        '2000', '2001', '2002', '2003', 
        '2004' ,'2005', '2006', '2007', 
        '2008','2009', '2010', '2011', 
        '2012','2013', '2014', '2015']

causeList = ['Arson', 'Campfire', 'Smoking', 'Lightning',
            'Equipment Use', 'Children', 'Railroad',
            'Fireworks', 'Powerline']

            countByYear = []
            arsonByYear = []
            campfireByYear = []
            smokingByYear = []
            lightningByYear = []
            equipByYear = []
            childByYear = []
            railByYear = []
            firewByYear = []
            powlineByYear = [] 


            dict = {}

function causes(selectedYear){
    // pull data from jsonfile
    d3.json("fire_data.json").then(data => {
        console.log("record:", data[100]);
        // filter data to only selected year
        for (let i = 0; i < years.length; i++) {
            currYear = data.filter(item => item.FIRE_YEAR == years[i])
            currCount = currYear.length;
            countByYear.push(currCount);

            arsonCount = currYear.filter(item => item.STAT_CAUSE_DESCR == 'Arson').length;
            arsonByYear.push(arsonCount);

            campCount = currYear.filter(item => item.STAT_CAUSE_DESCR == 'Campfire').length;
            campfireByYear.push(campCount);

            smokeCount = currYear.filter(item => item.STAT_CAUSE_DESCR == 'Smoking').length;
            smokingByYear.push(smokeCount);

            lightningCount = currYear.filter(item => item.STAT_CAUSE_DESCR == 'Lightning').length;
            smokingByYear.push(smokeCount);

            equipCount = currYear.filter(item => item.STAT_CAUSE_DESCR == 'Equipment Use').length;
            equipByYear.push(equipCount);

            childCount = currYear.filter(item => item.STAT_CAUSE_DESCR == 'Children').length;
            childByYear.push(childCount);

            railCount = currYear.filter(item => item.STAT_CAUSE_DESCR == 'Railroad').length;
            railByYear.push(railCount);

            worksCount = currYear.filter(item => item.STAT_CAUSE_DESCR == 'Fireworks').length;
            firewByYear.push(worksCount);

            linesCount = currYear.filter(item => item.STAT_CAUSE_DESCR == 'Powerline').length;
            powlineByYear.push(linesCount);
        }

        d3.select('#causes').html(''); // clears out old graph
        
        total_trace = {
            type: 'scatter',
            x: years,
            y: countByYear,
            mode: 'lines',
            name: 'Total',
            line: {
              color: 'rgb(219, 64, 82)',
              width: 3
            }
          };
          
          arson_trace = {
            type: 'scatter',
            x: years,
            y: arsonByYear,
            mode: 'lines',
            name: 'Arson',
            line: {
              color: 'rgb(55, 128, 191)',
              width: 2
            }
          };

          camp_trace = {
            type: 'scatter',
            x: years,
            y: campfireByYear,
            mode: 'lines',
            name: 'Campfire',
            line: {
              color: 'green',
              width: 2
            }
          };

          smoke_trace = {
            type: 'scatter',
            x: years,
            y: smokingByYear,
            mode: 'lines',
            name: 'Smokeing',
            line: {
              color: 'orange',
              width: 2
            }
          };

          lightning_trace = {
            type: 'scatter',
            x: years,
            y: lightningByYear,
            mode: 'lines',
            name: 'Lightning',
            line: {
              color: 'purple',
              width: 2
            }
          };

          equip_trace = {
            type: 'scatter',
            x: years,
            y: equipByYear,
            mode: 'lines',
            name: 'Equipment Use',
            line: {
              color: 'green',
              width: 2
            }
          };

          child_trace = {
            type: 'scatter',
            x: years,
            y: childByYear,
            mode: 'lines',
            name: 'Children',
            line: {
              color: 'pink',
              width: 2
            }
          };

          rail_trace = {
            type: 'scatter',
            x: years,
            y: railByYear,
            mode: 'lines',
            name: 'Railroads',
            line: {
              color: 'yellow',
              width: 2
            }
          };

          fireworks_trace = {
            type: 'scatter',
            x: years,
            y: firewByYear,
            mode: 'lines',
            name: 'Fireworks',
            line: {
              color: 'black',
              width: 2
            }
          };

          powerlines_trace = {
            type: 'scatter',
            x: years,
            y: powlineByYear,
            mode: 'lines',
            name: 'Powerlines',
            line: {
              color: 'yellow',
              width: 2
            }
          };

          
          var layout = {
            width: 1000,
            height: 500,
            // template='plotly_dark'
            plot_bgcolor:"black",
            xaxis: {gridcolor: "grey"},
            yaxis: {gridcolor: "grey"}
          };
          
          var data = [total_trace, arson_trace, camp_trace, 
                      child_trace, rail_trace, equip_trace, 
                      lightning_trace, powerlines_trace, fireworks_trace];
          
          Plotly.newPlot('causes', data, layout);
        
    })
};

causes();
// __________________________________________________________________________