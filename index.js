var casesCtx = document.getElementById('casesChart').getContext('2d');
var deathsCtx = document.getElementById('deathsChart').getContext('2d');

var chart = new Chart(casesCtx, {
    type: 'line',
    data: {
        labels: data.map(e=> `${e.Date.split('/')[1]}/${e.Date.split('/')[0]}`),
        datasets: [{
            label: 'Cases',
            backgroundColor: 'rgb(3,144,249)',
            borderColor: 'rgb(3,144,249)',
            data: data.map(e=> e.Cases)
        }]
    },
    options: {}
});

var chart = new Chart(deathsCtx, {
    type: 'line',
    data: {
        labels: data.map(e=> `${e.Date.split('/')[1]}/${e.Date.split('/')[0]}`),
        datasets: [{
            label: 'Daily Deaths',
            backgroundColor: 'rgb(179,95,82)',
            borderColor: 'rgb(179,95,82)',
            data: data.map(e=> e["Daily deaths"])
        }]
    },
    options: {}
});