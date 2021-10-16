
//load csv
let fire = d3.csv('incidentsSizeMerged.csv');

// console.log(fire);

let fireSize = [];
let fireNumber = [];
let labels = [];

fire.then(get => {
    for (let i = 0; i < get.length; i++) {




        let year = get[i].FIRE_YEAR;
        labels.push(year);

        // console.log('year', year)

        let incidents = get[i].FIRE_INCIDENTS;
        fireNumber.push(incidents);

        let size = get[i].FIRE_SIZE;
        fireSize.push(size);


        // console.log('size and num', year,size, incidents);


    };

    // new Chart(document.getElementById("line-chart"), {
    //     type: 'line',
    //     data: {
    //       labels: [labels],
    //       datasets: [{ 
    //           data: [year],
    //           label: "firesize",
    //           borderColor: "#3e95cd",
    //           fill: false
    //         }, { 
    //           data: [size],
    //           label: "fires",
    //           borderColor: "#8e5ea2",
    //           fill: false
    //         }, { 
    //           data: [168,170,178,190,203,276,408,547,675,734],
    //           label: "Europe",
    //           borderColor: "#3cba9f",
    //           fill: false
    //         }, { 
    //           data: [40,20,10,16,24,38,74,167,508,784],
    //           label: "Latin America",
    //           borderColor: "#e8c3b9",
    //           fill: false
    //         }, { 
    //           data: [6,3,2,2,7,26,82,172,312,433],
    //           label: "North America",
    //           borderColor: "#c45850",
    //           fill: false
    //         }
    //       ]
    //     },
    //     options: {
    //       title: {
    //         display: true,
    //         text: 'World population per region (in millions)'
    //       }
    //     }
    //   });
    // basic line chart settings
    // let options = {
    //     type: 'line',
    //     data: {
    //         labels: [labels],  // the labels we loaded!
    //         datasets: [{
    //             label: "Fire Size (acres)",
    //             data: [fireSize],    // the data we loaded!
    //             fill: false,
    //             pointRadius: 0,
    //             pointHoverRadius: 0,
    //             borderColor: 'rgb(100,100,100)'
    //         }, {
    //             label: "Number of Fire Incidents",
    //             data: [fireNumber],    // the data we loaded!
    //             fill: false,
    //             pointRadius: 0,
    //             pointHoverRadius: 0,
    //             borderColor: 'rgb(0,150,255)'
    //         }]
    //     }
    // };

    // //   // with all that done, we can create our chart!
    // let myChart = new Chart(document.getElementById('canvas'), options);


    new Chart(document.getElementById("line-chart"), {
        type: 'line',
        data: {
            labels: labels,
            datasets: [{
                data: fireNumber,
                label: "Number of Fire Incidents",
                borderColor: "#3e95cd",
                fill: false
            }, {
                data: fireSize,
                label: "Size of Fire (Acres)",
                borderColor: "#8e5ea2",
                fill: false
            }

                // {
                //     data: [168, 170, 178, 190, 203, 276, 408, 547, 675, 734],
                //     label: "Europe",
                //     borderColor: "#3cba9f",
                //     fill: false
                // }, {
                //     data: [40, 20, 10, 16, 24, 38, 74, 167, 508, 784],
                //     label: "Latin America",
                //     borderColor: "#e8c3b9",
                //     fill: false
                // }, {
                //     data: [6, 3, 2, 2, 7, 26, 82, 172, 312, 433],
                //     label: "North America",
                //     borderColor: "#c45850",
                //     fill: false
                // }
                // ]
            ]
        },
        options: {
            title: {
                display: true,
                text: 'Number of Fires/ Acres Damaged'
            }
        }
    });

});
