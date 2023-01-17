const graphContext = document.querySelector('#graph');

const data = {
    labels: ['Completed', 'Overdue', 'In Progress'],
    datasets: [
        {
            label: '',
            data: [167, 24, 123],
            backgroundColor: [
                '#00E5C3',
                '#EFBB00',
                '#8068FB'
            ],
            borderWidth: 0,
            cutout: '90%',
            rotation: 180
        }
    ]
};

new Chart(graphContext, {
    type: 'doughnut',
    data: data,
    options: {
        responsive: false,
        plugins: {
            legend: null,
            title: {
                display: false,
            }
        }
    },
})
