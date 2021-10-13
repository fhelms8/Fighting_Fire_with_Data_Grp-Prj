years = ['2005', '2006', '2007', '2008',
        '2009', '2010', '2011', '2012',
        '2013', '2014', '2015',]

function init(){
    // pull data from the samples.json file
    d3.json("fire_data.json").then(data => {
        // create dropdown options and names from samples.json
        var dropdownMenu = d3.select("#selFireYear");
        years.forEach(item => {
            // loop and populate the names into the dropdown box
            dropdownMenu.append("option") // add option to dropdown
            .property("value", item) // variable name
            .text(item); // populate text 
        })

        console.log(data[20]);

        // //create inital visulizations
        var initYear = dropdownMenu.property("value");
        firesVsYear();
        yearVsSize(initYear);
        yearVsCause(initYear);
    })
};

init();

function firesVsYear(){
    // pull data from jsonfile
    d3.json("fire_data.json").then(data => {
        // loop thru each year, filter and return
        // the number of fires in each year
        fireCountByYear = []
        for (let i = 0; i < years.length; i++) {
            currCount = data.filter(item => item.FIRE_YEAR == years[i]).length;
            fireCountByYear.push(currCount);
        }
        console.log('years:', years);
        console.log('counts:', fireCountByYear)

        d3.select('#fires-by-year-bar').html(''); // clears out old graph
        let bar = [{
            x: years,
            y: fireCountByYear,
            type: 'bar'}];
        let barLayout = {
            title: "Ten Years of Texas Wildfires",
            height: 300,
            width: 600};
        Plotly.newPlot('fires-by-year-bar', bar, barLayout);
        
    })
};
// __________________________________________________________________________

function yearVsSize(selectedYear){
    // pull data from jsonfile
    d3.json("fire_data.json").then(data => {
        // filter data to only selected year
        currYearData = data.filter(item => item.FIRE_YEAR == selectedYear)
        // loop thru, filter and return
        // the number of fires in each year
        fireSizeCount = []
        sizeClass = ['A', 'B', 'C', 'D', 'E', 'F', 'G']
        for (let i = 0; i < sizeClass.length; i++) {
            currCount = currYearData.filter(item => item.FIRE_SIZE_CLASS == sizeClass[i]).length;
            fireSizeCount.push(currCount);
        }
        console.log('counts:', fireSizeCount);
        console.log('Size Classes:', sizeClass)
        d3.select('#fires-by-size').html(''); // clears out old graph
        let bar = [{
            x: sizeClass,
            y: fireSizeCount,
            type: 'bar'}];
        let barLayout = {
            title: `Fires by Size in ${selectedYear}`,
            height: 300,
            width: 600};
        Plotly.newPlot('fires-by-size', bar, barLayout);
        
    })
};
// __________________________________________________________________________

function yearVsCause(selectedYear){
    // pull data from jsonfile
    d3.json("fire_data.json").then(data => {
        // filter data to only selected year
        currYearData = data.filter(item => item.FIRE_YEAR == selectedYear)
        // init lists (dropped 'Miscellaneous', 'Structure', 'Missing/Undefined',
        // 'Debris Burning')
        fireCauseCount = []
        causeList = ['Arson', 'Campfire', 'Smoking', 'Lightning',
            'Equipment Use', 'Children', 'Railroad',
            'Fireworks', 'Powerline']
        // loop thru, filter and return
        // the number of fires in each year
        for (let i = 0; i < causeList.length; i++) {
            currCount = currYearData.filter(item => item.STAT_CAUSE_DESCR == causeList[i]).length;
            fireCauseCount.push(currCount);
        }
        console.log('Cause Count:', fireSizeCount);

        d3.select('#fires-by-cause-bar').html(''); // clears out old graph
        let bar = [{
            x: causeList,
            y: fireCauseCount,
            type: 'bar'}];
        let barLayout = {
            title: `Fires by Cause in ${selectedYear}`,
            height: 300,
            width: 600};
        Plotly.newPlot('fires-by-cause-bar', bar, barLayout);
        
    })
};
// __________________________________________________________________________


// formatting fuction
function capitalize(string) {
return string.charAt(0).toUpperCase() + string.slice(1);
}

// populate Demographics Panel
// populates Bar graph
// function popBar(selected){
//     2010 = []
//     d3.json('fire_data.json').then(data => {
//         console.log(dat[0])
//         var currentId = data.samples.filter(foo => foo.id == selected)[0];
//         d3.select('#bar').html(''); // clears out old graph
//         console.log('Idvalue:', currentId)
//         let updateBar = [{
//             x: currentId.sample_values.slice(0,10),
//             y: currentId.otu_labels.slice(0,10),
//             type: 'bar',
//             orientation: 'h'}];
//         let barLayout = {
//             title: "Cultures in Belly Button",
//             height: 300,
//             width: 600};
//         Plotly.newPlot('bar', updateBar, barLayout);
//     });
// };

// updates visualizations when id is changed
function optionChanged(){
    console.log('option function triggered')
    var currYear = d3.select("#selFireYear").property("value");
    console.log(currYear);
    yearVsSize(currYear);
    yearVsCause(currYear);
};