var ctx = document.getElementById('myChart').getContext('2d');
var chart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'radar',

    // The data for our dataset
    data: {
        labels: ['GM', 'FM', 'RL', 'EL', 'PS'],
        datasets: [{
            borderCapStyle:'',
            label: '',
            backgroundColor: '',
            borderColor: 'rgba(255, 99, 132)',
            data: [70, 60, 50, 85, 60]
        }]
    },

    // Configuration options go here
    options: {
      scale:{
            ticks:{
                display:false,
                beginAtZero: true,
                suggestedMax: 100,
                precision: 0,
                stepSize: 10
            },
            pointLabels: {
                fontSize: 20,
            },
            gridLines: 
            { 
                color: "#131c2b" 
            }
        },
        legend: {
            display:false,  
      }
    }   
});

