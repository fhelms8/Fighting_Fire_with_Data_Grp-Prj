let myMap = L.map('map', {
    center: [37.09, -95.71],
    zoom: 5,
});
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(myMap);

let url = '../fires_clean.csv';

d3.csv('../fires_clean.csv').then(function(data) {
    console.log(data);
    
    for (let i=0;i<data.length;i++) {
        let location = [data[i].LATITUDE, data[i].LONGITUDE];
        if (data[i].FIRE_YEAR == '2015' & data[i].FIRE_SIZE_CLASS == 'A') {
            L.circle(location, {
                fillOpacity: 0.75,
                color: 'rgba(0,0,0,0.1)',
                fillColor: 'red',
                radius: 20000
            }).addTo(myMap);
        }
    }
});