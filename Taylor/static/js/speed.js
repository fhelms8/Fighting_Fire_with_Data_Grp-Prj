years = ['1992', '1993','1994','1995', 
        '1996', '1997', '1998', '1999', 
        '2000', '2001', '2002', '2003', 
        '2004' ,'2005', '2006', '2007', 
        '2008','2009', '2010', '2011', 
        '2012','2013', '2014', '2015']

function sizeVsYear(){
    // pull data from jsonfile
    d3.json("fire_data.json").then(data => {
        console.log(data[2])
        // loop thru each year, filter and return
        // the number of fires in each year
        sizeAvgByYear = []
        for (let i = 0; i < years.length; i++) {
            currYear = data.filter(item => item.FIRE_YEAR == years[i])
            currCount = currYear.length;
            sizeTotal = 0
            for (let i = 0; i < currYear.length; i++) {
                sizeTotal = sizeTotal + currYear[i].FIRE_SIZE 
            }
            currYearAvg = sizeTotal/currCount;
            sizeAvgByYear.push(currYearAvg);
            console.log(`Size Avg in ${years[i]}:`, currYearAvg)
        }

        d3.select('#size-by-year').html(''); // clears out old graph

        let trace = [{
            type: 'scatter',
            x: years,
            y: sizeAvgByYear,
            line: {
              color: 'red',
              width: 3
            }
          }];

        let Layout = {
            title: "Avarage Size by Year",
            height: 300,
            width: 600};
        Plotly.newPlot('size-by-year', trace, Layout);        
    })
};

sizeVsYear();