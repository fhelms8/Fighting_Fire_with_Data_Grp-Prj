// data sources
const paleoData = '/api/paleo';
const spiData = '/api/spi';
const fireData = '/api/texas_fires';
const fbyData = '/api/fires_by_year';
const cbyData = '/api/causes_by_year';
const yearData = 'api/years';

let years = [];
d3.json(yearData).then(data => {data.forEach(get => years.push(get.year))});
// console.log('years',years);

let fby = [];
let fbytotal = [];
d3.json(fbyData).then(data => {
    data.forEach(data => {
        fby.push(data.count / 200)
        fbytotal.push(data.count)
    });
    d3.select('#fires-by-year-bar').html(''); // clears out old graph
    let bar = [{
        x: years,
        y: fbytotal,
        type: 'bar'}];
    let barLayout = {
        title: "# of Texas Wildfires (1992-2015)",
        // height: 300,
        // width: 600
    };
    Plotly.newPlot('fires-by-year-bar', bar, barLayout);
});
console.log(fbytotal);

// get the list of years and causes for the dropdowns
// let selYear = document.getElementById('selFireYear')
// let selCause = document.getElementById('selFireCause')
// let yearList = [];
// let causeList = [];

let countByYear = []
let arsonByYear = []
let campfireByYear = []
let smokingByYear = []
let lightningByYear = []
let equipByYear = []
let childByYear = []
let railByYear = []
let firewByYear = []
let powlineByYear = [] 



d3.json(cbyData).then(get => {
    for (let i=0;i<get.length;i++) {

        // let currYear = get[i].fire_year;
        // currCount = currYear.length;
        // countByYear.push(currCount);
        let cause = get[i].stat_cause_descr;
        let count = get[i].count;

        if (cause == 'Arson'){
            arsonByYear.push(count);
        }
        else if (cause == 'Campfire'){
            campfireByYear.push(count);
        }
        else if (cause == 'Smoking'){
            smokingByYear.push(count);
        }
        else if (cause == 'Lightning'){
            smokingByYear.push(count);
        }
        else if (cause == 'Equipment Use'){
            equipByYear.push(count);
        }
        else if (cause == 'Children'){
            childByYear.push(count);
        }
        else if (cause == 'Railroad'){
            railByYear.push(count);
        }
        else if (cause == 'Fireworks'){
            firewByYear.push(count);
        }
        else if (cause == 'Powerline'){
            powlineByYear.push(count);
        }
    }

    // d3.select('#causes').html(''); // clears out old graph

    total_trace = {
    type: 'bar',
    x: years,
    y: fbytotal,
    mode: 'lines',
    name: 'Total',
    line: {
      color: 'rgb(219, 64, 82)',
      width: 3
    }
    };
    
    arson_trace = {
    type: 'bar',
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
    type: 'bar',
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
    type: 'bar',
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
    type: 'bar',
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
    type: 'bar',
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
    type: 'bar',
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
    type: 'bar',
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
    type: 'bar',
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
    type: 'bar',
    x: years,
    y: powlineByYear,
    mode: 'lines',
    name: 'Powerlines',
    line: {
      color: 'yellow',
      width: 2
    }
    };
    
    let layout = {
    // width: 1000,
    // height: 500,
    // template='plotly_dark'
    plot_bgcolor:"black",
    xaxis: {gridcolor: "grey"},
    yaxis: {gridcolor: "grey"}
    };
    
    let data = [total_trace, arson_trace, camp_trace, 
              child_trace, rail_trace, equip_trace, 
              lightning_trace, powerlines_trace, 
              fireworks_trace];
    
    Plotly.newPlot('causes', data, layout);
});

// console.log('aby',arsonByYear);




d3.json(fireData).then(data => {
    sizeAvgByYear = []
    for (let i = 0; i < years.length; i++) {
        // currYear = data.filter(item => item.FIRE_YEAR == years[i])
        // currCount = currYear.length;
        sizeTotal = 0
        for (let i = 0; i < data.length; i++) {
            sizeTotal = sizeTotal + data[i].FIRE_SIZE 
        }
        currYearAvg = sizeTotal/currCount;
        sizeAvgByYear.push(currYearAvg);
        console.log(`Size Avg in ${sel}:`, currYearAvg)
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
        title: "Average Size by Year",
        height: 300,
        width: 600};
    Plotly.newPlot('size-by-year', trace, Layout);   
})



