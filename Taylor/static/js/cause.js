years = ['1992', '1993','1994','1995', 
        '1996', '1997', '1998', '1999', 
        '2000', '2001', '2002', '2003', 
        '2004' ,'2005', '2006', '2007', 
        '2008','2009', '2010', '2011', 
        '2012','2013', '2014', '2015']

causeList = ['Arson', 'Campfire', 'Smoking', 'Lightning',
            'Equipment Use', 'Children', 'Railroad',
            'Fireworks', 'Powerline']

function causes(selectedYear){
    // pull data from jsonfile
    d3.json("fire_data.json").then(data => {
        // filter data to only selected year
        countByYear = []
        for (let i = 0; i < years.length; i++) {
            currCount = data.filter(item => item.FIRE_YEAR == years[i]).length;
            countByYear.push(currCount);
        }
        console.log('years:', years);
        console.log('counts:', countByYear)

        d3.select('#causes').html(''); // clears out old graph
        
        total_trace = {
            type: 'scatter',
            x: years,
            y: countByYear,
            mode: 'lines',
            name: 'Red',
            line: {
              color: 'rgb(219, 64, 82)',
              width: 3
            }
          };
          
        //   trace2 = {
        //     type: 'scatter',
        //     x: [1, 2, 3, 4],
        //     y: [12, 9, 15, 12],
        //     mode: 'lines',
        //     name: 'Blue',
        //     line: {
        //       color: 'rgb(55, 128, 191)',
        //       width: 1
        //     }
        //   };
          
          var layout = {
            width: 500,
            height: 500
          };
          
          var data = [total_trace];
          
          Plotly.newPlot('causes', data, layout);
        
    })
};

causes();
// __________________________________________________________________________