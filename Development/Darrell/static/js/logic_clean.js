// data sources

    };
    const config = {
        type: 'line',
        data: mapData,
        options: {
          plugins: {
            title: {
              display: true,
              text: 'xxxx'
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