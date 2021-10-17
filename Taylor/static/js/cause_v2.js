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
    d3.json("cause_count.json").then(data => {
        console.log("records:", data);
        d3.select('#causes').html(''); // clears out old graph

        for (let i = 0; i < data.length; i++) {
          
          }
      }
        
        // total_trace = {
        //     type: 'scatter',
        //     x: years,
        //     y: countByYear,
        //     mode: 'lines',
        //     name: 'Total',
        //     line: {
        //       color: 'rgb(219, 64, 82)',
        //       width: 3
        //     }
        //   };
          
        //   arson_trace = {
        //     type: 'scatter',
        //     x: years,
        //     y: arsonByYear,
        //     mode: 'lines',
        //     name: 'Arson',
        //     line: {
        //       color: 'rgb(55, 128, 191)',
        //       width: 1
        //     }
        //   };

        //   camp_trace = {
        //     type: 'scatter',
        //     x: years,
        //     y: campfireByYear,
        //     mode: 'lines',
        //     name: 'Campfire',
        //     line: {
        //       color: 'green',
        //       width: 1
        //     }
        //   };

        //   smoke_trace = {
        //     type: 'scatter',
        //     x: years,
        //     y: smokingByYear,
        //     mode: 'lines',
        //     name: 'Smokeing',
        //     line: {
        //       color: 'orange',
        //       width: 1
        //     }
        //   };
          
        //   var layout = {
        //     width: 1000,
        //     height: 500
        //   };
          
        //   var data = [total_trace, arson_trace, camp_trace];
          
        //   Plotly.newPlot('causes', data, layout);
        
    })
};

causes();
// __________________________________________________________________________