// plot drought and moisture data from The Living Blended Drought Product (LBDP)
d3.json(paleoData).then(data => {
    // console.log('paleo', data);
    let newData = [];
    let labels = [];
    let d0 = [];
    let d1 = [];
    let d2 = [];
    let d3 = [];
    let d4 = [];
    let w0 = [];
    let w1 = [];
    let w2 = [];
    let w3 = [];
    let w4 = [];
    for (let a=0;a<data.length;a++) {
        curData = data[a];
        newData.push(curData);
        labels.push(curData['date']);
        d0.push(curData['d0']);
        d1.push(curData['d1']);
        d2.push(curData['d2']);
        d3.push(curData['d3']);
        d4.push(curData['d4']);
        w0.push(-curData['w0']);
        w1.push(-curData['w1']);
        w2.push(-curData['w2']);
        w3.push(-curData['w3']);
        w4.push(-curData['w4']);
    }
    // console.log(d0);

    const mapData0 = {
        labels: labels,
        datasets: [
    {
          label: 'Abnormally Dry',
          backgroundColor: 'rgb(253, 255, 0)',
          data: d0,
    },
    {
        label: 'Moderate Drought',
        backgroundColor: 'rgb(255, 204, 153)',
        data: d1,
    },
    {
        label: 'Severe Drought',
        backgroundColor: 'rgb(255, 102, 0)',
        data: d2,
    },
    {
        label: 'Extreme Drought',
        backgroundColor: 'rgb(255, 0, 0)',
        data: d3,
    },
    {
        label: 'Exceptional Drought',
        backgroundColor: 'rgb(102, 0, 0)',
        data: d4,
    },
    {
          label: 'Abnormally Wet',
          backgroundColor: 'rgb(170, 255, 85)',
          data: w0,
    },
    {
        label: 'Moderate Wet',
        backgroundColor: 'rgb(1, 255, 255)',
        data: w1,
    },
    {
        label: 'Severe Wet',
        backgroundColor: 'rgb(0, 170, 255)',
        data: w2,
    },
    {
        label: 'Extreme Wet',
        backgroundColor: 'rgb(0, 0, 255)',
        data: w3,
    },
    {
        label: 'Exceptional Wet',
        backgroundColor: 'rgb(0, 0, 170)',
        data: w4,
    },
    {
        type: 'line',
        pointStyle: 'dash',
        label: 'Fires per Year',
        backgroundColor: 'rgba(75, 192, 192, 0.5)',
        fill: true,
        borderColor: 'rgb(75, 192, 192)',
        tension: 0.1,
        data: fby
    }
    ]
    };
    const config0 = {
        type: 'bar',
        data: mapData0,
        options: {
          plugins: {
            title: {
              display: true,
              text: 'Drought in Texas from 1992-2015'
            },
            legend: {
                position:'right'
            },
          },
          responsive: true,
        }
    };
    let myChart0 = new Chart(
          document.getElementById('myChart0'),
          config0
    );
});

// plot drought and moisture data from The Standardized Precipitation Index (SPI)
d3.json(spiData).then(data => {
    // console.log('spi',data);
    let newData = [];
    let labels = [];
    let d0 = [];
    let d1 = [];
    let d2 = [];
    let d3 = [];
    let d4 = [];
    let w0 = [];
    let w1 = [];
    let w2 = [];
    let w3 = [];
    let w4 = [];
    for (let a=0;a<data.length;a++) {
        curData = data[a];
        newData.push(curData);
        labels.push(curData['date']);
        d0.push(curData['d0']);
        d1.push(curData['d1']);
        d2.push(curData['d2']);
        d3.push(curData['d3']);
        d4.push(curData['d4']);
        w0.push(-curData['w0']);
        w1.push(-curData['w1']);
        w2.push(-curData['w2']);
        w3.push(-curData['w3']);
        w4.push(-curData['w4']);
    }
    // console.log(newData);

    const mapData = {
        labels: labels,
        datasets: [
    {
          label: 'Abnormally Dry',
          backgroundColor: 'rgb(253, 255, 0)',
          data: d0,
    },
    {
        label: 'Moderate Drought',
        backgroundColor: 'rgb(255, 204, 153)',
        data: d1,
    },
    {
        label: 'Severe Drought',
        backgroundColor: 'rgb(255, 102, 0)',
        data: d2,
    },
    {
        label: 'Extreme Drought',
        backgroundColor: 'rgb(255, 0, 0)',
        data: d3,
    },
    {
        label: 'Exceptional Drought',
        backgroundColor: 'rgb(102, 0, 0)',
        data: d4,
    },
    {
          label: 'Abnormally Wet',
          backgroundColor: 'rgb(170, 255, 85)',
          data: w0,
    },
    {
        label: 'Moderate Wet',
        backgroundColor: 'rgb(1, 255, 255)',
        data: w1,
    },
    {
        label: 'Severe Wet',
        backgroundColor: 'rgb(0, 170, 255)',
        data: w2,
    },
    {
        label: 'Extreme Wet',
        backgroundColor: 'rgb(0, 0, 255)',
        data: w3,
    },
    {
        label: 'Exceptional Wet',
        backgroundColor: 'rgb(0, 0, 170)',
        data: w4,
    },
    // {
    //     type: 'line',
    //     label: 'Fires per Year',
    //     backgroundColor: 'rgba(75, 192, 192, 0.5)',
    //     fill: true,
    //     borderColor: 'rgb(75, 192, 192)',
    //     tension: 0.1,
    //     data: fby
    // }
    ]
    };
    const config = {
        type: 'bar',
        data: mapData,
        options: {
          plugins: {
            title: {
              display: true,
              text: 'Drought in Texas from 1992-2015'
            },
            legend: {
                position:'right'
            },
          },
          responsive: true,
        }
    };
    let myChart = new Chart(
          document.getElementById('myChart'),
          config
    );
});